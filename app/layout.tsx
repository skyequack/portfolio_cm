import type { Metadata } from "next";
import { Inter, Playfair_Display, IBM_Plex_Sans_Arabic, Amiri } from "next/font/google";
import "./globals.css";

// English fonts
const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Arabic fonts
const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-body-ar",
  subsets: ["arabic"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const amiri = Amiri({
  variable: "--font-heading-ar",
  subsets: ["arabic"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Yousef Rashid Al-Rashid | Chairman, CEO & Principal Investor",
  description: "Building enduring businesses through disciplined leadership and strategic investment. Board leader and entrepreneur with expertise in governance, turnarounds, and portfolio growth.",
  keywords: ["Chairman", "CEO", "Board Leadership", "Strategic Investment", "Turnaround Leadership", "Governance", "Saudi Arabia"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={`${inter.variable} ${playfair.variable} ${ibmPlexArabic.variable} ${amiri.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
