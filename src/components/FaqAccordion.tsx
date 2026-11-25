"use client";

import { useState } from "react";
import { faqs } from "@/data/siteData";
import { ChevronDown } from "lucide-react";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full divide-y divide-line border-y border-line">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="py-6 transition-colors">
            <button
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between text-left group"
              aria-expanded={isOpen}
            >
              <span className="text-lg md:text-xl font-medium text-ink group-hover:text-muted transition-colors">
                {faq.question}
              </span>
              <span
                className={`ml-4 p-2 rounded-full border border-line text-ink transition-transform duration-200 ${
                  isOpen ? "rotate-180 bg-surface" : ""
                }`}
              >
                <ChevronDown size={16} />
              </span>
            </button>
            {isOpen && (
              <div className="mt-4 text-sm md:text-base text-muted leading-relaxed pr-8 animate-in fade-in duration-200">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
