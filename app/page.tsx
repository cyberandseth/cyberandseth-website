import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import TrackCards from '@/components/TrackCards'
import KitForm from '@/components/KitForm'
import ProductCard from '@/components/ProductCard'
import SectionLabel from '@/components/SectionLabel'
import { products } from '@/data/products'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cyber & Seth — GRC Career Education',
  description:
    'GRC career education for people breaking in from other fields and moving up from technical roles. Real frameworks, honest paths.',
}

const featuredProducts = products.slice(0, 2)

// Replace with your actual latest video ID when ready
const LATEST_VIDEO_ID = '0I0h3ol45eY'

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

      {/* Featured products */}
      <section className="bg-navy py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <SectionLabel>Resources &amp; Tools</SectionLabel>
            <h2 className="font-display text-5xl md:text-6xl text-white tracking-wide">
              Start here.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/products"
              className="font-body font-light text-sm text-dgray hover:text-gold transition-colors duration-200 tracking-wide"
            >
              View all products →
            </Link>
          </div>
        </div>
      </section>

      {/* YouTube section */}
      <section className="bg-[#0a1520] py-24 px-6 border-y border-white/8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <SectionLabel>On the Channel</SectionLabel>
            <h2 className="font-display text-5xl md:text-6xl text-white tracking-wide">
              Latest from YouTube.
            </h2>
          </div>

          {/* Video embed */}
          <div className="relative w-full aspect-video bg-navy/60 overflow-hidden border border-white/8">
            <iframe
              src={`https://www.youtube.com/embed/${LATEST_VIDEO_ID}`}
              title="Latest Cyber & Seth video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>

          <div className="mt-8 flex justify-end">
            <a
              href="https://youtube.com/@CyberandSeth"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body font-bold text-xs tracking-widest uppercase text-gold hover:text-gold/80 transition-colors duration-200"
            >
              Watch on YouTube ↗
            </a>
          </div>
        </div>
      </section>

      {/* Email capture */}
      <KitForm
        headline="Start with the free GRC Career Map."
        subtext="Three lanes. Salary ranges. First certifications. First moves. Free."
        buttonText="Get the Career Map"
        dark
      />
    </>
  )
}
