import type { Metadata } from "next";
import { Google_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "~/shared/lib/config";
import { Footer } from "~/shared/ui/footer";
import { MobileNav } from "~/shared/ui/mobile-nav";
import { Nav } from "~/shared/ui/nav";

const geistSans = Google_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cuidar sense perdre's — Guia psicoeducativa per a familiars",
    template: "%s · Cuidar sense perdre's",
  },
  description:
    "Guia psicoeducativa per a familiars de persones amb càncer. Recursos emocionals, estratègies de suport i acompanyament al llarg del procés oncològic.",
  keywords: [
    "càncer",
    "familiars de persones amb càncer",
    "guia psicoeducativa",
    "suport emocional",
    "oncologia",
    "benestar psicològic",
    "cuidadors",
    "acompanyament",
  ],
  authors: [{ name: "Maria Collet" }],
  openGraph: {
    type: "website",
    locale: "ca_ES",
    siteName: "Cuidar sense perdre's",
    title: "Cuidar sense perdre's — Guia psicoeducativa per a familiars",
    description:
      "Guia psicoeducativa per a familiars de persones amb càncer. Recursos emocionals, estratègies de suport i acompanyament al llarg del procés oncològic.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cuidar sense perdre's — Guia psicoeducativa per a familiars",
    description:
      "Guia psicoeducativa per a familiars de persones amb càncer. Recursos emocionals, estratègies de suport i acompanyament al llarg del procés oncològic.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ca" className={geistSans.variable}>
      <body className="min-h-screen flex flex-col bg-canvas text-ink antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileNav />
      </body>
    </html>
  );
}
