import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Plus } from "lucide-react";
import { projects } from "@/data/projects";
import { services } from "@/data/siteData";
import ClientGrid from "@/components/ClientGrid";
import TestimonialSlider from "@/components/TestimonialSlider";
import CtaBanner from "@/components/CtaBanner";
import MotionReveal from "@/components/MotionReveal";

export default function HomePage() {
  const selectedProjects = projects.slice(0, 2);

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="max-w-[1120px] mx-auto px-6 pt-24 md:pt-36 pb-20">
        <MotionReveal yOffset={24}>
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
            {/* Left 1/3 Spacer Rail */}
            <div className="hidden md:block md:w-1/3 flex-shrink-0" aria-hidden="true" />

            {/* Right 2/3 Content Rail */}
            <div className="w-full md:w-2/3 flex flex-col items-start gap-4">
              <div className="flex items-center gap-1.5 text-xs text-muted font-normal">
                <Plus size={13} className="text-muted/80" />
                <span>Available for Q3 2026</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-[44px] font-normal tracking-[-0.04em] leading-[1.12]">
                <span className="text-ink">Formo is a studio focused on mobile app design</span>{" "}
                <span className="text-muted">— crafting products that feel intuitive, look sharp, and perform from day one.</span>
              </h1>

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
        </MotionReveal>
      </section>

      {/* 2. Selected Work Section */}
      <section className="max-w-[1120px] mx-auto px-6 py-20 border-t border-line">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          {/* Left Column: + Selected Work */}
          <div className="w-full md:w-1/3 flex-shrink-0 md:sticky md:top-28">
            <MotionReveal>
              <div className="flex items-center gap-1.5 text-xs text-ink font-semibold uppercase tracking-wider">
                <Plus size={13} className="text-muted/80" />
                <span>Selected Work</span>
              </div>
              <p className="mt-1 text-xs text-muted">
                The work I&apos;m proud of
              </p>
            </MotionReveal>
          </div>

          {/* Right Column: Project Stack */}
          <div className="w-full md:w-2/3 space-y-16">
            {selectedProjects.map((project, i) => (
              <MotionReveal key={project.slug} delay={i * 0.15}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block"
                >
                  <div className="flex items-center justify-between py-2 text-sm">
                    <span className="font-medium text-ink group-hover:text-muted transition-colors">
                      {project.title}
                    </span>
                    <span className="text-xs text-muted flex items-center gap-1.5">
                      <span>{project.platform}</span>
                      <span>·</span>
                      <span>{project.year}</span>
                    </span>
                  </div>

                  <div className="w-full bg-[#f0f0f0] rounded-sm overflow-hidden border border-line p-4 sm:p-8 flex items-center justify-center transition-all duration-300 group-hover:border-ink/30">
                    <div className="relative aspect-[16/10] w-full">
                      <Image
                        src={project.heroImage}
                        alt={`${project.title} Showcase`}
                        fill
                        sizes="(max-width: 1080px) 100vw, 720px"
                        className="object-contain group-hover:scale-[1.02] transition-transform duration-300"
                        priority={i === 0}
                      />
                    </div>
                  </div>
                </Link>
              </MotionReveal>
            ))}

            <MotionReveal>
              <div className="pt-2">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm bg-surface hover:bg-[#eaeaea] border border-transparent hover:border-ink/20 text-ink text-sm font-medium transition-all active:translate-y-px group"
                >
                  <span>See all projects</span>
                  <ArrowUpRight size={15} className="text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 3. About Me Section */}
      <section className="max-w-[1120px] mx-auto px-6 py-20 border-t border-line">
        <MotionReveal>
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
            <div className="w-full md:w-1/3 flex-shrink-0">
              <div className="flex items-center gap-1.5 text-xs text-ink font-semibold uppercase tracking-wider">
                <Plus size={13} className="text-muted/80" />
                <span>About me</span>
              </div>
              <p className="mt-1 text-xs text-muted">
                The person behind the work
              </p>
            </div>

            <div className="w-full md:w-2/3 space-y-4">
              <p className="text-xl font-normal text-ink leading-relaxed">
                I&apos;m a mobile app designer in Amsterdam. I help startups and scaleups turn complex ideas into products people actually want to use.
              </p>
              <p className="text-sm text-muted leading-relaxed">
                Since 2021, I&apos;ve designed apps across fintech, e-commerce, and mobility — working with teams at Uber, Booking.com, and Swapfiets to ship products that scale.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-muted transition-colors group"
                >
                  <span>More about me</span>
                  <ArrowUpRight size={15} className="text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </MotionReveal>
      </section>

      {/* 4. Services Section (Matches Image 1: Row List with Hairline Dividers) */}
      <section className="max-w-[1120px] mx-auto px-6 py-20 border-t border-line">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          {/* Left Column */}
          <div className="w-full md:w-1/3 flex-shrink-0 md:sticky md:top-28">
            <MotionReveal>
              <div className="flex items-center gap-1.5 text-xs text-ink font-semibold uppercase tracking-wider">
                <Plus size={13} className="text-muted/80" />
                <span>Services</span>
              </div>
              <p className="mt-1 text-xs text-muted">
                How I can help
              </p>
            </MotionReveal>
          </div>

          {/* Right Column: Stack of Services with 01, 02... */}
          <div className="w-full md:w-2/3">
            <div className="divide-y divide-line">
              {services.map((service, idx) => (
                <MotionReveal key={service.number} delay={idx * 0.05}>
                  <div className="py-6 sm:py-7 flex flex-col gap-1.5 group">
                    <div className="flex items-baseline gap-4 text-sm sm:text-base">
                      <span className="font-mono text-xs text-muted w-5 flex-shrink-0">{service.number}</span>
                      <h3 className="font-medium text-ink group-hover:text-muted transition-colors">{service.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-muted pl-9 leading-relaxed max-w-xl">
                      {service.description}
                    </p>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Clients Section (Matches Image 2: Static 4x2 Clean Grid) */}
      <section className="max-w-[1120px] mx-auto px-6 py-20 border-t border-line">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          {/* Left Column */}
          <div className="w-full md:w-1/3 flex-shrink-0 md:sticky md:top-28">
            <MotionReveal>
              <div className="flex items-center gap-1.5 text-xs text-ink font-semibold uppercase tracking-wider">
                <Plus size={13} className="text-muted/80" />
                <span>Clients</span>
              </div>
              <p className="mt-1 text-xs text-muted">
                Brands I&apos;ve partnered with
              </p>
            </MotionReveal>
          </div>

          {/* Right Column: 4x2 Client Brand Grid */}
          <div className="w-full md:w-2/3">
            <MotionReveal>
              <ClientGrid />
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section (Matches Image 3: 2-Column Side-by-Side Review Slider) */}
      <section className="max-w-[1120px] mx-auto px-6 py-20 border-t border-line">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          {/* Left Column */}
          <div className="w-full md:w-1/3 flex-shrink-0 md:sticky md:top-28">
            <MotionReveal>
              <div className="flex items-center gap-1.5 text-xs text-ink font-semibold uppercase tracking-wider">
                <Plus size={13} className="text-muted/80" />
                <span>Testimonials</span>
              </div>
              <p className="mt-1 text-xs text-muted">
                What clients say
              </p>
            </MotionReveal>
          </div>

          {/* Right Column: Dual Testimonial Display with Arrows */}
          <div className="w-full md:w-2/3">
            <MotionReveal>
              <TestimonialSlider />
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA Banner (Matches Image 4: Open Canvas Display) */}
      <MotionReveal>
        <CtaBanner />
      </MotionReveal>
    </div>
  );
}
