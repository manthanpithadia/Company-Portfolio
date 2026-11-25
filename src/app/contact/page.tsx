"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import CopyEmailButton from "@/components/CopyEmailButton";
import FaqAccordion from "@/components/FaqAccordion";
import MotionReveal from "@/components/MotionReveal";

export default function ContactPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [budget, setBudget] = useState("< $5k");

  const budgetOptions = ["< $5k", "$5k - $10k", "$10k - $25k", "$25k+"];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    router.push("/thanks");
  };

  return (
    <div className="w-full">
      {/* Contact Header */}
      <section className="max-w-[1080px] mx-auto px-5 pt-16 pb-12">
        <MotionReveal>
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-80"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#b5d625]"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                Available for Q3 2026
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-normal tracking-[-0.04em] text-ink leading-[1.08]">
              Have an idea?<br />
              <span className="text-muted">Let&apos;s make it real.</span>
            </h1>

            <p className="mt-4 text-base text-muted leading-relaxed">
              Fill out the brief form below or copy the email to reach out directly.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <CopyEmailButton />
            </div>
          </div>
        </MotionReveal>
      </section>

      {/* Form Section */}
      <section className="max-w-[1080px] mx-auto px-5 pb-20">
        <MotionReveal>
          <div className="max-w-2xl bg-surface rounded-sm border border-line p-6 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jane Doe"
                  className="w-full h-11 px-4 rounded-pill border border-[#888] bg-canvas text-ink placeholder-muted text-sm focus:outline-none focus:border-ink transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                  className="w-full h-11 px-4 rounded-pill border border-[#888] bg-canvas text-ink placeholder-muted text-sm focus:outline-none focus:border-ink transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
                  Approximate Budget
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgetOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setBudget(opt)}
                      className={`h-10 px-3 rounded-pill text-xs font-semibold border transition-all ${
                        budget === opt
                          ? "bg-lime text-on-accent border-lime shadow-xs"
                          : "bg-canvas text-muted border-line hover:border-ink"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your product, timeline, and goals..."
                  className="w-full p-4 rounded-sm border border-[#888] bg-canvas text-ink placeholder-muted text-sm focus:outline-none focus:border-ink transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full min-h-[44px] rounded-pill bg-action text-on-action text-sm font-semibold hover:bg-black/85 transition-all flex items-center justify-center gap-2 disabled:opacity-50 active:translate-y-px"
              >
                {isSubmitting ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <span>Send inquiry</span>
                    <ArrowRight size={15} />
                  </>
                )}
              </button>
            </form>
          </div>
        </MotionReveal>
      </section>

      {/* FAQ Section */}
      <section className="max-w-[1080px] mx-auto px-5 py-16 border-t border-line">
        <MotionReveal>
          <div className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted">
              FAQs
            </span>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-ink mt-1">
              Common questions
            </h2>
          </div>

          <FaqAccordion />
        </MotionReveal>
      </section>
    </div>
  );
}
