import type { Metadata } from 'next'
import SectionLabel from '@/components/SectionLabel'

export const metadata: Metadata = {
  title: 'The 5-Day GRC Challenge',
  description:
    'A live, instructor-led 5-day cohort. A clear repositioning strategy, a rewritten career narrative, and a 90-day action plan. Every Monday. 15 seats.',
}

const yesList = [
  "You've been in cybersecurity or IT for 2–5 years and can't break through to GRC leadership",
  "You're transitioning from finance, healthcare, military, legal, or PM and need a structured entry plan",
  "You've read the frameworks. You need someone to help you apply them to your actual situation.",
  'You want direct feedback on your resume, narrative, and 90-day plan',
]

const noList = [
  "You're looking for a self-paced course you can ignore for weeks",
  'You want certification prep (this is strategy, not exam study)',
  "You're not ready to do the exercises during the week",
]

const days = [
  {
    day: 'Day 1',
    title: 'The 3-Lane Diagnostic',
    body: 'Identify which GRC lane — Governance, Risk, or Compliance — matches your background, your strengths, and your fastest path to your target role. Leave with your lane locked.',
  },
  {
    day: 'Day 2',
    title: 'The Risk Language Shift',
    body: 'Reframe your existing work in risk language. Rewrite your top three professional accomplishments so they land in a GRC conversation. Leave with three repositioned bullets.',
  },
  {
    day: 'Day 3',
    title: 'The Visibility Map',
    body: 'Build a system for getting your work in front of decision-makers in your current role — or a plan for creating visible GRC work before you have the title. Leave with a 30-day visibility plan.',
  },
  {
    day: 'Day 4',
    title: 'The Career Narrative',
    body: 'Craft the two-sentence positioning statement that answers "tell me about yourself" in a GRC interview. Practice it live. Leave with a narrative you\'ll actually use.',
  },
  {
    day: 'Day 5',
    title: 'The 90-Day Action Plan',
    body: 'Build a concrete, week-by-week plan for the 90 days after the Challenge. Target role, cert sequence, outreach strategy, and milestones. Leave with a document you\'ll execute.',
  },
]

const included = [
  {
    title: 'Live Cohort Access',
    body: '5 live Zoom sessions, Monday–Friday. Replays included for 30 days if you miss a session.',
  },
  {
    title: 'The Risk Strategist Workbook ($197 value)',
    body: 'All five modules included as your reference material and workbook throughout the Challenge.',
  },
  {
    title: 'GRC Resume & LinkedIn Rewrite Kit ($57 value)',
    body: 'Templates, before/after examples, and a fill-in framework for rewriting your resume and LinkedIn headline for GRC roles.',
  },
  {
    title: 'GRC Interview Prep Kit ($57 value)',
    body: 'The 15 most common GRC interview questions, with frameworks for answering each one based on your background.',
  },
  {
    title: 'Direct Feedback',
    body: 'Submit your resume, narrative, and 90-day plan for written feedback from Seth during the Challenge week.',
  },
  {
    title: '100% Satisfaction Guarantee',
    body: "Complete all 5 days. If you don't feel repositioned and equipped, full refund. No questions.",
  },
]

const faqs = [
  {
    q: 'When does the next cohort start?',
    a: "Every Monday at 12pm ET. When you register, you'll receive a confirmation with the next available cohort date and the Zoom link.",
  },
  {
    q: 'What if I miss a session?',
    a: 'All sessions are recorded. Replays are available for 30 days after the Challenge ends. You can submit your work async and still receive written feedback.',
  },
  {
    q: 'Is this for beginners or experienced professionals?',
    a: 'Both. Track A participants (already in IT/security) and Track B participants (career changers) go through the same 5 days. The exercises adapt to your background — the framework is the same regardless of where you\'re starting.',
  },
  {
    q: 'What do I need to bring?',
    a: "Your current resume, a clear sense of where you want to go (even if it's still fuzzy), and the willingness to do the exercises during the week. No technical setup required.",
  },
  {
    q: 'What is the refund policy?',
    a: "Full refund if you complete all 5 days and don't feel repositioned. Partial or pre-completion refunds are not available — the guarantee is contingent on doing the work.",
  },
]

