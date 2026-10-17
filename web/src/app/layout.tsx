import type { Metadata } from "next";
import { Fraunces, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ecojhar Agrology | Natural, chemical-free produce from Hazaribagh",
  description:
    "Vegetables, fruit, fish and goat meat grown on 4.16 acres in Tiuj Village, Hazaribagh, Jharkhand. Buy fresh produce or partner with Ecojhar Agrology.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${geistMono.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
