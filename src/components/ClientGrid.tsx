import React from "react";

// Client Brand Logo SVGs exactly matching screenshot 2
const clientLogos = [
  {
    name: "Adyen",
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10 fill-current text-ink/70">
        <rect x="2" y="2" width="36" height="36" rx="10" fill="currentColor" fillOpacity="0.8" />
        <circle cx="20" cy="20" r="8" fill="white" />
      </svg>
    ),
  },
  {
    name: "Rituals",
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10 fill-current text-ink/70">
        <path d="M20 4L22 14L32 10L26 18L36 20L26 22L32 30L22 26L20 36L18 26L8 30L14 22L4 20L14 18L8 10L18 14Z" fill="currentColor" fillOpacity="0.8" />
      </svg>
    ),
  },
  {
    name: "MessageBird",
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10 fill-current text-ink/70">
        <path d="M4 20C4 20 12 10 20 10C28 10 36 20 36 20C36 20 28 30 20 30C12 30 4 20 4 20Z" fill="currentColor" fillOpacity="0.8" />
        <circle cx="20" cy="20" r="5" fill="white" />
      </svg>
    ),
  },
  {
    name: "Bynder",
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10 fill-current text-ink/70">
        <rect x="4" y="4" width="32" height="32" rx="8" fill="currentColor" fillOpacity="0.8" />
        <path d="M20 8V32M8 20H32M11.5 11.5L28.5 28.5M11.5 28.5L28.5 11.5" stroke="white" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    name: "Ace & Tate",
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10 stroke-current text-ink/70 fill-none">
        <path d="M8 26C8 16 16 8 26 8H30V32H26C16 32 8 26 8 26Z" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Swapfiets",
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10 fill-current text-ink/70">
        <rect x="6" y="8" width="8" height="24" rx="4" fill="currentColor" fillOpacity="0.8" />
        <rect x="18" y="8" width="6" height="24" rx="3" fill="currentColor" fillOpacity="0.8" />
        <rect x="28" y="8" width="6" height="24" rx="3" fill="currentColor" fillOpacity="0.8" />
      </svg>
    ),
  },
  {
    name: "Catawiki",
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10 stroke-current text-ink/70 fill-none">
        <circle cx="20" cy="20" r="14" strokeWidth="3" />
        <circle cx="20" cy="20" r="9" strokeWidth="2.5" />
        <circle cx="20" cy="20" r="4" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "LogoIpsum",
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10 fill-current text-ink/70">
        <path d="M6 14H16L12 28H2L6 14Z" fill="currentColor" fillOpacity="0.8" />
        <circle cx="26" cy="18" r="6" fill="currentColor" fillOpacity="0.8" />
        <rect x="22" y="24" width="8" height="4" rx="2" fill="currentColor" fillOpacity="0.8" />
      </svg>
    ),
  },
];

export default function ClientGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-12 gap-x-8 w-full">
      {clientLogos.map((client) => (
        <div
          key={client.name}
          className="flex flex-col items-center justify-center text-center gap-3 group select-none cursor-default"
        >
          <div className="h-10 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
            {client.icon}
          </div>
          <span className="text-xs sm:text-sm font-medium text-ink/80 group-hover:text-ink transition-colors">
            {client.name}
          </span>
        </div>
      ))}
    </div>
  );
}
