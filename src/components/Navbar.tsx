"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-canvas/95 backdrop-blur-md border-b border-line">
      <div className="max-w-[1120px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo: Formo */}
        <Link
          href="/"
          className="font-medium text-[28px] sm:text-[32px] tracking-[-0.04em] text-ink hover:opacity-80 transition-opacity"
        >
          Formo
        </Link>

        {/* Desktop Right Rail: Links + Start a project CTA */}
        <div className="hidden md:flex items-center gap-7">
          {/* Navigation Links */}
          <nav className="flex items-center gap-6 text-[14px] font-normal text-muted">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors duration-200 hover:text-ink ${
                    isActive ? "text-ink font-medium" : "text-muted"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Start a project ↗ CTA Button (matches screenshot: 8px radius, surface bg, angled arrow) */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-[8px] bg-[#f4f4f4] hover:bg-[#eaeaea] text-ink text-[14px] font-medium transition-all duration-200 active:translate-y-px group"
          >
            <span>Start a project</span>
            <ArrowUpRight
              size={14}
              className="text-ink transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-sm text-ink hover:bg-surface"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-3 pb-6 bg-canvas border-b border-line flex flex-col gap-4 animate-in fade-in duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-ink py-1.5 border-b border-line"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 w-full flex items-center justify-center gap-1.5 py-3 rounded-[8px] bg-[#f4f4f4] text-ink font-medium text-[14px]"
          >
            <span>Start a project</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      )}
    </header>
  );
}
