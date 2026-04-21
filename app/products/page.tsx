import type { Metadata } from 'next'
import SectionLabel from '@/components/SectionLabel'
import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'GRC career tools for breaking in and moving up. Guides, maps, and frameworks built from real experience.',
}

export default function ProductsPage() {
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
        <div className="relative max-w-5xl mx-auto">
          <SectionLabel>Resources &amp; Tools</SectionLabel>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] text-white tracking-wide leading-none mb-4">
            Tools for the transition.
          </h1>
          <p className="font-body font-light text-dgray text-lg max-w-2xl leading-relaxed">
            Each resource is built around a specific move — breaking in, moving up, or repositioning. Start with the free Resume Rewrite.
          </p>
        </div>
      </section>

      {/* Gold rule */}
      <div className="w-full h-[1px] bg-gold/20" />

      {/* Flagship Program */}
      <section className="bg-navy py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <span className="font-body font-bold text-[10px] tracking-widest2 uppercase text-gold border border-gold/30 px-3 py-1.5">
                Flagship Program
              </span>
              <div className="flex-1 h-[1px] bg-gold/20" />
            </div>

            {/* Flagship hero card */}
            <div className="relative bg-navy border-2 border-gold/40 overflow-hidden">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(201,168,76,0.08) 0%, transparent 70%)',
                }}
              />
              <div className="relative p-8 md:p-12 lg:p-16">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="text-[10px] font-body font-bold tracking-widest2 uppercase px-2.5 py-1 rounded-sm bg-teal/20 text-[#6dd4c0] border border-teal/40">
                    Both Tracks
                  </span>
                  <span className="font-display text-xl tracking-wide text-gold">
                    $497
                  </span>
                </div>

                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white tracking-wide leading-none mb-6">
                  5-Day GRC Challenge
                </h2>

                <p className="font-body font-light text-dgray text-base md:text-lg leading-relaxed max-w-3xl mb-8">
                  Five consecutive days. Live on Zoom. Limited to 15 seats per cohort. New cohort every Monday. Each day builds one piece of your repositioning: your lane, your language, your visibility, your narrative, your 90-day plan. You leave with a complete career repositioning strategy — not notes, not a certificate, a plan you can execute the next day.
                </p>

                {/* Day breakdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                  {[
                    { day: '1', title: 'The 3-Lane Diagnostic' },
                    { day: '2', title: 'The Risk Language Shift' },
                    { day: '3', title: 'The Visibility Map' },
                    { day: '4', title: 'The Career Narrative' },
                    { day: '5', title: 'The 90-Day Action Plan' },
                  ].map((item) => (
                    <div
                      key={item.day}
                      className="bg-[#111f2e] border border-white/8 p-4 flex flex-col gap-2"
                    >
                      <span className="font-display text-lg text-gold tracking-wide">
                        Day {item.day}
                      </span>
                      <span className="font-body font-light text-dgray text-sm">
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bonuses, guarantee, downsell */}
                <div className="flex flex-col gap-3 mb-8">
                  <p className="font-body font-light text-dgray text-sm leading-relaxed">
                    <span className="text-white font-bold">Includes:</span> Risk Strategist Workbook + Interview Prep Kit + Resume/LinkedIn Kit
                  </p>
                  <p className="font-body font-light text-dgray text-sm leading-relaxed">
                    <span className="text-gold font-bold">Guarantee:</span> 100% refund if you complete all 5 days and don&apos;t feel repositioned.
                  </p>
                  <p className="font-body font-light text-dgray text-sm leading-relaxed">
                    Can&apos;t do live? Get the Risk Strategist Workbook for $197 instead.
                  </p>
                </div>

                <a
                  href="mailto:info@cyberandseth.com"
                  className="inline-block font-body font-bold text-sm tracking-widest uppercase bg-gold text-navy px-8 py-4 hover:bg-gold/90 transition-colors duration-200"
                >
                  Join the Waitlist
                </a>
              </div>
            </div>
          </div>

          {/* Track A products */}
          {products.some((p) => p.track === 'Track A') && (
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <span className="font-body font-bold text-[10px] tracking-widest2 uppercase text-gold border border-gold/30 px-3 py-1.5">
                  Track A — Move Up
                </span>
                <div className="flex-1 h-[1px] bg-gold/20" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products
                  .filter((p) => p.track === 'Track A')
                  .map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
              </div>
            </div>
          )}

          {/* Track B products */}
          {products.some((p) => p.track === 'Track B') && (
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <span className="font-body font-bold text-[10px] tracking-widest2 uppercase text-ice border border-ice/30 px-3 py-1.5">
                  Track B — Break In
                </span>
                <div className="flex-1 h-[1px] bg-ice/20" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products
                  .filter((p) => p.track === 'Track B')
                  .map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
              </div>
            </div>
          )}

          {/* Free Resources */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="font-body font-bold text-[10px] tracking-widest2 uppercase text-[#6dd4c0] border border-teal/40 px-3 py-1.5">
                Free Resources
              </span>
              <div className="flex-1 h-[1px] bg-teal/20" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProductCard
                name="The 5-Minute GRC Resume Rewrite"
                track="Both"
                price="Free"
                description={[
                  "Your GRC resume isn't getting responses — not because your experience is wrong, but because it's written in the wrong language.",
                  "One before/after. One fill-in template. One next step. Under 5 minutes.",
                ]}
                ctaText="Get It Free"
                href="https://join.cyberandseth.com/grc-resume-fix"
                coverImage="/images/ResumeRewrite.png"
              />
              <ProductCard
                name="The 3-Lane Test"
                track="Both"
                price="Free"
                description={[
                  "Three GRC lanes mapped side by side — Governance, Risk, and Compliance — with salary ranges, first certifications, and first roles. Take the test, find your lane, get your first move.",
                ]}
                ctaText="Get It Free"
                href="https://cyber-seth.kit.com/7699fa61fd"
                coverImage=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
