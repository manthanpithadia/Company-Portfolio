import { philosophy, experience, awards } from "@/data/siteData";
import CtaBanner from "@/components/CtaBanner";
import CopyEmailButton from "@/components/CopyEmailButton";

export const metadata = {
  title: "About — Formo Portfolio",
  description: "Learn about Daniel Brouwer, design principles, past agency experience at Uber and Booking.com, and industry recognitions.",
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Manifesto */}
      <section className="max-w-[1080px] mx-auto px-5 pt-16 pb-16">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted">
              Daniel Brouwer
            </span>
            <span className="text-xs text-muted">•</span>
            <span className="text-xs font-medium text-muted">Founder & Lead Designer</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-ink leading-[1.12]">
            I&apos;ve spent over a decade designing digital products — at agencies, scale-ups, and now independently.
          </h1>

          <p className="mt-6 text-xl text-muted leading-relaxed">
            The best apps aren&apos;t the most complex ones. They&apos;re the ones that get out of the way.
          </p>

          <p className="mt-4 text-sm text-muted leading-relaxed">
            Before starting Formo, I spent eight years at companies like Uber, Booking.com, and Fabrique — learning how to solve complex problems under real constraints. I bring that same rigour to every project I take on today.
          </p>

          <div className="mt-8">
            <CopyEmailButton />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-[1080px] mx-auto px-5 py-16 border-t border-line">
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted">
            Philosophy
          </span>
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-ink mt-1">
            What I believe in
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {philosophy.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-sm bg-surface border border-line hover:border-ink transition-colors"
            >
              <h3 className="text-lg font-semibold text-ink mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-[1080px] mx-auto px-5 py-16 border-t border-line">
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted">
            Experience
          </span>
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-ink mt-1">
            Where I&apos;ve been
          </h2>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {experience.map((item, idx) => (
            <div
              key={idx}
              className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
            >
              <div>
                <h4 className="text-base font-semibold text-ink">
                  {item.role}
                </h4>
                <p className="text-sm text-muted">{item.company}</p>
              </div>
              <span className="text-xs font-mono font-medium text-muted">
                {item.period}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Awards Section */}
      <section className="max-w-[1080px] mx-auto px-5 py-16 border-t border-line">
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted">
            Recognition
          </span>
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-ink mt-1">
            Awards & Honors
          </h2>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
            >
              <div>
                <h4 className="text-base font-semibold text-ink">
                  {award.institution}
                </h4>
                <p className="text-sm text-muted">{award.title}</p>
              </div>
              <span className="text-xs font-mono font-medium text-muted">
                {award.year}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Global CTA */}
      <CtaBanner />
    </div>
  );
}
