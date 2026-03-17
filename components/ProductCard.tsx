import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  name: string
  track: 'Track A' | 'Track B' | 'Both'
  price: string
  description: string[]
  ctaText: string
  gumroadUrl: string
  coverImage: string
}

const trackStyles: Record<string, string> = {
  'Track A': 'bg-gold/10 text-gold border border-gold/30',
  'Track B': 'bg-ice/10 text-ice border border-ice/30',
  'Both':    'bg-teal/20 text-[#6dd4c0] border border-teal/40',
}

export default function ProductCard({
  name,
  track,
  price,
  description,
  ctaText,
  gumroadUrl,
  coverImage,
}: ProductCardProps) {
  const isFree = price === 'Free'

  return (
    <div className="flex flex-col bg-[#111f2e] border border-white/8 rounded-sm overflow-hidden group hover:border-gold/30 transition-colors duration-300">
      {/* Cover image area */}
      <div className="relative aspect-[4/3] bg-navy overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-teal/20 to-navy">
          <span className="font-display text-2xl text-dgray/30 tracking-widest text-center px-4">
            {name.toUpperCase()}
          </span>
        </div>
        {coverImage && (
          <Image
            src={coverImage}
            alt={name}
            fill
            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        {/* Track badge + price */}
        <div className="flex items-center justify-between gap-3">
          <span className={`text-[10px] font-body font-bold tracking-widest2 uppercase px-2.5 py-1 rounded-sm ${trackStyles[track]}`}>
            {track}
          </span>
          <span className={`font-display text-xl tracking-wide ${isFree ? 'text-ice' : 'text-gold'}`}>
            {price}
          </span>
        </div>

        {/* Name */}
        <h3 className="font-display text-2xl text-white leading-tight tracking-wide">
          {name}
        </h3>

        {/* Description — multi-paragraph */}
        <div className="flex flex-col gap-3 flex-1">
          {description.map((para, i) => (
            <p key={i} className="font-body font-light text-dgray text-sm leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={gumroadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            mt-2 block text-center font-body font-bold text-sm tracking-widest uppercase py-3 px-6
            transition-all duration-200
            ${isFree
              ? 'bg-transparent border border-ice text-ice hover:bg-ice hover:text-navy'
              : 'bg-gold text-navy hover:bg-gold/90'
            }
          `}
        >
          {ctaText}
        </Link>
      </div>
    </div>
  )
}
