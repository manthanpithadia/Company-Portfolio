import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — Formo",
  description: "Formo privacy practices and cookie policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-[1080px] mx-auto px-5 py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted hover:text-ink transition-colors mb-8"
      >
        <ArrowLeft size={14} /> Back to home
      </Link>

      <h1 className="text-3xl md:text-5xl font-normal tracking-[-0.04em] text-ink mb-8 leading-[1.08]">
        Privacy Policy
      </h1>

      <div className="space-y-6 text-muted leading-relaxed text-sm md:text-base max-w-3xl border-t border-line pt-8">
        <p>
          Last updated: January 1, 2026. This Privacy Policy describes how Formo Studio (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and shares personal information when you visit or interact with our website.
        </p>

        <h2 className="text-xl font-semibold text-ink pt-4">1. Information We Collect</h2>
        <p>
          When you use our contact form or book an introductory call, we may collect your name, email address, company name, estimated project budget, and any message content you provide.
        </p>

        <h2 className="text-xl font-semibold text-ink pt-4">2. How We Use Information</h2>
        <p>
          We use your information exclusively to communicate regarding project inquiries, provide design estimates, fulfill contractual obligations, and improve our website experience. We do not sell or monetize personal data.
        </p>

        <h2 className="text-xl font-semibold text-ink pt-4">3. Data Retention & Security</h2>
        <p>
          We apply industry-standard security protocols to protect your personal details against unauthorized access, loss, or disclosure. Inquiries are retained only as long as necessary for legitimate business collaboration.
        </p>

        <h2 className="text-xl font-semibold text-ink pt-4">4. Your Rights</h2>
        <p>
          Under GDPR regulations, European residents have the right to request access to, rectification of, or deletion of their personal information. To exercise your rights, contact us at <strong className="text-ink font-semibold">hi@formo.studio</strong>.
        </p>
      </div>
    </div>
  );
}
