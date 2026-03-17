import Link from 'next/link'
import SectionLabel from './SectionLabel'

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center bg-navy overflow-hidden pt-16">
      {/* Radial gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,168,76,0.07) 0%, transparent 65%)',
        }}
      />

      {/* Subtle horizontal rule at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold/20" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <SectionLabel className="text-center">
          Cybersecurity GRC Careers
        </SectionLabel>

        <h1 className="font-display text-[clamp(4rem,12vw,9rem)] text-white leading-none tracking-wide mb-6">
          Your background<br />is the edge.
        </h1>

        <p className="font-body font-light text-gold text-xl md:text-2xl tracking-wide mb-12">
          Break in. Move up. Lead the room.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/resources"
            className="font-body font-bold text-sm tracking-widest uppercase bg-gold text-navy px-8 py-4 hover:bg-gold/90 transition-colors duration-200 w-full sm:w-auto text-center"
          >
            Get the Free Career Map
          </Link>
          <Link
            href="/about"
            className="font-body font-bold text-sm tracking-widest uppercase bg-transparent border border-white text-white px-8 py-4 hover:border-gold hover:text-gold transition-colors duration-200 w-full sm:w-auto text-center"
          >
            Start Here
          </Link>
        </div>
      </div>
    </section>
  )
}
