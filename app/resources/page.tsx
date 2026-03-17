import type { Metadata } from 'next'
import SectionLabel from '@/components/SectionLabel'
import KitForm from '@/components/KitForm'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Resources',
  description:
    'Start here. Everything free. The GRC Career Map, the YouTube channel, and the frameworks that matter.',
}

export default function ResourcesPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative bg-navy pt-32 pb-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(201,168,76,0.06) 0%, transparent 70%)',
          }}
        />
        <div className="relative max-w-4xl mx-auto">
          <SectionLabel>Free Resources</SectionLabel>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] text-white tracking-wide leading-none mb-4">
            Start here.<br />Everything free.
          </h1>
          <p className="font-body font-light text-dgray text-lg max-w-2xl leading-relaxed">
            The Career Map is the starting point. Everything else builds from it.
          </p>
        </div>
      </section>

      {/* Gold rule */}
      <div className="w-full h-[1px] bg-gold/20" />

      {/* Featured resource — GRC Career Map */}
      <section className="bg-[#0a1520] py-20 px-6 border-b border-white/8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Cover placeholder */}
            <div className="aspect-[4/3] bg-navy border border-gold/20 flex items-center justify-center relative overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)',
                }}
              />
              <div className="text-center px-8">
                <div className="w-8 h-[2px] bg-gold mx-auto mb-6" />
                <p className="font-display text-3xl text-white tracking-widest leading-tight">
                  GRC CAREER<br />MAP
                </p>
                <p className="font-body font-light text-gold text-sm mt-4 tracking-wide">
                  Free
                </p>
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-6">
              <div>
                <span className="font-body font-bold text-[10px] tracking-widest2 uppercase text-[#6dd4c0] border border-teal/40 px-2.5 py-1 mb-4 inline-block">
                  Both Tracks
                </span>
                <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide mt-4 leading-tight">
                  GRC Career Map
                </h2>
              </div>
              <p className="font-body font-light text-dgray text-base leading-relaxed">
                Three GRC lanes mapped side by side — Governance, Risk, and Compliance — with salary ranges, first certifications, and first roles per lane.
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  'Three lane breakdowns: Governance, Risk, Compliance',
                  'Salary ranges per lane and seniority level',
                  'First certification per lane',
                  'First roles to target by background',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-gold mt-1 shrink-0">—</span>
                    <span className="font-body font-light text-dgray text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://cyber-seth.kit.com/7699fa61fd"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body font-bold text-sm tracking-widest uppercase border border-ice text-ice px-8 py-3.5 hover:bg-ice hover:text-navy transition-all duration-200 w-fit mt-2"
              >
                Get It Free
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube resource */}
      <section className="bg-navy py-20 px-6 border-b border-white/8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex flex-col gap-3">
            <SectionLabel>YouTube</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl text-white tracking-wide">
              Weekly GRC career content.
            </h2>
            <p className="font-body font-light text-dgray text-sm leading-relaxed max-w-md">
              Strategy, positioning, and career frameworks — delivered in plain language. Subscribe and turn on notifications.
            </p>
          </div>
          <a
            href="https://youtube.com/@CyberandSeth"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body font-bold text-sm tracking-widest uppercase bg-gold text-navy px-8 py-4 hover:bg-gold/90 transition-colors duration-200 whitespace-nowrap shrink-0"
          >
            Watch on YouTube ↗
          </a>
        </div>
      </section>

      {/* Inline Kit opt-in */}
      <KitForm
        headline="Get the GRC Career Map."
        subtext="Three lanes. Salary ranges. First certifications. First moves. Free."
        buttonText="Send Me the Map"
        dark
      />

      {/* Track explainer below form */}
      <section className="bg-[#0a1520] py-16 px-6 border-t border-white/8">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Which track is yours?</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div className="border-l-2 border-gold pl-6 flex flex-col gap-2">
              <span className="font-body font-bold text-[10px] tracking-widest2 uppercase text-gold">
                Track A — Move Up
              </span>
              <p className="font-body font-light text-dgray text-sm leading-relaxed">
                Already in IT or security and ready to transition into a GRC leadership role. The path is strategic, not technical.
              </p>
            </div>
            <div className="border-l-2 border-ice pl-6 flex flex-col gap-2">
              <span className="font-body font-bold text-[10px] tracking-widest2 uppercase text-ice">
                Track B — Break In
              </span>
              <p className="font-body font-light text-dgray text-sm leading-relaxed">
                Coming from finance, healthcare, military, legal, or project management. Your background translates — it just needs to be positioned correctly.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <Link
              href="/products"
              className="font-body font-bold text-xs tracking-widest uppercase text-gold hover:text-gold/80 transition-colors duration-200"
            >
              View all products →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