export default function ChallengePage() {
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
            The 5-Day GRC Challenge
          </span>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] text-white tracking-wide leading-none mb-6">
            Five days. One cohort.<br />A concrete plan for your GRC career.
          </h1>
          <p className="font-body font-light text-dgray text-lg md:text-xl max-w-3xl leading-relaxed mb-6">
            A live, instructor-led program that takes you from wherever you are — stuck in IT, transitioning from another field, or stalled below the leadership line — to a clear repositioning strategy, a rewritten career narrative, and a 90-day action plan. Every Monday. Limited to 15 seats.
          </p>
          <p className="font-body font-bold text-gold text-base md:text-lg tracking-wide mb-10">
            Next cohort starts Monday. 15 seats. Once it&apos;s full, it&apos;s full.
          </p>
          <div className="flex flex-col items-start gap-3">
            <a
              href="https://cyberseth.gumroad.com/l/challenge"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body font-bold text-sm tracking-widest uppercase bg-gold text-navy px-8 py-4 hover:bg-gold/90 transition-colors duration-200"
            >
              Reserve Your Seat — $497
            </a>
            <a
              href="https://cyberseth.gumroad.com/l/challenge-2pay"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body font-light text-sm text-dgray hover:text-gold transition-colors duration-200 tracking-wide"
            >
              Or pay in two installments of $297 →
            </a>
          </div>
        </div>
      </section>

      <div className="w-full h-[1px] bg-gold/20" />

      {/* [B] WHO IT'S FOR */}
      <section className="bg-[#0a1520] py-20 px-6 border-b border-white/8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide leading-tight mb-12">
            This is for you if...
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* YES */}
            <div className="border-l-2 border-gold pl-8 flex flex-col gap-4">
              <span className="font-body font-bold text-[10px] tracking-widest2 uppercase text-gold">
                Yes — join the cohort
              </span>
              <ul className="flex flex-col gap-4">
                {yesList.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-gold font-bold mt-0.5 shrink-0">✓</span>
                    <span className="font-body font-light text-dgray text-sm md:text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {/* NO */}
            <div className="border-l-2 border-white/20 pl-8 flex flex-col gap-4">
              <span className="font-body font-bold text-[10px] tracking-widest2 uppercase text-dgray">
                Not for you if
              </span>
              <ul className="flex flex-col gap-4">
                {noList.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-dgray font-bold mt-0.5 shrink-0">✗</span>
                    <span className="font-body font-light text-dgray text-sm md:text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* [C] 5-DAY BREAKDOWN */}
      <section className="bg-navy py-20 px-6 border-b border-white/8">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>The 5-day curriculum</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide leading-tight mb-12">
            One session per day. 60–90 minutes. Live on Zoom.
          </h2>
          <div className="flex flex-col gap-4">
            {days.map((d) => (
              <div
                key={d.day}
                className="bg-[#111f2e] border border-white/8 p-8 grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-8"
              >
                <span className="font-display text-2xl text-gold tracking-wide leading-none">
                  {d.day}
                </span>
                <div className="flex flex-col gap-3">
                  <h3 className="font-display text-2xl md:text-3xl text-white tracking-wide leading-tight">
                    {d.title}
                  </h3>
                  <p className="font-body font-light text-dgray text-sm md:text-base leading-relaxed">
                    {d.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [D] WHAT'S INCLUDED */}
      <section className="bg-[#0a1520] py-20 px-6 border-b border-white/8">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Everything in the Challenge</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide leading-tight mb-12">
            The full stack.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {included.map((i) => (
              <div
                key={i.title}
                className="bg-navy border border-white/8 p-8 flex flex-col gap-3"
              >
                <h3 className="font-display text-xl md:text-2xl text-white tracking-wide leading-tight">
                  {i.title}
                </h3>
                <p className="font-body font-light text-dgray text-sm leading-relaxed">
                  {i.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [E] PRICING */}
      <section className="bg-navy py-20 px-6 border-b border-white/8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide leading-tight mb-12">
            One price. Everything included.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pay in full */}
            <div className="bg-[#111f2e] border-2 border-gold p-8 flex flex-col items-center gap-5 text-center">
              <span className="font-body font-bold text-[10px] tracking-widest2 uppercase text-gold">
                Pay in full
              </span>
              <div>
                <span className="font-display text-6xl text-white tracking-wide leading-none">
                  $497
                </span>
              </div>
              <p className="font-body font-light text-dgray text-sm">
                One payment. Best value.
              </p>
              <a
                href="https://cyberseth.gumroad.com/l/challenge"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body font-bold text-sm tracking-widest uppercase bg-gold text-navy px-8 py-4 hover:bg-gold/90 transition-colors duration-200 w-full"
              >
                Reserve Your Seat
              </a>
            </div>

            {/* Payment plan */}
            <div className="bg-[#111f2e] border border-white/20 p-8 flex flex-col items-center gap-5 text-center">
              <span className="font-body font-bold text-[10px] tracking-widest2 uppercase text-dgray">
                Payment plan
              </span>
              <div>
                <span className="font-display text-6xl text-white tracking-wide leading-none">
                  $297 × 2
                </span>
              </div>
              <p className="font-body font-light text-dgray text-sm">
                Two payments, 30 days apart.
              </p>
              <a
                href="https://cyberseth.gumroad.com/l/challenge-2pay"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body font-bold text-sm tracking-widest uppercase border border-white/30 text-white px-8 py-4 hover:bg-white/5 transition-colors duration-200 w-full"
              >
                Start the Payment Plan
              </a>
            </div>
          </div>
          <p className="mt-8 font-body font-light text-dgray text-sm md:text-base italic max-w-2xl mx-auto">
            100% refund if you complete all 5 days and don&apos;t feel repositioned. No questions asked.
          </p>
        </div>
      </section>

      {/* [F] FAQ */}
      <section className="bg-[#0a1520] py-20 px-6 border-b border-white/8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide leading-tight mb-12">
            Questions
          </h2>
          <div className="flex flex-col gap-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group bg-navy border border-white/8 open:border-gold/40 transition-colors"
              >
                <summary className="flex items-center justify-between gap-6 px-6 py-5 cursor-pointer list-none">
                  <span className="font-display text-lg md:text-xl text-white tracking-wide leading-tight">
                    {f.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-gold text-2xl leading-none transition-transform duration-200 group-open:rotate-45 shrink-0"
                  >
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="font-body font-light text-dgray text-sm md:text-base leading-relaxed">
                    {f.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* [G] FINAL CTA */}
      <section className="bg-navy py-24 px-6">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="font-display text-4xl md:text-6xl text-white tracking-wide leading-none">
            Next cohort. Monday. 15 seats.
          </h2>
          <p className="font-body font-light text-dgray text-base md:text-lg leading-relaxed max-w-2xl">
            Once the cohort fills, registration closes. There&apos;s a new cohort every Monday, but seats go fast once outreach is running.
          </p>
          <a
            href="https://cyberseth.gumroad.com/l/challenge"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body font-bold text-base tracking-widest uppercase bg-gold text-navy px-10 py-5 hover:bg-gold/90 transition-colors duration-200 mt-2"
          >
            Reserve Your Seat — $497
          </a>
          <a
            href="https://cyber-seth.kit.com/newsletter"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body font-light text-sm text-dgray hover:text-gold transition-colors duration-200 tracking-wide"
          >
            Or start with the free GRC Resume Rewrite →
          </a>
        </div>
      </section>
    </>
  )
}
