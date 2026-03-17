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
            Each resource is built around a specific move — breaking in, moving up, or repositioning. Start with the free Career Map.
          </p>
        </div>
      </section>

      {/* Gold rule */}
      <div className="w-full h-[1px] bg-gold/20" />

      {/* Product grid */}
      <section className="bg-navy py-20 px-6">
        <div className="max-w-5xl mx-auto">
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

          {/* Both tracks */}
          {products.some((p) => p.track === 'Both') && (
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="font-body font-bold text-[10px] tracking-widest2 uppercase text-[#6dd4c0] border border-teal/40 px-3 py-1.5">
                  Both Tracks
                </span>
                <div className="flex-1 h-[1px] bg-teal/20" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products
                  .filter((p) => p.track === 'Both')
                  .map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
