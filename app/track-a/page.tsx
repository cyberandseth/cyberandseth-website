import type { Metadata } from 'next'
import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'

export const metadata: Metadata = {
  title: 'Track A — Move Up',
  description:
    'For IT and cybersecurity professionals stuck below the leadership line. The Three-Level Career Map shows you where you are and what moves you forward.',
}

const pains = [
  {
    num: '01',
    title: 'Wrong Lane',
    body: "You've never explicitly chosen Governance, Risk, or Compliance. Your resume looks scattered. You look like a generalist when you need to be known for something specific.",
  },
  {
    num: '02',
    title: 'Wrong Language',
    body: 'You write in technical language. Leadership speaks risk. Your findings are accurate — but they land like a cost center, not a strategic advisor.',
  },
  {
    num: '03',
    title: 'Wrong Visibility',
    body: 'Good work stays in tickets. You have no system for getting your analysis in front of the people who make promotion decisions.',
  },
]

const levels = [
  {
    level: 'L1',
    label: 'Technical Executor',
    title: 'Find it. Fix it. Document it.',
    desc: 'You identify problems and solve them. Your value is measured by what you can do. Leadership sees cost and complexity — not strategy.',
    salary: '$55K–$85K',
    badge: 'YOU?',
    highlight: false,
  },
  {
    level: 'L2',
    label: 'Operational Professional',
    title: 'Frame it in risk. Get invited to the room.',
    desc: 'Same technical work — but translated into business impact, likelihood, and consequence. Leadership starts asking for your input on decisions.',
    salary: '$85K–$130K',
    highlight: true,
  },
  {
    level: 'L3',
    label: 'Strategic Advisor',
    title: 'Shape the program. Brief the executive team.',
    desc: 'GRC leadership — risk officers, governance leads, advisory roles. You help organizations make decisions about risk. The salary doubles.',
    salary: '$130K–$200K+',
    highlight: false,
  },
]

const modules = [
  'Module 01 — Know your level (free assessment included)',
  'Module 02 — The Three Misalignments (your real obstacle)',
  'Module 03 — GRC Decoded (the framework in depth)',
  'Module 04 — Repositioning Framework (risk language, visibility, narrative)',
  'Module 05 — The 90-Day Action Blueprint',
]

