import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Thank You — Formo",
  description: "Your message has been received.",
};

export default function ThanksPage() {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center px-5 py-24">
      <div className="max-w-md w-full text-center p-8 sm:p-12 bg-surface rounded-sm border border-line">
        <div className="w-12 h-12 mx-auto rounded-full bg-lime/30 text-ink flex items-center justify-center mb-6">
          <CheckCircle2 size={26} />
        </div>

        <h1 className="text-3xl font-medium text-ink tracking-tight">
          Thank you!
        </h1>

        <p className="mt-3 text-sm text-muted leading-relaxed">
          We&apos;ve received your message and will be in touch within 24 hours. In the meantime, feel free to explore our case studies.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 min-h-[44px] px-6 rounded-pill bg-action text-on-action text-sm font-semibold hover:bg-black/85 transition-all active:translate-y-px"
          >
            <span>Back to home</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
