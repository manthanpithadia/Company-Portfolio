"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyEmailButton({ email = "hi@formo.studio" }: { email?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2.5 min-h-[44px] px-5 rounded-pill border border-line bg-surface hover:border-ink text-sm font-medium text-ink transition-all active:translate-y-px"
      title="Click to copy email"
    >
      {copied ? (
        <>
          <Check size={15} className="text-ink" />
          <span className="font-semibold text-ink">Copied to clipboard</span>
        </>
      ) : (
        <>
          <Copy size={14} className="text-muted" />
          <span>{email}</span>
        </>
      )}
    </button>
  );
}
