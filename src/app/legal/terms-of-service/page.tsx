import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service — Formo",
  description: "Formo terms and conditions for client engagements.",
};

export default function TermsOfServicePage() {
  return (
    <div className="max-w-[1080px] mx-auto px-5 py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted hover:text-ink transition-colors mb-8"
      >
        <ArrowLeft size={14} /> Back to home
      </Link>

      <h1 className="text-3xl md:text-5xl font-normal tracking-[-0.04em] text-ink mb-8 leading-[1.08]">
        Terms of Service
      </h1>

      <div className="space-y-6 text-muted leading-relaxed text-sm md:text-base max-w-3xl border-t border-line pt-8">
        <p>
          Last updated: January 1, 2026. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions.
        </p>

        <h2 className="text-xl font-semibold text-ink pt-4">1. Intellectual Property</h2>
        <p>
          All designs, trademarks, visual assets, prototypes, and case study documentation displayed on this website are the intellectual property of Formo Studio and their respective client copyright holders. Unauthorized reproduction is strictly prohibited.
        </p>

        <h2 className="text-xl font-semibold text-ink pt-4">2. Client Engagements & Scope</h2>
        <p>
          Project deliverables, milestones, fee structures, and IP transfer terms are governed by custom Master Services Agreements (MSA) executed prior to project kickoff.
        </p>

        <h2 className="text-xl font-semibold text-ink pt-4">3. Limitation of Liability</h2>
        <p>
          Formo Studio makes no warranties regarding uninterrupted availability of this website and shall not be held liable for incidental or consequential damages arising from website usage.
        </p>
      </div>
    </div>
  );
}
