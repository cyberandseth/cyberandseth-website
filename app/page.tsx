import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import TrackCards from '@/components/TrackCards'
import KitForm from '@/components/KitForm'
import SectionLabel from '@/components/SectionLabel'

export const metadata: Metadata = {
  title: 'Cyber & Seth — GRC Career Education',
  description:
    'GRC career education for people breaking in from other fields and moving up from technical roles. Real frameworks, honest paths.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Two-track section */}
      <TrackCards />

      {/* Social proof strip */}
      <section className="bg-[#0a1520] border-y border-white/8 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-body font-light text-dgray text-base md:text-lg italic">
            "Built for people doing the work — not just studying for it."
          </p>
        </div>
      </section>

      {/* Testimonials placeholder — activate after first Challenge cohort */}
      {/* TODO: Add real testimonials after first Challenge cohort (Week 5) */}
      <section className="bg-navy py-24 px-6 hidden">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <SectionLabel>Social Proof</SectionLabel>
            <h2 className="font-display text-5xl md:text-6xl text-white tracking-wide">
              What people are saying.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-[#111f2e] border border-white/8 p-8 flex flex-col gap-4"
              >
                <p className="font-body font-light text-dgray text-sm leading-relaxed italic">
                  &ldquo;&rdquo;
                </p>
                <div className="mt-auto">
                  <p className="font-body font-bold text-white text-sm"></p>
                  <p className="font-body font-light text-dgray text-xs"></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email capture */}
      <KitForm
        headline="Get the free GRC Resume Rewrite."
        subtext="One before/after. One template. One next step. Under 5 minutes."
        buttonText="Send It Free"
        dark
      />
    </>
  )
}
