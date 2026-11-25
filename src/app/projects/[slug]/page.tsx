import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/projects";
import CtaBanner from "@/components/CtaBanner";
import StrideShoppingDemo from "@/components/StrideShoppingDemo";
import MotionReveal from "@/components/MotionReveal";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Formo Case Study`,
    description: project.tagline,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="w-full">
      {/* Top Breadcrumb Navigation */}
      <div className="max-w-[1080px] mx-auto px-5 pt-10">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted hover:text-ink transition-colors"
        >
          <ArrowLeft size={14} /> Back to all projects
        </Link>
      </div>

      {/* Hero Section: Header + Metadata Rail */}
      <section className="max-w-[1080px] mx-auto px-5 pt-8 pb-12 border-b border-line">
        <MotionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Title & Tagline */}
            <div className="lg:col-span-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                {project.category}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-[-0.04em] text-ink mt-2 leading-[1.05]">
                {project.title}
              </h1>
              <p className="mt-4 text-xl sm:text-2xl text-muted leading-relaxed max-w-2xl">
                {project.tagline}
              </p>
            </div>

            {/* Stride Metadata Rail: Hairline rows with muted label & right-aligned value */}
            <div className="lg:col-span-4 bg-surface rounded-sm p-6 border border-line">
              <h3 className="text-xs font-bold uppercase tracking-wider text-ink mb-2">Project Details</h3>
              <dl className="divide-y divide-line text-sm">
                <div className="flex justify-between items-baseline py-3">
                  <dt className="text-muted">Client</dt>
                  <dd className="text-right font-medium text-ink">{project.client}</dd>
                </div>
                <div className="flex justify-between items-baseline py-3">
                  <dt className="text-muted">Year</dt>
                  <dd className="text-right font-medium text-ink">{project.year}</dd>
                </div>
                <div className="flex justify-between items-baseline py-3">
                  <dt className="text-muted">Platform</dt>
                  <dd className="text-right font-medium text-ink">{project.platform}</dd>
                </div>
                <div className="flex justify-between items-baseline py-3">
                  <dt className="text-muted">Timeline</dt>
                  <dd className="text-right font-medium text-ink">{project.timeline}</dd>
                </div>
              </dl>
            </div>
          </div>
        </MotionReveal>
      </section>

      {/* Hero Mockup Image (Framed on --media backdrop with 8px radius) */}
      <section className="max-w-[1080px] mx-auto px-5 py-12">
        <MotionReveal>
          <div className="w-full rounded-sm bg-media border border-line overflow-hidden p-2 sm:p-4">
            <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden bg-white shadow-xs">
              <Image
                src={project.heroImage}
                alt={`${project.title} Hero Showcase`}
                fill
                priority
                sizes="(max-width: 1080px) 100vw, 1080px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </MotionReveal>
      </section>

      {/* In-Depth Case Study Narrative */}
      <section className="max-w-[1080px] mx-auto px-5 py-16 space-y-16">
        <MotionReveal>
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted">Overview</span>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-ink mt-1 mb-4">
              Product Strategy & Context
            </h2>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              {project.overview}
            </p>
          </div>
        </MotionReveal>

        {/* Quantitative Metrics */}
        <MotionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 sm:p-8 rounded-sm bg-surface border border-line">
            {project.stats.map((stat, i) => (
              <div key={i} className="text-left">
                <span className="block text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
                  {stat.value}
                </span>
                <span className="block text-xs font-medium text-muted mt-1 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </MotionReveal>

        {/* Gallery Image 2 */}
        {project.galleryImages[0] && (
          <MotionReveal>
            <div className="w-full rounded-sm bg-media border border-line overflow-hidden p-2 sm:p-4">
              <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden bg-white shadow-xs">
                <Image
                  src={project.galleryImages[0]}
                  alt={`${project.title} Visual Detail`}
                  fill
                  sizes="(max-width: 1080px) 100vw, 1080px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </MotionReveal>
        )}

        {/* Challenge & Solution Panels */}
        <MotionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 sm:p-8 rounded-sm bg-surface border border-line">
              <h3 className="text-base font-semibold text-ink mb-2">The Challenge</h3>
              <p className="text-sm text-muted leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div className="p-6 sm:p-8 rounded-sm bg-surface border border-line">
              <h3 className="text-base font-semibold text-ink mb-2">The Solution</h3>
              <p className="text-sm text-muted leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </MotionReveal>

        {/* Gallery Image 3 */}
        {project.galleryImages[1] && (
          <MotionReveal>
            <div className="w-full rounded-sm bg-media border border-line overflow-hidden p-2 sm:p-4">
              <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden bg-white shadow-xs">
                <Image
                  src={project.galleryImages[1]}
                  alt={`${project.title} Architectural Screens`}
                  fill
                  sizes="(max-width: 1080px) 100vw, 1080px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </MotionReveal>
        )}

        {/* Hand-offs & Deliverables */}
        <MotionReveal>
          <div>
            <h3 className="text-base font-semibold text-ink mb-4">Core Deliverables</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.deliverables.map((item, i) => (
                <li key={i} className="flex items-center gap-3 p-4 rounded-sm bg-surface border border-line text-sm font-medium text-ink">
                  <CheckCircle2 size={16} className="text-ink flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </MotionReveal>
      </section>

      {/* Next Case Study Navigation ("Next: Velō ›") */}
      <section className="max-w-[1080px] mx-auto px-5 py-12 border-t border-line">
        <MotionReveal>
          <div className="flex items-center justify-between">
            <div>
              {project.prevSlug ? (
                <Link
                  href={`/projects/${project.prevSlug}`}
                  className="group inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink transition-colors"
                >
                  <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                  <div>
                    <span className="block text-xs text-muted">Previous</span>
                    <span className="font-semibold text-ink">{project.prevTitle}</span>
                  </div>
                </Link>
              ) : <div />}
            </div>

            <div>
              <Link
                href={`/projects/${project.nextSlug}`}
                className="group inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink transition-colors text-right"
              >
                <div>
                  <span className="block text-xs text-muted">Next</span>
                  <span className="font-semibold text-ink text-base">{project.nextTitle} ›</span>
                </div>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </MotionReveal>
      </section>

      {/* Global Bottom CTA Banner */}
      <CtaBanner />
    </div>
  );
}
