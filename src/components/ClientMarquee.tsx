import { clients } from "@/data/siteData";

export default function ClientMarquee() {
  const repeatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="w-full py-14 overflow-hidden border-t border-b border-line bg-canvas">
      <div className="max-w-[1080px] mx-auto px-5 mb-8 text-center md:text-left">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted">
          Brands I&apos;ve partnered with
        </p>
      </div>

      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee space-x-12 sm:space-x-16 items-center">
          {repeatedClients.map((client, idx) => (
            <div
              key={`${client}-${idx}`}
              className="flex items-center space-x-2 text-xl font-bold tracking-tight text-ink/40 hover:text-ink transition-colors duration-200 select-none cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-ink/20" />
              <span>{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
