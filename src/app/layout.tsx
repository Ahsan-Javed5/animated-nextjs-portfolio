import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import AuroraBackground from "@/components/AuroraBackground";
import GrainOverlay from "@/components/GrainOverlay";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahsan Javed — Developer, Lecturer, Tutor & AI Researcher",
  description:
    "Portfolio of Ahsan Javed — Senior Flutter Developer, university lecturer, math & CS tutor, and AI researcher.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${inter.variable} antialiased`}>
        <AuroraBackground />
        <GrainOverlay />
        <CursorGlow />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}