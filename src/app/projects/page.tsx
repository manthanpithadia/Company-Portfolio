import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Smartphone } from "lucide-react";
import { projects } from "@/data/projects";
import CtaBanner from "@/components/CtaBanner";
import MotionReveal from "@/components/MotionReveal";

export const metadata = {
  title: "Projects — Formo Portfolio",
  description: "Browse all mobile app design case studies, including fintech, mobility, e-commerce, and lifestyle applications.",
};

export default function ProjectsPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="max-w-[1080px] mx-auto px-5 pt-16 pb-12">
        <MotionReveal>
          <span className="text-xs font-semibold uppercase tracking-wider text-muted">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-normal tracking-[-0.04em] text-ink mt-2 mb-3 leading-[1.08]">
            All Projects
          </h1>
          <p className="text-base text-muted max-w-xl leading-relaxed">
            A collection of mobile applications, design systems, and interaction prototypes crafted for high-growth tech startups.
          </p>
        </MotionReveal>
      </section>

      {/* Projects Grid */}
      <section className="max-w-[1080px] mx-auto px-5 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <MotionReveal key={project.slug} delay={idx * 0.1}>
              <Link
                href={`/projects/${project.slug}`}
                className="group block rounded-sm bg-surface border border-line overflow-hidden hover:border-ink transition-colors"
              >
                {/* Media Graphic Frame with Next.js Image */}
                <div className="w-full bg-media p-3 sm:p-4 border-b border-line">
                  <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden bg-white shadow-xs">
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-pill bg-canvas/90 backdrop-blur-sm text-ink border border-line">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 p-1.5 rounded-full bg-canvas/90 backdrop-blur-sm border border-line group-hover:border-ink transition-colors">
                      <ArrowUpRight size={14} className="text-ink" />
                    </div>
                  </div>
                </div>

                {/* Card Meta Content */}
                <div className="p-5 bg-surface">
                  <div className="flex items-center gap-2 text-muted text-xs mb-1">
                    <Smartphone size={13} />
                    <span>{project.platform}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-ink">{project.title}</h3>
                  <p className="mt-1 text-sm text-muted leading-relaxed line-clamp-2">
                    {project.tagline}
                  </p>
                  <div className="mt-4 pt-3 border-t border-line flex items-center justify-between text-xs text-muted">
                    <span>Client: <strong className="text-ink font-medium">{project.client}</strong></span>
                    <span>Timeline: <strong className="text-ink font-medium">{project.timeline}</strong></span>
                  </div>
                </div>
              </Link>
            </MotionReveal>
          ))}
        </div>
      </section>

      {/* Global CTA */}
      <CtaBanner />
    </div>
  );
}
