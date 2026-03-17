import type { Metadata } from 'next'
import SectionLabel from '@/components/SectionLabel'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Cyber & Seth.',
}

export default function ContactPage() {
  return (
    <section className="relative bg-navy min-h-screen pt-40 pb-32 px-6 overflow-hidden flex items-start">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(201,168,76,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-2xl mx-auto w-full">
        <SectionLabel>Contact</SectionLabel>

        <h1 className="font-display text-[clamp(3rem,8vw,6rem)] text-white tracking-wide leading-none mb-8">
          Get in touch.
        </h1>

        <div className="w-12 h-[2px] bg-gold mb-10" />

        <p className="font-body font-light text-dgray text-lg leading-relaxed mb-10">
          Questions about the resources, feedback on the content, or anything else — reach out directly. This is a one-person operation and messages get read.
        </p>

        <a
          href="mailto:hello@cyberandseth.com"
          className="font-body font-bold text-xl text-gold hover:text-gold/80 transition-colors duration-200 tracking-wide"
        >
          hello@cyberandseth.com
        </a>

        <div className="mt-16 pt-12 border-t border-white/8">
          <p className="font-body font-light text-dgray/60 text-sm">
            For collaboration, media, or speaking inquiries, use the same address.
          </p>
        </div>
      </div>
    </section>
  )
}
