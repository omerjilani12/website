import type { Metadata, Viewport } from "next";
import { Jost, Newsreader, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { SITE_URL, studio } from "@/lib/site";

/* Only the weights the site actually uses. Every extra face is a font file
   the visitor downloads before they can read anything. */
const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${studio.name}, ${studio.tagline}`,
    template: `%s | ${studio.name}`,
  },
  description:
    "A multidisciplinary architecture studio in Islamabad. Architecture, interiors, CDA approvals and construction under one roof. Designed for how you live, built for how Islamabad's climate behaves.",
  keywords: [
    "architect Islamabad",
    "architecture firm Islamabad",
    "CDA approved architect",
    "house design Islamabad",
    "interior design Islamabad",
    "design and build Islamabad",
    "5 marla house design",
    "1 kanal house design",
  ],
  authors: [{ name: studio.architect }],
  creator: studio.architect,
  publisher: studio.name,
  category: "Architecture",
  applicationName: studio.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: SITE_URL,
    siteName: studio.name,
    title: `${studio.name}, ${studio.tagline}`,
    description:
      "Architecture, interiors, approvals and construction under one roof. Islamabad.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${studio.name}, ${studio.tagline}`,
    description:
      "Architecture, interiors, approvals and construction under one roof. Islamabad.",
  },
  appleWebApp: { capable: true, title: "Vector", statusBarStyle: "default" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#F4F2EC",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ArchitecturalService",
  name: studio.name,
  description: studio.intro,
  url: SITE_URL,
  telephone: studio.phone,
  email: studio.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${studio.address.line1}, ${studio.address.line2}`,
    addressLocality: studio.address.city,
    addressCountry: "PK",
  },
  founder: {
    "@type": "Person",
    name: studio.architect,
    jobTitle: "Architect",
    hasCredential: studio.credentialFull,
  },
  areaServed: [
    { "@type": "City", name: "Islamabad" },
    { "@type": "City", name: "Rawalpindi" },
  ],
  sameAs: [studio.social.instagram, studio.social.facebook],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${newsreader.variable} ${plexMono.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col bg-bone text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="eyebrow sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:bg-ink focus:px-4 focus:py-2 focus:text-bone"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
