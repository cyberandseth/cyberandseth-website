import Link from 'next/link'

export default function TrackCards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {/* Track A — Move Up */}
      <div className="relative bg-navy border-t-2 border-gold p-12 md:p-16 flex flex-col gap-6 group">
        <div className="w-8 h-[2px] bg-gold" />
        <div>
          <span className="font-body font-bold text-[10px] tracking-widest2 uppercase text-gold mb-3 block">
            Track A
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide leading-tight">
            Move Up
          </h2>
        </div>
        <p className="font-body font-light text-dgray text-base leading-relaxed max-w-md">
          Already in IT or security. Ready to stop executing and start leading. The path from technical contributor to GRC leadership is shorter than most people think — and more strategic than most people plan.
        </p>
        <Link
          href="/products"
          className="font-body font-bold text-xs tracking-widest uppercase text-gold border border-gold/40 px-6 py-3 w-fit hover:bg-gold hover:text-navy transition-all duration-200 mt-2"
        >
          See the Path
        </Link>
      </div>

      {/* Track B — Break In */}
      <div className="relative bg-teal border-t-2 border-white/30 p-12 md:p-16 flex flex-col gap-6 group">
        <div className="w-8 h-[2px] bg-white/60" />
        <div>
          <span className="font-body font-bold text-[10px] tracking-widest2 uppercase text-white/70 mb-3 block">
            Track B
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide leading-tight">
            Break In
          </h2>
        </div>
        <p className="font-body font-light text-white/80 text-base leading-relaxed max-w-md">
          Coming from finance, healthcare, military, legal, or project management. Your background is not a liability — it's a positioning advantage most career changers don't know how to use.
        </p>
        <Link
          href="/products"
          className="font-body font-bold text-xs tracking-widest uppercase text-white border border-white/40 px-6 py-3 w-fit hover:bg-white hover:text-teal transition-all duration-200 mt-2"
        >
          See the Path
        </Link>
      </div>
    </section>
  )
}
