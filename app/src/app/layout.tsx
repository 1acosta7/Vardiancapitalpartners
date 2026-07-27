import type { Metadata } from "next";
import {
  playfair,
  cormorant,
  montserrat,
  lato,
  libreBaskerville,
} from "@/lib/fonts";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const BASE_URL = "https://vardiancapitalpartners.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Vardian Capital Partners — Wealth Strategy & Legacy Planning | Manhattan Beach, CA",
    template: "%s | Vardian Capital Partners",
  },
  description:
    "Vardian Capital Partners is a wealth strategy and legacy planning firm in Manhattan Beach, CA. We help families protect what they've built, grow tax-advantaged wealth, and create a lasting legacy — guided by truth, education, and integrity.",
  keywords: [
    "wealth management Manhattan Beach",
    "legacy planning California",
    "life insurance wealth building",
    "financial advisor Manhattan Beach CA",
    "tax-advantaged wealth strategies",
    "family wealth planning",
    "faith-guided financial planning",
    "generational wealth",
    "estate planning coordination",
    "financial education families",
    "Vardian Capital Partners",
    "Mathew Acosta financial advisor",
    "Roxy Acosta CMT",
    "wealth protection strategies",
    "indexed universal life insurance",
  ],
  authors: [{ name: "Vardian Capital Partners" }],
  creator: "Vardian Capital Partners",
  publisher: "Vardian Capital Partners",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Vardian Capital Partners",
    title: "Vardian Capital Partners — Truth. Protection. Wealth.",
    description:
      "A premium wealth strategy and legacy planning platform for families who think in generations. Based in Manhattan Beach, CA.",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1536,
        height: 1024,
        alt: "Vardian Capital Partners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vardian Capital Partners",
    description:
      "Protect What Matters. Build What Lasts. Wealth strategy & legacy planning in Manhattan Beach, CA.",
    images: [`${BASE_URL}/og-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={[
        playfair.variable,
        cormorant.variable,
        montserrat.variable,
        lato.variable,
        libreBaskerville.variable,
        "antialiased",
      ].join(" ")}
    >
      <body className="min-h-screen flex flex-col bg-obsidian text-alabaster font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["Organization", "FinancialService"],
                  "@id": "https://vardiancapitalpartners.com/#organization",
                  name: "Vardian Capital Partners",
                  url: "https://vardiancapitalpartners.com",
                  logo: "https://vardiancapitalpartners.com/logo-vardian.png",
                  email: "info@vardiancapitalpartners.com",
                  description:
                    "Vardian Capital Partners is a wealth strategy and legacy planning firm helping families protect, grow, and pass on wealth — guided by truth, education, and integrity.",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Manhattan Beach",
                    addressRegion: "CA",
                    addressCountry: "US",
                  },
                  areaServed: {
                    "@type": "State",
                    name: "California",
                  },
                  founders: [
                    {
                      "@type": "Person",
                      name: "Mathew Acosta",
                      jobTitle: "Co-Founder, Licensed Life & Wealth Strategist",
                    },
                    {
                      "@type": "Person",
                      name: "Roxy Acosta",
                      jobTitle: "Co-Founder, CMT Candidate & Market Educator",
                    },
                  ],
                  knowsAbout: [
                    "Life Insurance",
                    "Wealth Management",
                    "Legacy Planning",
                    "Estate Planning",
                    "Tax-Advantaged Growth",
                    "Financial Education",
                    "Family Wealth Strategy",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://vardiancapitalpartners.com/#website",
                  url: "https://vardiancapitalpartners.com",
                  name: "Vardian Capital Partners",
                  publisher: {
                    "@id": "https://vardiancapitalpartners.com/#organization",
                  },
                },
              ],
            }),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
