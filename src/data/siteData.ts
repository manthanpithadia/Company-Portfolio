export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Daniel redesigned our app experience from the ground up. The new flows reduced drop-off significantly — users now complete onboarding in half the time. What stood out most was how he balanced user needs with our business goals throughout the whole process.",
    name: "Daan Vermeer",
    role: "VP of Marketing",
    company: "Catawiki"
  },
  {
    quote: "What impressed me most was how quickly Daniel understood our users. The app he designed felt native from day one — no revisions, no back and forth. He asked the right questions early on, which saved us weeks of iteration later.",
    name: "Isla Bakker",
    role: "Co-Founder",
    company: "Wavefront"
  },
  {
    quote: "Daniel delivered a product that our engineering team could build directly from. Clean specs, a solid design system, and zero ambiguity. Rare combination. On top of that, he was always available to walk the team through edge cases, which made handoff seamless.",
    name: "Ruben Hoekstra",
    role: "CEO",
    company: "MessageBird"
  },
  {
    quote: "We came in with a vague brief and left with an app we're genuinely proud of. Daniel pushed back where it mattered and delivered something better than we imagined. His attention to detail and willingness to challenge our assumptions made all the difference.",
    name: "Nora Lindgren",
    role: "Brand Director",
    company: "Ace & Tate"
  }
];

export const clients = [
  "Adyen",
  "Ace & Tate",
  "Rituals",
  "Swapfiets",
  "MessageBird",
  "Catawiki",
  "Bynder",
  "LogoIpsum"
];

export const services = [
  {
    number: "01",
    title: "UX / UI Design",
    description: "Interfaces that feel right from the very first tap. Crisp visual hierarchy, thoughtful micro-interactions, and accessible layouts."
  },
  {
    number: "02",
    title: "Mobile App Design",
    description: "End-to-end app design for iOS and Android, built to perform under real constraints and scale effortlessly."
  },
  {
    number: "03",
    title: "Interaction & Prototyping",
    description: "Prototypes that bring your product to life instantly, testing flows before a single line of production code is written."
  },
  {
    number: "04",
    title: "Design Systems",
    description: "Component libraries, design tokens, and documentation that keep your entire product suite consistent and agile."
  },
  {
    number: "05",
    title: "User Research & Testing",
    description: "Empirical discovery sessions, usability testing, and analytics-driven insights to validate design hypotheses."
  },
  {
    number: "06",
    title: "Creative Strategy",
    description: "Positioning and messaging rooted in research, helping founders align customer desirability with sustainable monetization."
  }
];

export const philosophy = [
  {
    title: "Clarity first",
    description: "I remove everything that doesn't serve the goal. No noise, no decoration — just focused design that communicates instantly and clearly."
  },
  {
    title: "Craft over speed",
    description: "I'd rather take an extra week to get the details right than ship something almost good enough. The difference is always in the last 10%."
  },
  {
    title: "Built to last",
    description: "Trends fade. I design apps and systems that hold up over time — not because they follow rules, but because they're rooted in something real."
  },
  {
    title: "Collaboration by default",
    description: "Great work happens when designers, developers, and clients think together — not in silos. I involve you at every stage, not just the kickoff."
  }
];

export const experience = [
  {
    role: "Lead Designer",
    company: "Uber Design, Amsterdam",
    period: "2019–2021"
  },
  {
    role: "Senior Designer",
    company: "Booking.com, Amsterdam",
    period: "2017–2019"
  },
  {
    role: "Designer",
    company: "Fabrique Brands, Delft",
    period: "2015–2017"
  },
  {
    role: "Junior Designer",
    company: "Momkai, Amsterdam",
    period: "2013–2015"
  }
];

export const awards = [
  {
    institution: "CSS Design Awards",
    title: "Best UI Design",
    year: "2024"
  },
  {
    institution: "Awwwards",
    title: "Site of the Day / Mobile Excellence",
    year: "2023"
  },
  {
    institution: "FWA of the Day",
    title: "Digital Craft Showcase",
    year: "2022"
  },
  {
    institution: "Dutch Design Awards",
    title: "Product Design Finalist",
    year: "2021"
  }
];

export const faqs = [
  {
    question: "What's your typical project timeline?",
    answer: "Most projects take 4–8 weeks depending on scope. A brand identity usually runs 4–6 weeks, while a full mobile app or website can take 6–8 weeks from kickoff to final engineering handoff."
  },
  {
    question: "How does your pricing work?",
    answer: "We work with fixed project fees, not hourly rates. After an intro call we'll send a clear proposal with scope, timeline, and cost — no surprises."
  },
  {
    question: "What do you need from me to get started?",
    answer: "A short brief helps — your goals, timeline, and budget range. If you don't have one, no problem. We'll figure it out together on a free intro call."
  },
  {
    question: "Do you work with startups or only established brands?",
    answer: "Both. We've helped early-stage startups define their first brand identity and worked with scaling companies on redesigns. What matters is ambition, not company size."
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer: "Yes. We offer monthly retainer packages for brands that need continuous design support, design system maintenance, or new assets after the initial project wraps."
  }
];
