"use client";

import { useState } from "react";
import { studio, whatsappHref } from "@/lib/site";

const projectTypes = [
  "New house",
  "Commercial",
  "Interior / fit-out",
  "Renovation",
  "Not sure yet",
];

const field =
  "w-full border border-rule bg-bone px-4 py-3 font-body text-[16px] text-ink placeholder:text-stone-2 transition-colors focus:border-sage focus:outline-none disabled:opacity-60";

type Status = "idle" | "sending" | "sent" | "error";

const empty = {
  name: "",
  email: "",
  phone: "",
  location: "",
  type: projectTypes[0],
  size: "",
  message: "",
  company: "", // honeypot
};

export default function ContactForm() {
  const [values, setValues] = useState(empty);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const set = (k: keyof typeof values) => (v: string) =>
    setValues((prev) => ({ ...prev, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setValues(empty);
      setStatus("sent");
    } catch {
      setError(
        `We could not reach the server. Please WhatsApp us on ${studio.phone}.`,
      );
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="border-l-2 border-sage bg-bone-2 px-6 py-8">
        <p className="eyebrow text-sage">Message sent</p>
        <h3 className="mt-4 font-display text-[26px] leading-tight font-light text-ink">
          Thank you. We will be in touch.
        </h3>
        <p className="mt-4 max-w-[46ch] text-[16.5px] leading-relaxed text-stone">
          Omer reads every enquiry himself and usually replies within a working
          day. If it is urgent, WhatsApp is faster.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-5">
          <a
            href={whatsappHref(
              "Hello, I just sent an enquiry through the website.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border border-sage bg-sage px-6 py-3 font-display text-[14px] tracking-[0.05em] text-bone transition-colors hover:border-sage-deep hover:bg-sage-deep"
          >
            WhatsApp {studio.phone}
          </a>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="link-underline font-display text-[15px] tracking-[0.04em] text-sage"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="eyebrow text-stone-2">Your name</span>
          <input
            type="text"
            required
            autoComplete="name"
            value={values.name}
            onChange={(e) => set("name")(e.target.value)}
            disabled={sending}
            placeholder="Name"
            className={field}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="eyebrow text-stone-2">Email</span>
          <input
            type="email"
            required
            autoComplete="email"
            value={values.email}
            onChange={(e) => set("email")(e.target.value)}
            disabled={sending}
            placeholder="you@example.com"
            className={field}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="eyebrow text-stone-2">Phone or WhatsApp</span>
          <input
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => set("phone")(e.target.value)}
            disabled={sending}
            placeholder="03xx xxxxxxx"
            className={field}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="eyebrow text-stone-2">Plot location</span>
          <input
            type="text"
            value={values.location}
            onChange={(e) => set("location")(e.target.value)}
            disabled={sending}
            placeholder="e.g. DHA Phase II, Islamabad"
            className={field}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="eyebrow text-stone-2">Project type</span>
          <select
            value={values.type}
            onChange={(e) => set("type")(e.target.value)}
            disabled={sending}
            className={field}
          >
            {projectTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span className="eyebrow text-stone-2">Plot size or area</span>
          <input
            type="text"
            value={values.size}
            onChange={(e) => set("size")(e.target.value)}
            disabled={sending}
            placeholder="e.g. 10 marla, or 3,000 sq ft"
            className={field}
          />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="eyebrow text-stone-2">What do you have in mind?</span>
        <textarea
          rows={5}
          value={values.message}
          onChange={(e) => set("message")(e.target.value)}
          disabled={sending}
          placeholder="A sentence or two is enough to start."
          className={`${field} resize-y`}
        />
      </label>

      {/* Honeypot. Hidden from people, tempting to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Company
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.company}
            onChange={(e) => set("company")(e.target.value)}
          />
        </label>
      </div>

      {status === "error" ? (
        <p
          role="alert"
          className="border-l-2 border-brass bg-bone-2 px-4 py-3 text-[15.5px] text-ink"
        >
          {error}
        </p>
      ) : null}

      <div className="mt-2 flex flex-wrap items-center gap-5">
        <button
          type="submit"
          disabled={sending}
          className="inline-flex items-center justify-center border border-sage bg-sage px-7 py-3.5 font-display text-[14.5px] tracking-[0.05em] text-bone transition-colors duration-300 hover:border-sage-deep hover:bg-sage-deep disabled:cursor-not-allowed disabled:opacity-70"
        >
          {sending ? "Sending" : "Send enquiry"}
        </button>
        <a
          href={whatsappHref(
            "Hello, I'd like to talk about a project in Islamabad.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline font-display text-[15px] tracking-[0.04em] text-sage"
        >
          Or message us on WhatsApp
        </a>
      </div>

      <p className="spec mt-1 text-[11.5px] leading-relaxed text-stone-2">
        Your details go straight to the studio inbox. We do not share them.
      </p>
    </form>
  );
}