export default function TrackAPage() {
  return (
    <>
      {/* [A] HERO */}
      <section className="relative bg-navy pt-32 pb-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(201,168,76,0.08) 0%, transparent 70%)',
          }}
        />
        <div className="relative max-w-4xl mx-auto">
          <span className="inline-block font-body font-bold text-[10px] tracking-widest2 uppercase text-gold border border-gold/40 px-3 py-1.5 mb-6">
            Track A — Move Up
          </span>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] text-white tracking-wide leading-none mb-6">
            You&apos;re doing the work.<br />You&apos;re not getting the credit.
          </h1>
          <p className="font-body font-light text-dgray text-lg md:text-xl max-w-3xl leading-relaxed mb-10">
            If you&apos;ve been in cybersecurity or IT for 2–5 years and feel invisible to leadership — the problem isn&apos;t your skills. It&apos;s how you&apos;re positioned. The Three-Level Career Map shows you exactly where you&apos;re stuck and what moves you forward.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href="https://join.cyberandseth.com/grc-resume-fix"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body font-bold text-sm tracking-widest uppercase bg-gold text-navy px-8 py-4 hover:bg-gold/90 transition-colors duration-200"
            >
              Get the Free Resume Rewrite
            </a>
            <Link
              href="/products/risk-strategist-workbook"
              className="font-body font-light text-sm text-dgray hover:text-gold transition-colors duration-200 tracking-wide self-center"
            >
              Or go straight to the workbook →
            </Link>
          </div>
        </div>
      </section>

      <div className="w-full h-[1px] bg-gold/20" />

      {/* [B] PAIN SECTION */}
      <section className="bg-[#0a1520] py-20 px-6 border-b border-white/8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide leading-tight mb-12 max-w-4xl">
            You&apos;re not stuck because you&apos;re not good enough. You&apos;re stuck because leadership can&apos;t hear you.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pains.map((p) => (
              <div
                key={p.num}
                className="bg-navy border border-white/8 p-8 flex flex-col gap-4"
              >
                <span className="font-display text-3xl text-gold tracking-wide">
                  {p.num}
                </span>
                <h3 className="font-display text-2xl text-white tracking-wide leading-tight">
                  {p.title}
                </h3>
                <p className="font-body font-light text-dgray text-sm leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [C] THREE-LEVEL CAREER MAP */}
      <section className="bg-navy py-20 px-6 border-b border-white/8">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>The Three-Level Career Map</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide leading-tight mb-4">
            Where you are — and what the path forward actually looks like
          </h2>
          <p className="font-body font-light text-dgray text-base md:text-lg max-w-3xl leading-relaxed mb-12">
            Most cybersecurity careers stall because professionals are operating at Level 1 while leadership only promotes at Level 2 and above.
          </p>

          <div className="flex flex-col gap-4">
            {levels.map((lv) => (
              <div
                key={lv.level}
                className={`
                  relative grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 items-start
                  p-8 border transition-colors
                  ${lv.highlight
                    ? 'bg-[#142438] border-l-4 border-l-gold border-y border-r border-y-gold/30 border-r-gold/30'
                    : 'bg-[#111f2e] border-white/8'
                  }
                `}
              >
                <div className="flex md:flex-col gap-4 md:gap-2 items-center md:items-start md:w-24">
                  <span className="font-display text-4xl md:text-5xl text-gold tracking-wide leading-none">
                    {lv.level}
                  </span>
                  <span className="font-body font-bold text-[10px] tracking-widest2 uppercase text-dgray">
                    {lv.label}
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-display text-2xl md:text-3xl text-white tracking-wide leading-tight">
                    {lv.title}
                  </h3>
                  <p className="font-body font-light text-dgray text-sm md:text-base leading-relaxed">
                    {lv.desc}
                  </p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2 md:w-32">
                  {lv.badge && (
                    <span className="font-body font-bold text-[10px] tracking-widest2 uppercase bg-gold text-navy px-2 py-1">
                      {lv.badge}
                    </span>
                  )}
                  <span className="font-display text-xl text-gold tracking-wide">
                    {lv.salary}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [D] PRODUCT SECTION */}
      <section className="bg-[#0a1520] py-20 px-6 border-b border-white/8">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>The primary resource for Track A</SectionLabel>

          <div className="bg-[#111f2e] border-2 border-gold/40 p-8 md:p-12">
            <h3 className="font-display text-4xl md:text-5xl text-white tracking-wide leading-tight mb-3">
              The Risk Strategist Workbook
            </h3>
            <p className="font-body font-light text-gold text-base md:text-lg tracking-wide mb-8">
              34 pages. Five modules. A 90-day action plan you can apply to your actual role.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {modules.map((m) => (
                <li key={m} className="flex items-start gap-3">
                  <span className="text-gold mt-1 shrink-0">—</span>
                  <span className="font-body font-light text-dgray text-sm md:text-base">
                    {m.replace(/^— /, '')}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="flex flex-col">
                <span className="font-display text-3xl text-gold tracking-wide leading-none">
                  $197
                </span>
                <span className="font-body font-light text-dgray text-xs mt-1">
                  one-time
                </span>
              </div>
              <a
                href="https://cyberseth.gumroad.com/l/risk-strategy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body font-bold text-sm tracking-widest uppercase bg-gold text-navy px-8 py-4 hover:bg-gold/90 transition-colors duration-200"
              >
                Get the Workbook
              </a>
            </div>
          </div>

          {/* Free magnet bar */}
          <div className="mt-8 bg-ice/5 border border-ice/30 border-l-4 border-l-ice p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
            <div className="flex-1">
              <span className="font-body font-bold text-[10px] tracking-widest2 uppercase text-ice mb-2 block">
                Free — No Pitch
              </span>
              <h4 className="font-display text-2xl md:text-3xl text-white tracking-wide leading-tight mb-2">
                The 5-Minute GRC Resume Rewrite
              </h4>
              <p className="font-body font-light text-dgray text-sm leading-relaxed">
                One before/after. One template. One next step. Delivered instantly after email opt-in.
              </p>
            </div>
            <a
              href="https://join.cyberandseth.com/grc-resume-fix"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body font-bold text-sm tracking-widest uppercase bg-ice text-navy px-6 py-3.5 hover:bg-ice/90 transition-colors duration-200 whitespace-nowrap shrink-0"
            >
              Get it free →
            </a>
          </div>
        </div>
      </section>

      {/* [E] CROSSLINK */}
      <section className="bg-navy py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <Link
            href="/track-b"
            className="font-body font-light text-base md:text-lg text-dgray hover:text-ice transition-colors duration-200 tracking-wide"
          >
            Coming from a different field? See Track B — Break In →
          </Link>
        </div>
      </section>
    </>
  )
}
