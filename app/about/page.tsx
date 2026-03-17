import type { Metadata } from 'next'
import SectionLabel from '@/components/SectionLabel'
import KitForm from '@/components/KitForm'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Seth Ellis is a GRC practitioner and career educator. Cyber & Seth exists because the path into GRC leadership is rarely explained clearly.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy pt-32 pb-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(201,168,76,0.06) 0%, transparent 70%)',
          }}
        />
        <div className="relative max-w-4xl mx-auto">
          <SectionLabel>About</SectionLabel>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] text-white tracking-wide leading-none mb-6">
            Seth Ellis
          </h1>
          <p className="font-body font-light text-gold text-xl md:text-2xl tracking-wide max-w-2xl">
            GRC practitioner. Career educator. Building in public.
          </p>
        </div>
      </section>

      {/* Gold rule */}
      <div className="w-full h-[1px] bg-gold/20" />

      {/* Bio */}
      <section className="bg-navy py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col gap-8">
            <p className="font-body font-light text-white/90 text-lg leading-relaxed">
              Seth Ellis is a GRC professional with hands-on experience in information security governance, risk management, and compliance. Cyber & Seth exists because the path into GRC leadership is rarely explained clearly — and almost never explained honestly.
            </p>
            <p className="font-body font-light text-dgray text-base leading-relaxed">
              The frameworks here are the ones that work in real conversations, real interviews, and real organizations. Not theory. Not textbook definitions. The actual mechanics of how capable people reposition themselves and get taken seriously.
            </p>
            <p className="font-body font-light text-dgray text-base leading-relaxed">
              Both tracks — breaking in from another field and moving up from a technical role — are built from the same foundation: your existing experience is more relevant than you've been told. The job is to make that visible.
            </p>
            <p className="font-body font-light text-dgray text-base leading-relaxed">
              This is not a training platform. It's a career strategy resource — built for people who are already capable and need the map, not the credential.
            </p>
          </div>
        </div>
      </section>

      {/* Track explainer */}
      <section className="bg-[#0a1520] py-20 px-6 border-y border-white/8">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>The Two Tracks</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide mb-12">
            Who this is for.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Track A */}
            <div className="border-l-2 border-gold pl-8 py-2 flex flex-col gap-4">
              <span className="font-body font-bold text-[10px] tracking-widest2 uppercase text-gold">
                Track A — Move Up
              </span>
              <h3 className="font-display text-3xl text-white tracking-wide">
                Already in security.
              </h3>
              <p className="font-body font-light text-dgray text-sm leading-relaxed">
                You've been doing the technical work — SOC analysis, vulnerability management, IT audit support, security engineering. You know the tools, you understand the environment. What you need now is the language and positioning to move into governance, risk, or compliance leadership. That transition is strategic, not technical.
              </p>
              <Link
                href="/products"
                className="font-body font-bold text-xs tracking-widest uppercase text-gold hover:text-gold/80 transition-colors w-fit mt-2"
              >
                See Track A resources →
              </Link>
            </div>

            {/* Track B */}
            <div className="border-l-2 border-ice pl-8 py-2 flex flex-col gap-4">
              <span className="font-body font-bold text-[10px] tracking-widest2 uppercase text-ice">
                Track B — Break In
              </span>
              <h3 className="font-display text-3xl text-white tracking-wide">
                Coming from outside.
              </h3>
              <p className="font-body font-light text-dgray text-sm leading-relaxed">
                Finance, healthcare, military, legal, project management — these backgrounds don't need to be explained away. They need to be translated. A risk analyst from financial services isn't switching careers into GRC; they're lateraling. The mechanics of that move are specific, teachable, and faster than most people expect.
              </p>
              <Link
                href="/products"
                className="font-body font-bold text-xs tracking-widest uppercase text-ice hover:text-ice/80 transition-colors w-fit mt-2"
              >
                See Track B resources →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA back to free resource */}
      <KitForm
        headline="Start with the free GRC Career Map."
        subtext="The fastest way to understand which lane fits your background."
        buttonText="Get It Free"
        dark
      />
    </>
  )
}
