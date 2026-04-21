import type { Metadata } from 'next'
import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'

export const metadata: Metadata = {
  title: 'Track B — Break In',
  description:
    'For career changers from finance, healthcare, military, legal, or PM entering GRC. Your background isn\'t a liability — it\'s the edge.',
}

const reframeCards = [
  {
    from: 'Finance / Accounting',
    to: 'GRC Risk Analyst',
    body: 'Risk quantification, expected value modeling, and business impact analysis are the core skills of the Risk lane. You already do this work.',
  },
  {
    from: 'Healthcare Compliance',
    to: 'GRC Compliance Analyst',
    body: 'HIPAA program management, external audit coordination, and regulatory reporting are the exact skills the Compliance lane is built on.',
  },
  {
    from: 'Military / Operations',
    to: 'GRC Governance / Risk',
    body: 'Mission planning, operational risk assessment, and contingency frameworks are GRC program leadership thinking. The vocabulary is different. The discipline is identical.',
  },
  {
    from: 'Legal / Project Management',
    to: 'GRC Governance / Compliance',
    body: 'Policy interpretation, stakeholder management, compliance timelines — GRC programs run exactly like regulated legal or project environments.',
  },
]

const lanes = [
  {
    letter: 'G',
    label: 'Governance',
    desc: 'Build the structure — policies, frameworks, controls, audit programs.',
    tags: ['Legal', 'Military', 'Compliance', 'Audit'],
    salary: '$65K–$160K+',
  },
  {
    letter: 'R',
    label: 'Risk',
    desc: 'Analyze the exposure — risk assessments, registers, recommendations to leadership.',
    tags: ['Finance', 'Banking', 'Insurance', 'Quantitative'],
    salary: '$70K–$180K+',
  },
  {
    letter: 'C',
    label: 'Compliance',
    desc: 'Prove the obligations — regulatory programs, audit prep, evidence libraries. Often the most accessible first door for career changers.',
    tags: ['Healthcare', 'Project Management', 'Legal', 'HR'],
    salary: '$60K–$150K+',
  },
]

const narratives = [
  {
    from: 'Finance',
    body: "I've spent 8 years in financial risk analysis — modeling credit and operational risk exposure. I've been transitioning toward information security risk because the frameworks I use every day map directly to how mature cybersecurity risk programs are run. What I bring that's unusual is a quantitative risk background most cyber candidates don't have.",
  },
  {
    from: 'Healthcare',
    body: "I've spent 6 years managing regulatory compliance programs — HIPAA, CMS, Joint Commission. I'm moving into GRC because security programs run the same regulatory accountability model I've been working within. What I bring that most candidates don't is years of experience working directly with external auditors and regulators.",
  },
  {
    from: 'Military',
    body: "Mission planning is risk management with operational consequences. I've been doing GRC-level thinking without the title for years. I'm formalizing that transition into an information security risk role because the analytical framework is the same — the domain is different.",
  },
]

const features = [
  'The Repositioning Framework — risk language, visibility, career narrative',
  'Background-specific translation maps (Finance, Healthcare, Military, Legal, PM)',
  'The first cert, first role, and first 90 days for your lane',
  'How to answer "do you have a security background?" and own the conversation',
]

