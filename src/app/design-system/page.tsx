"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Copy } from "lucide-react";
import StrideShoppingDemo from "@/components/StrideShoppingDemo";

export default function DesignSystemPage() {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedToken(label);
      setTimeout(() => setCopiedToken(null), 2000);
    } catch {
      // Fallback
    }
  };

  const downloadTokens = () => {
    const css = `:root {
  --canvas:#fff; --ink:#111; --muted:#666; --line:#e8e8e8;
  --surface:#f4f4f4; --media:#f0f0f0; --lime:#d5f541;
  --action:#111; --on-action:#fff; --on-accent:#111; --focus:#2754c5;
  --space-1:4px; --space-2:8px; --space-3:12px; --space-4:16px;
  --space-5:24px; --space-6:32px; --space-7:48px; --space-8:80px;
  --radius-sm:8px; --radius-md:16px; --radius-lg:24px; --radius-pill:999px;
  --font-web:Geist,Arial,sans-serif; --font-app:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
  --display:400 2.5rem/1.05 var(--font-web);
  --body:400 1rem/1.4 var(--font-web);
  --app-title:650 1.5rem/1.15 var(--font-app);
  --app-label:600 .875rem/1.3 var(--font-app);
  --app-caption:400 .75rem/1.35 var(--font-app);
}`;
    const blob = new Blob([css + "\n"], { type: "text/css" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "stride-tokens.css";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const colorTokens = [
    { name: "Canvas", token: "--canvas", hex: "#FFFFFF", bg: "bg-[#FFFFFF]", border: true },
    { name: "Ink and action", token: "--ink / --action", hex: "#111111", bg: "bg-[#111111]", textLight: true },
    { name: "Secondary text", token: "--muted", hex: "#666666", bg: "bg-[#666666]", textLight: true },
    { name: "Media backdrop", token: "--media", hex: "#F0F0F0", bg: "bg-[#F0F0F0]", border: true },
    { name: "Divider", token: "--line", hex: "#E8E8E8", bg: "bg-[#E8E8E8]", border: true },
    { name: "Lime accent", token: "--lime", hex: "#D5F541", bg: "bg-[#D5F541]" },
    { name: "Surface panel", token: "--surface", hex: "#F4F4F4", bg: "bg-[#F4F4F4]", border: true },
    { name: "Accessible focus", token: "--focus", hex: "#2754C5", bg: "bg-[#2754C5]", textLight: true },
  ];

  return (
    <div className="max-w-[1080px] mx-auto px-5 py-12">
      {/* Header */}
      <section className="py-12 border-b border-line grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted">
            Design Tokens & Component Architecture
          </span>
          <h1 className="text-4xl md:text-5xl font-normal tracking-[-0.04em] text-ink mt-2 leading-[1.08]">
            Design for browsing.<br />
            Make the next action clear.
          </h1>
          <p className="mt-4 text-base text-muted max-w-xl leading-relaxed">
            The complete Stride design system reverse-engineered from Formo’s portfolio page and the native sneaker shopping experience.
          </p>
        </div>
        <div className="md:col-span-4 flex flex-col items-start md:items-end justify-end gap-3 pt-4 md:pt-0">
          <Link
            href="/projects/stride"
            className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-ink transition-colors"
          >
            View the live Stride case study ↗
          </Link>
          <button
            onClick={downloadTokens}
            type="button"
            className="inline-flex items-center justify-center min-h-[44px] px-5 rounded-sm bg-surface hover:border-ink border border-transparent text-ink text-sm font-medium transition-colors active:translate-y-px"
          >
            Download CSS tokens
          </button>
        </div>
      </section>

      {/* 1. Color System */}
      <section id="foundations" className="py-14 border-b border-line">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-ink">1. Color Palette</h2>
          <span className="text-xs text-muted font-mono">8 Core Tokens</span>
        </div>
        <p className="text-sm text-muted max-w-2xl mb-8">
          Use white and near-black for structure. Use pale gray to frame imagery and group secondary controls. Reserve electric lime for commercial drops and active category chips.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {colorTokens.map((item) => (
            <figure
              key={item.name}
              onClick={() => copyToClipboard(item.hex, item.name)}
              className="group border border-line rounded-sm overflow-hidden bg-canvas cursor-pointer hover:border-ink transition-colors"
            >
              <div className={`h-20 ${item.bg} ${item.border ? "border-b border-line" : ""} flex items-center justify-center`}>
                <span className={`text-[10px] font-mono font-medium opacity-0 group-hover:opacity-100 transition-opacity px-2 py-0.5 rounded-pill bg-black/70 text-white`}>
                  {copiedToken === item.name ? "Copied!" : "Click to copy"}
                </span>
              </div>
              <figcaption className="p-3 text-xs">
                <span className="font-semibold block text-ink">{item.name}</span>
                <div className="flex items-center justify-between mt-1 text-muted text-[11px] font-mono">
                  <span>{item.hex}</span>
                  <Copy size={11} className="opacity-40 group-hover:opacity-100" />
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 2. CTA & Button Matrix */}
      <section className="py-14 border-b border-line">
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-ink mb-4">2. CTA Hierarchy & Buttons</h2>
        <p className="text-sm text-muted max-w-2xl mb-8">
          The updated Formo CTA button style features an 8px corner radius (`--radius-sm`), neutral surface fill, and an angled arrow indicator (`↗`).
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 rounded-sm bg-surface border border-line">
          {/* Surface Action (The Updated Design) */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-muted">Formo Primary CTA</span>
            <div>
              <button className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm bg-surface hover:bg-[#eaeaea] border border-transparent hover:border-ink/20 text-ink text-sm font-medium transition-all active:translate-y-px group">
                <span>Start a project</span>
                <ArrowUpRight size={15} className="text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
            <p className="text-[11px] text-muted font-mono">bg-surface / rounded-sm: 8px / ↗</p>
          </div>

          {/* Book a Call */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-muted">Hero Action</span>
            <div>
              <button className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 rounded-sm bg-surface hover:bg-[#eaeaea] border border-line hover:border-ink/30 text-ink text-sm font-medium transition-all active:translate-y-px group">
                <span>Book a call</span>
                <ArrowUpRight size={16} className="text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
            <p className="text-[11px] text-muted font-mono">min-h-[44px] / border-line</p>
          </div>

          {/* Lime Accent Drop */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-muted">Lime Drop Action</span>
            <div>
              <button className="inline-flex items-center justify-center gap-2 h-10 px-5 rounded-pill bg-action text-on-action text-xs font-semibold hover:bg-black/85 transition-all">
                <span>Browse collection</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
            <p className="text-[11px] text-muted font-mono">--action: #111 / --radius-pill</p>
          </div>
        </div>
      </section>

      {/* 3. Typography and Spacing */}
      <section className="py-14 border-b border-line">
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-ink mb-6">3. Typography & Spacing Scale</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-surface rounded-sm border border-line">
            <h3 className="text-xs uppercase tracking-wider font-bold text-ink mb-3">Portfolio · Geist Sans</h3>
            <p className="text-3xl font-normal tracking-[-0.04em] text-ink mb-1">Stride Sneaker App</p>
            <p className="text-xs text-muted mb-4 font-mono">Display · 40/42 px · regular · −1.6 px tracking</p>
            <p className="text-sm text-ink mb-1">A sneaker e-commerce app designed for discovery and speed.</p>
            <p className="text-xs text-muted font-mono">Body · 16/22.4 px · regular</p>
          </div>

          <div className="p-6 bg-surface rounded-sm border border-line font-app">
            <h3 className="text-xs uppercase tracking-wider font-bold text-ink mb-3">App · System Sans</h3>
            <p className="text-2xl font-semibold tracking-tight text-ink mb-1">Weekend collection</p>
            <p className="text-xs text-muted mb-4 font-mono">Title · 24 px · semibold</p>
            <p className="text-sm font-semibold text-ink mb-1">Tempo Runner · €89</p>
            <p className="text-xs text-muted font-mono">Label · 14 px · semibold</p>
          </div>
        </div>
      </section>

      {/* 4. Interactive Live Prototype */}
      <section id="components" className="py-14 border-b border-line">
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-ink mb-4">4. Interactive Shopping Component</h2>
        <p className="text-sm text-muted max-w-2xl mb-8">
          The exact interactive sneaker shopping controls implemented directly using the Stride tokens.
        </p>

        <StrideShoppingDemo />
      </section>

      {/* 5. Layout Blueprint & Imagery */}
      <section id="patterns" className="py-14">
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-ink mb-4">5. Layout Blueprint</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-surface rounded-sm border border-line">
            <h3 className="text-sm font-semibold text-ink mb-2">Portfolio Case Study Rail</h3>
            <p className="text-sm text-muted leading-relaxed">
              Keep the header and footer on a broad 1080px container. Offset the main narrative into the right two-thirds at desktop widths with a roughly 693px content rail and 24px gallery gaps.
            </p>
          </div>
          <div className="p-6 bg-surface rounded-sm border border-line">
            <h3 className="text-sm font-semibold text-ink mb-2">Discovery & Onboarding Pattern</h3>
            <p className="text-sm text-muted leading-relaxed">
              For discovery, stack instant search, a campaign banner on lime, and category chips above a product list. Use 8px radii for media frames.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
