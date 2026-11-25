"use client";

import { useState } from "react";
import { testimonials } from "@/data/siteData";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function TestimonialSection() {
  const [startIndex, setStartIndex] = useState(0);

  // We display 2 testimonials side by side as shown in user screenshot
  const total = testimonials.length; // 4
  const currentPair = [
    testimonials[startIndex % total],
    testimonials[(startIndex + 1) % total],
  ];

  const prev = () => {
    setStartIndex((prevIdx) => (prevIdx === 0 ? total - 2 : prevIdx - 1));
  };

  const next = () => {
    setStartIndex((prevIdx) => (prevIdx + 1) % total);
  };

  return (
    <div className="w-full flex flex-col justify-between">
      {/* 2-Column Side-by-Side Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {currentPair.map((item, idx) => {
          // Find original index (1-based)
          const origIdx = testimonials.findIndex((t) => t.name === item.name) + 1;
          return (
            <div key={`${item.name}-${idx}`} className="flex flex-col justify-between">
              {/* Quote */}
              <p className="text-sm md:text-[15px] text-muted leading-relaxed min-h-[120px]">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Author & Index Metadata */}
              <div className="mt-6 pt-4 border-t border-line flex items-end justify-between text-xs">
                <div>
                  <h4 className="font-semibold text-sm text-ink">{item.name}</h4>
                  <p className="text-muted mt-0.5">{item.role}, {item.company}</p>
                </div>
                <span className="font-mono text-muted text-xs">
                  {origIdx}/{total}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons on bottom right */}
      <div className="flex justify-end gap-2 mt-8 pt-4">
        <button
          onClick={prev}
          aria-label="Previous testimonials"
          className="w-9 h-9 rounded-full bg-surface hover:bg-[#eaeaea] border border-transparent hover:border-line flex items-center justify-center text-ink transition-colors active:translate-y-px"
        >
          <ArrowLeft size={15} />
        </button>
        <button
          onClick={next}
          aria-label="Next testimonials"
          className="w-9 h-9 rounded-full bg-surface hover:bg-[#eaeaea] border border-transparent hover:border-line flex items-center justify-center text-ink transition-colors active:translate-y-px"
        >
          <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}
