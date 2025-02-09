import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingDock } from "@/components/common/floating-dock";
import Navbar from "@/components/common/Navbar";
import { HeroHighlight } from "@/components/ui/hero-highlight";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sumair Dev",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white `}
      >
        {/* <HeroHighlight> */}
        {children}
        {/* </HeroHighlight> */}
      </body>
    </html>
  );
}
