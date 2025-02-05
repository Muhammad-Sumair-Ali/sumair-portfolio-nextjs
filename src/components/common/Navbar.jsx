"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoonIcon, Languages, AppWindow } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/blog", label: "Blog" },
  { href: "/guestbook", label: "Guestbook" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/uses", label: "Uses" },
];

export default function Navbar() {
  const [active, setActive] = useState("");

  return (
    <div className="fixed inset-x-0 z-50 top-4 mx-auto flex justify-center">
      <header className="max-w-[950px] w-full bg-white/10 backdrop-blur-sm rounded-full px-6 shadow-lg">
        <nav className="flex items-center justify-between py-3">
          {/* Left - Logo */}
          <Link href="/" className="text-xl font-mono font-semibold text-white tracking-widest">
            MS
          </Link>

          {/* Right - Links */}
          <div className="flex items-center gap-5 gap-x-6 text-sm">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setActive(link.href)}
                className={`text-gray-400 hover:text-white transition-all duration-300 ${
                  active === link.href ? "text-white underline" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="flex items-center gap-x-3 border-l  border-gray-700"> 
            <Button variant="ghost" size="icon" className="ml-2 text-gray-300 hover:text-gray-900 transition-all">
              <MoonIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-gray-900 transition-all">
              <Languages className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-gray-900 transition-all">
              <AppWindow className="h-5 w-5" />
            </Button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
