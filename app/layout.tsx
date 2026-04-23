import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Footer } from "~/shared/ui/footer";
import { Nav } from "~/shared/ui/nav";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cuidar sense perdre's - Guia psicoeducativa per a familiars",
    template: "%s · Cuidar sense perdre's",
  },
  description:
    "Guia psicoeducativa per a familiars de persones amb càncer. Recursos emocionals, estratègies de suport i acompanyament al llarg del procés oncològic.",
  openGraph: {
    type: "website",
    locale: "ca_ES",
    siteName: "Cuidar sense perdre's",
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
      </body>
    </html>
  );
}
