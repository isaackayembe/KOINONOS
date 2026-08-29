import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/components/language-provider";
import "./globals.css";
import IOSDetect from '@/components/ios-detect'

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "KOINONOS | Technologies & Sécurité",
    template: "%s | KOINONOS",
  },
  description:
    "Solutions professionnelles en sécurité électronique, cybersécurité, réseaux, développement logiciel et maintenance informatique à Kinshasa.",
  keywords: [
    "KOINONOS",
    "cybersécurité",
    "sécurité électronique",
    "réseaux informatiques",
    "développement logiciel",
    "Kinshasa",
    "RDC",
  ],
  openGraph: {
    title: "KOINONOS | Technologies & Sécurité",
    description:
      "Nous protégeons, connectons et transformons votre entreprise grâce à des solutions technologiques de bout en bout.",
    type: "website",
    locale: "fr_CD",
    siteName: "KOINONOS",
  },
  icons: {
    icon: "/images/koinonos-logo.jpeg",
    shortcut: "/images/koinonos-logo.jpeg",
    apple: "/images/koinonos-logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <IOSDetect />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
