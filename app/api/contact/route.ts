import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { studio } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Where enquiries are delivered.
 *
 * This lives in the route handler, not in lib/site.ts, and it has to stay
 * here. Client components import `studio` from lib/site, which serialises
 * that whole object into the browser bundle, so an address kept there is
 * readable by anyone who opens the JS. A route handler never reaches the
 * client. Override per environment with CONTACT_TO.
 */
const ENQUIRIES_TO = "omerkhawaja12@gmail.com";

const LIMIT = {
  name: 120,
  email: 200,
  phone: 40,
  location: 160,
  type: 60,
  size: 80,
  message: 4000,
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Light per-instance throttle. Not a substitute for a WAF, but it stops the
 *  obvious case of one client hammering the endpoint. */
const recent = new Map<string, number[]>();
const MAX_PER_HOUR = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  const hourAgo = now - 60 * 60 * 1000;
  const hits = (recent.get(ip) ?? []).filter((t) => t > hourAgo);
  hits.push(now);
  recent.set(ip, hits);
  if (recent.size > 5000) recent.clear();
  return hits.length > MAX_PER_HOUR;
}

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

const escapeHtml = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[c]!,
  );

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "That request could not be read. Please try again." },
      { status: 400 },
    );
  }

  // Honeypot. Real people never fill this in; bots usually do.
  if (clean(body.company, 200)) return NextResponse.json({ ok: true });

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      {
        error: `Too many messages from this connection. Please WhatsApp us on ${studio.phone}.`,
      },
      { status: 429 },
    );
  }

  const name = clean(body.name, LIMIT.name);
  const email = clean(body.email, LIMIT.email);
  const phone = clean(body.phone, LIMIT.phone);
  const location = clean(body.location, LIMIT.location);
  const type = clean(body.type, LIMIT.type) || "Not specified";
  const size = clean(body.size, LIMIT.size);
  const message = clean(body.message, LIMIT.message);

  if (!name) {
    return NextResponse.json(
      { error: "Please tell us your name." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "That email address does not look right. Please check it." },
      { status: 400 },
    );
  }

  const user = process.env.EMAIL_USERNAME;
  const pass = process.env.EMAIL_PASSWORD;

  if (!user || !pass) {
    console.error(
      "[contact] EMAIL_USERNAME / EMAIL_PASSWORD are not set. Enquiry not sent.",
    );
    return NextResponse.json(
      {
        error: `The form is not connected yet. Please WhatsApp us on ${studio.phone}.`,
      },
      { status: 500 },
    );
  }

  const port = Number(process.env.EMAIL_PORT ?? 465);
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST ?? "mail.privateemail.com",
    port,
    secure: port === 465, // 465 = implicit TLS, 587 = STARTTLS
    auth: { user, pass },
  });

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "Not given"],
    ["Project", type],
    ["Location", location || "Not given"],
    ["Plot / area", size || "Not given"],
  ];

  const text = [
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    "Message:",
    message || "(none)",
    "",
    `Sent from the ${studio.name} website.`,
  ].join("\n");

  const html = `
<div style="background:#f4f2ec;padding:28px;font-family:Helvetica,Arial,sans-serif;color:#141815">
  <div style="max-width:600px;margin:0 auto;background:#fff;border:1px solid #d5d1c4">
    <div style="background:#5f6d61;padding:18px 24px">
      <p style="margin:0;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#f4f2ec">
        New enquiry
      </p>
      <p style="margin:6px 0 0;font-size:20px;color:#fff">${escapeHtml(name)}</p>
    </div>
    <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse">
      ${rows
        .map(
          ([k, v]) => `<tr>
        <td style="padding:12px 24px;border-bottom:1px solid #e2dfd4;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#868d84;width:130px;vertical-align:top">${k}</td>
        <td style="padding:12px 24px;border-bottom:1px solid #e2dfd4;font-size:15px;color:#141815">${escapeHtml(v)}</td>
      </tr>`,
        )
        .join("")}
    </table>
    <div style="padding:20px 24px">
      <p style="margin:0 0 8px;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#868d84">Message</p>
      <p style="margin:0;font-size:15px;line-height:1.6;white-space:pre-wrap">${
        escapeHtml(message) || "<em style='color:#868d84'>No message</em>"
      }</p>
    </div>
    <div style="padding:14px 24px;background:#eae7dd">
      <a href="mailto:${escapeHtml(email)}" style="font-size:14px;color:#5f6d61">Reply to ${escapeHtml(name)}</a>
    </div>
  </div>
</div>`;

  try {
    await transporter.sendMail({
      // From stays the authenticated mailbox so SPF and DKIM line up. The
      // sender's own address goes in replyTo, so hitting reply answers them.
      from: `"${studio.name} website" <${user}>`,
      to: process.env.CONTACT_TO || ENQUIRIES_TO || user,
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject: `New enquiry: ${type}${location ? ` in ${location}` : ""}`,
      text,
      html,
    });
  } catch (err) {
    console.error("[contact] sendMail failed:", err);
    return NextResponse.json(
      {
        error: `We could not send that just now. Please WhatsApp us on ${studio.phone}.`,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
