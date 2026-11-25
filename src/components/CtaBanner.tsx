import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="w-full py-28 md:py-36 bg-canvas">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          {/* Left 1/3 Spacer Rail (matches 1/3 layout) */}
          <div className="hidden md:block md:w-1/3 flex-shrink-0" aria-hidden="true" />

          {/* Right 2/3 Content Rail (matches Image 4) */}
          <div className="w-full md:w-2/3 flex flex-col items-start gap-3">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-[-0.04em] text-ink leading-[1.08]">
              Have a project in mind?<br />
              <span className="text-muted">Let&apos;s talk.</span>
            </h2>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-muted transition-colors group"
              >
                <span>Book a call</span>
                <ArrowUpRight size={15} className="text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
