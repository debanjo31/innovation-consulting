"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedBorderButton } from "./ux/animated-border-button";
import { Button } from "./ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-md">
      <div className="w-[90vw] md:w-5/6 flex h-16 items-center justify-between px-4 mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-white">Logo</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {navigation.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isActive
                    ? "text-red-500 hover:text-red-400"
                    : "text-zinc-200 hover:text-red-500"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <AnimatedBorderButton as="div" className="px-4 py-2">
            <Link href="/contact">Get Started</Link>
          </AnimatedBorderButton>
        </div>
        <button
          className="md:hidden text-zinc-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      <div
        className={cn(
          "md:hidden fixed inset-0 top-16 bg-black transition-all duration-300",
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        )}
        style={{ zIndex: 10000 }}
      >
        <nav className="flex flex-col gap-4 p-6 bg-black/80 backdrop-blur-md">
          {navigation.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-lg font-medium p-3 rounded-lg transition-colors",
                  isActive
                    ? "text-red-500 bg-zinc-900"
                    : "text-zinc-100 hover:bg-zinc-900 hover:text-red-500"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
          <Button
            className="mt-4 w-full bg-red-800 hover:bg-red-900 text-white py-3 text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            <Link href="/contact">Get Started</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
