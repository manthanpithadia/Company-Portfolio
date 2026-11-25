export interface Project {
  slug: string;
  title: string;
  tagline: string;
  client: string;
  year: string;
  platform: string;
  timeline: string;
  category: string;
  gradient: string;
  heroImage: string;
  galleryImages: string[];
  overview: string;
  challenge: string;
  solution: string;
  stats: { label: string; value: string }[];
  deliverables: string[];
  nextSlug: string;
  nextTitle: string;
  prevSlug?: string;
  prevTitle?: string;
}

export const projects: Project[] = [
  {
    slug: "stride",
    title: "Stride",
    tagline: "A sneaker e-commerce app designed for discovery and speed.",
    client: "Foot Locker Europe",
    year: "2026",
    platform: "iOS",
    timeline: "6 weeks",
    category: "Mobile App Design",
    gradient: "from-zinc-900 to-zinc-800",
    heroImage: "https://framerusercontent.com/images/ljLXmQezlil0mWuTbPPF05eDL4s.png?width=1920&height=1536",
    galleryImages: [
      "https://framerusercontent.com/images/zgjCafxHEm6cI2gbQFJAxDWEXdU.png?width=1920&height=1536",
      "https://framerusercontent.com/images/QtgHij16C2iZHRLbeQRQnvRME.png?width=1920&height=1536"
    ],
    overview: "Stride is an editorial mobile shopping experience engineered for sneakerheads, sneaker drops, and high-frequency collector trades. Built to eliminate checkout latency while providing high-fidelity visual storytelling.",
    challenge: "Sneaker drops generate enormous traffic spikes where users demand instant item reservation. Existing apps suffered from fragmented navigation, slow image loads, and drop-offs during high-pressure releases.",
    solution: "A gesture-driven shopping interface featuring predictive caching, instant 1-tap Apple Pay integration, and high-contrast promotional tiles in electric lime for weekend collections.",
    stats: [
      { label: "Checkout Conversion", value: "+38%" },
      { label: "Drop-off Rate", value: "-45%" },
      { label: "App Store Rating", value: "4.9 ★" }
    ],
    deliverables: ["iOS App Design", "Design System", "Interactive Micro-prototypes", "App Store Guidelines"],
    nextSlug: "velo",
    nextTitle: "Velō"
  },
  {
    slug: "velo",
    title: "Velō",
    tagline: "A smart cycling companion app for urban riders in Amsterdam.",
    client: "Swapfiets",
    year: "2025",
    platform: "iOS",
    timeline: "4 weeks",
    category: "Mobility & IoT",
    gradient: "from-blue-950 to-slate-900",
    heroImage: "https://framerusercontent.com/images/qg4WyJaKfKGFeSmBh3XsvRNVk.png?width=1920&height=1536",
    galleryImages: [
      "https://framerusercontent.com/images/zgjCafxHEm6cI2gbQFJAxDWEXdU.png?width=1920&height=1536",
      "https://framerusercontent.com/images/QtgHij16C2iZHRLbeQRQnvRME.png?width=1920&height=1536"
    ],
    overview: "Velō connects urban commuter cyclists with real-time bicycle telematics, smart anti-theft locking mechanisms, and intuitive rain-safe city route planning in Amsterdam.",
    challenge: "Riders needed an interface that could be glanced at safely while navigating cobblestones and heavy bicycle traffic, without overwhelming cognitive load.",
    solution: "High-contrast typography, oversized tap targets, dark-mode prioritized routing, and automated maintenance diagnostic alerts based on ride telemetry.",
    stats: [
      { label: "Active Daily Riders", value: "120K+" },
      { label: "Repair Booking Speed", value: "2.4x" },
      { label: "Crash Incident Drops", value: "-18%" }
    ],
    deliverables: ["Product Strategy", "iOS Design", "Hardware Telemetry UI", "Turn-by-Turn Map Styles"],
    prevSlug: "stride",
    prevTitle: "Stride",
    nextSlug: "vaultkey",
    nextTitle: "Vaultkey"
  },
  {
    slug: "vaultkey",
    title: "Vaultkey",
    tagline: "A mobile banking app designed for clarity and control.",
    client: "Monzo Bank",
    year: "2026",
    platform: "iOS & Android",
    timeline: "5 weeks",
    category: "Fintech",
    gradient: "from-emerald-950 to-zinc-900",
    heroImage: "https://framerusercontent.com/images/QtgHij16C2iZHRLbeQRQnvRME.png?width=1920&height=1536",
    galleryImages: [
      "https://framerusercontent.com/images/ljLXmQezlil0mWuTbPPF05eDL4s.png?width=1920&height=1536"
    ],
    overview: "Vaultkey rethinks personal finance management from first principles, giving users an unopinionated, razor-sharp view of their liquidity, automated savings pots, and borderless FX.",
    challenge: "Most banking apps hide fees behind fine print and clutter users with pushy financial upsells and fragmented account statements.",
    solution: "A calm, data-dense interface featuring real-time transaction categorisation, predictive cash-flow runways, and hardware-secured biometric authorization.",
    stats: [
      { label: "Monthly Savings Rate", value: "+24%" },
      { label: "Weekly Retention", value: "84%" },
      { label: "Support Ticket Volume", value: "-32%" }
    ],
    deliverables: ["Fintech Design System", "iOS & Android UX", "Security & Biometrics Flow", "Design Tokens"],
    prevSlug: "velo",
    prevTitle: "Velō",
    nextSlug: "marche",
    nextTitle: "Marché"
  },
  {
    slug: "marche",
    title: "Marché",
    tagline: "A grocery delivery app built around local sourcing and seasonal freshness.",
    client: "Picnic",
    year: "2025",
    platform: "iOS & Android",
    timeline: "6 weeks",
    category: "E-Commerce",
    gradient: "from-amber-950 to-stone-900",
    heroImage: "https://framerusercontent.com/images/ljLXmQezlil0mWuTbPPF05eDL4s.png?width=1920&height=1536",
    galleryImages: [
      "https://framerusercontent.com/images/zgjCafxHEm6cI2gbQFJAxDWEXdU.png?width=1920&height=1536"
    ],
    overview: "Marché connects local organic farmers and artisanal bakeries directly to doorsteps across Northern Europe with transparent provenance and sustainable batch deliveries.",
    challenge: "Fresh produce requires dynamic stock replenishment that updates throughout the day, while encouraging users to discover seasonal culinary ingredients.",
    solution: "Editorial recipe integration, farmer spotlight cards, and a dynamic basket optimization system that consolidates deliveries into green delivery windows.",
    stats: [
      { label: "Average Order Value", value: "€68.50" },
      { label: "Freshness Satisfaction", value: "99.1%" },
      { label: "Repeat Order Cycle", value: "5.2 days" }
    ],
    deliverables: ["Cross-platform App UI", "Recipe-to-Cart Flow", "Logistics Driver App", "Illustration Direction"],
    prevSlug: "vaultkey",
    prevTitle: "Vaultkey",
    nextSlug: "stride",
    nextTitle: "Stride"
  }
];
