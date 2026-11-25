"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [amsTime, setAmsTime] = useState("10:42 AM");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Amsterdam is Europe/Amsterdam
      const timeStr = now.toLocaleTimeString("en-US", {
        timeZone: "Europe/Amsterdam",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setAmsTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-canvas border-t border-line pt-20 pb-16">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Main Footer Grid: Formo® on left, Columns on right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-16">
          {/* Left: Brand Logo */}
          <div className="md:col-span-5">
            <Link href="/" className="font-bold text-2xl tracking-tight text-ink hover:opacity-80 transition-opacity">
              Formo
            </Link>
          </div>

          {/* Right Columns: Navigate, Connect, Based in */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1: Navigate */}
            <div>
              <h4 className="text-xs font-medium text-ink mb-4">
                Navigate
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-muted">
                <li>
                  <Link href="/" className="hover:text-ink transition-colors">Home</Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-ink transition-colors">Projects</Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-ink transition-colors">About</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-ink transition-colors">Contact</Link>
                </li>
                <li>
                  <Link href="/design-system" className="hover:text-ink transition-colors">Design System</Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Connect */}
            <div>
              <h4 className="text-xs font-medium text-ink mb-4">
                Connect
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-muted">
                <li>
                  <a
                    href="https://x.com/kadircalik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-ink transition-colors"
                  >
                    X (Twitter)
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-ink transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-ink transition-colors"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Based in */}
            <div>
              <h4 className="text-xs font-medium text-ink mb-4">
                Based in
              </h4>
              <p className="text-xs sm:text-sm text-muted font-mono">
                AMS {amsTime}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <div>
            © {new Date().getFullYear()} Formo · Template by Kadir Calik
          </div>
          <div className="flex items-center gap-6">
            <Link href="/legal/terms-of-service" className="hover:text-ink transition-colors">
              Terms of Service
            </Link>
            <Link href="/legal/privacy-policy" className="hover:text-ink transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
