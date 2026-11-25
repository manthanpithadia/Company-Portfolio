import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Formo — Minimal Portfolio Studio Template",
  description: "A clean, minimal portfolio built for mobile app designers, UI/UX freelancers, and solo studios. Crafted in Amsterdam.",
  keywords: ["Mobile App Design", "UI/UX", "Portfolio", "Framer", "Product Design", "Amsterdam", "Stride"],
  authors: [{ name: "Kadir Calik" }],
  openGraph: {
    title: "Formo — Minimal Portfolio Studio Template",
    description: "Crafting products that feel intuitive, look sharp, and perform from day one.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col justify-between`}>
        <SmoothScroll>
          <ScrollProgress />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