export default function TrackBPage() {
  return (
    <>
      {/* [A] HERO */}
      <section className="relative bg-navy pt-32 pb-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(74,155,196,0.08) 0%, transparent 70%)',
          }}
        />
        <div className="relative max-w-4xl mx-auto">
          <span className="inline-block font-body font-bold text-[10px] tracking-widest2 uppercase text-ice border border-ice/40 bg-ice/5 px-3 py-1.5 mb-6">
            Track B — Break In
          </span>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] text-white tracking-wide leading-none mb-6">
            Your background isn&apos;t a liability.<br />It&apos;s the edge.
          </h1>
          <p className="font-body font-light text-dgray text-lg md:text-xl max-w-3xl leading-relaxed mb-10">
            If you&apos;re coming from finance, healthcare, military, legal, or project management — and want to move into cybersecurity GRC — you&apos;re not starting behind. You&apos;re approaching from a different angle. And that angle is exactly what GRC organizations are hiring for.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href="https://cyber-seth.kit.com/newsletter"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body font-bold text-sm tracking-widest uppercase bg-ice text-navy px-8 py-4 hover:bg-ice/90 transition-colors duration-200"
            >
              Get the Free Career Map
            </a>
            <a
              href="https://cyberseth.gumroad.com/l/background-edge"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body font-light text-sm text-dgray hover:text-ice transition-colors duration-200 tracking-wide self-center"
            >
              Or go straight to the guide →
            </a>
          </div>
        </div>
      </section>

      <div className="w-full h-[1px] bg-ice/20" />

      {/* [B] REFRAME SECTION */}
      <section className="bg-[#0a1520] py-20 px-6 border-b border-white/8">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Flip the assumption</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide leading-tight mb-4">
            The people who &ldquo;start from zero&rdquo; in GRC are the ones without your background.
          </h2>
          <p className="font-body font-light text-dgray text-base md:text-lg max-w-3xl leading-relaxed mb-12">
            Technical cybersecurity professionals spend years learning what you already know intuitively — business impact, regulatory accountability, organizational decision-making. You have the foundation. You need the translation layer.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reframeCards.map((c) => (
              <div
                key={c.from}
                className="bg-navy border border-white/8 p-8 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="font-display text-xl text-white tracking-wide">
                    {c.from}
                  </span>
                  <span className="text-ice">→</span>
                  <span className="font-display text-xl text-ice tracking-wide">
                    {c.to}
                  </span>
                </div>
                <p className="font-body font-light text-dgray text-sm leading-relaxed">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [C] LANES SECTION */}
      <section className="bg-navy py-20 px-6 border-b border-white/8">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Find your first door</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide leading-tight mb-4">
            Three GRC lanes. You already fit one.
          </h2>
          <p className="font-body font-light text-dgray text-base md:text-lg max-w-3xl leading-relaxed mb-12">
            GRC is not one job. Governance, Risk, and Compliance are distinct career paths with different day-to-day work and different backgrounds that thrive in each.
          </p>

          <div className="flex flex-col gap-4">
            {lanes.map((l) => (
              <div
                key={l.letter}
                className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 items-start bg-[#111f2e] border border-white/8 p-8"
              >
                <div className="flex md:flex-col gap-4 md:gap-2 items-center md:items-start md:w-24">
                  <span className="font-display text-5xl md:text-6xl text-ice tracking-wide leading-none">
                    {l.letter}
                  </span>
                  <span className="font-body font-bold text-[10px] tracking-widest2 uppercase text-dgray">
                    {l.label}
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="font-body font-light text-dgray text-sm md:text-base leading-relaxed">
                    {l.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {l.tags.map((t) => (
                      <span
                        key={t}
                        className="font-body font-light text-[11px] tracking-wide text-ice border border-ice/30 bg-ice/5 px-2 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex md:justify-end">
                  <span className="font-display text-xl text-ice tracking-wide whitespace-nowrap">
                    {l.salary}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [D] CAREER NARRATIVE */}
      <section className="bg-[#0a1520] py-20 px-6 border-b border-white/8">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>What repositioning sounds like</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide leading-tight mb-4">
            You don&apos;t need a GRC title to tell a GRC story.
          </h2>
          <p className="font-body font-light text-dgray text-base md:text-lg max-w-3xl leading-relaxed mb-12">
            The career narrative connects where you&apos;ve been to where you&apos;re going — explicitly. These are the sentences that open doors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {narratives.map((n) => (
              <div
                key={n.from}
                className="bg-ice/5 border-l-4 border-ice border-y border-r border-y-ice/20 border-r-ice/20 p-8 flex flex-col gap-4"
              >
                <span className="font-body font-bold text-[10px] tracking-widest2 uppercase text-ice">
                  {n.from}
                </span>
                <p className="font-body font-light text-white/85 text-sm leading-relaxed italic">
                  &ldquo;{n.body}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [E] PRODUCT SECTION */}
      <section className="bg-navy py-20 px-6 border-b border-white/8">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>The primary resource for Track B</SectionLabel>

          <div className="bg-[#111f2e] border-2 border-ice/40 p-8 md:p-12">
            <h3 className="font-display text-4xl md:text-5xl text-white tracking-wide leading-tight mb-3">
              Your Background Is the Edge
            </h3>
            <p className="font-body font-light text-ice text-base md:text-lg tracking-wide mb-8">
              A career positioning guide for professionals breaking into GRC from adjacent fields.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="text-ice mt-1 shrink-0">—</span>
                  <span className="font-body font-light text-dgray text-sm md:text-base">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="flex flex-col">
                <span className="font-display text-3xl text-ice tracking-wide leading-none">
                  $37
                </span>
                <span className="font-body font-light text-dgray text-xs mt-1">
                  one-time
                </span>
              </div>
              <a
                href="https://cyberseth.gumroad.com/l/background-edge"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body font-bold text-sm tracking-widest uppercase bg-ice text-navy px-8 py-4 hover:bg-ice/90 transition-colors duration-200"
              >
                Get the Guide
              </a>
            </div>
          </div>

          {/* Free magnet bar */}
          <div className="mt-8 bg-gold/5 border border-gold/30 border-l-4 border-l-gold p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
            <div className="flex-1">
              <span className="font-body font-bold text-[10px] tracking-widest2 uppercase text-gold mb-2 block">
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
              href="https://cyber-seth.kit.com/newsletter"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body font-bold text-sm tracking-widest uppercase bg-gold text-navy px-6 py-3.5 hover:bg-gold/90 transition-colors duration-200 whitespace-nowrap shrink-0"
            >
              Get it free →
            </a>
          </div>
        </div>
      </section>

      {/* [F] CROSSLINK */}
      <section className="bg-navy py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <Link
            href="/track-a"
            className="font-body font-light text-base md:text-lg text-dgray hover:text-gold transition-colors duration-200 tracking-wide"
          >
            Already in cybersecurity or IT? See Track A — Move Up →
          </Link>
        </div>
      </section>
    </>
  )
}
