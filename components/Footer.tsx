import Link from 'next/link'

const siteLinks = [
  { href: '/',          label: 'Home' },
  { href: '/about',     label: 'About' },
  { href: '/products',  label: 'Products' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact',   label: 'Contact' },
]

const socialLinks = [
  { href: 'https://youtube.com/@CyberandSeth',                      label: 'YouTube' },
  { href: 'https://www.tiktok.com/@cyberandseth',                   label: 'TikTok' },
  { href: 'https://www.instagram.com/cyberandseth',                 label: 'Instagram' },
  { href: 'https://cyberandseth.gumroad.com',                       label: 'Gumroad' },
]

export default function Footer() {
  return (
    <footer className="bg-[#060c14] border-t border-gold/30">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <Link href="/">
              <span className="font-display text-2xl text-white tracking-wider leading-none">
                CYBER <span className="text-gold">&amp;</span> SETH
              </span>
            </Link>
            <p className="font-body font-light text-sm text-dgray leading-relaxed max-w-xs">
              GRC career education for people breaking in from other fields and moving up from technical roles.
            </p>
            <div className="w-8 h-[1px] bg-gold/40 mt-2" />
          </div>

          {/* Site links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-body font-bold text-xs tracking-widest2 uppercase text-dgray">
              Site
            </h4>
            <nav className="flex flex-col gap-3">
              {siteLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body font-light text-sm text-dgray hover:text-white transition-colors duration-200 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social / external */}
          <div className="flex flex-col gap-4">
            <h4 className="font-body font-bold text-xs tracking-widest2 uppercase text-dgray">
              Find Us
            </h4>
            <nav className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body font-light text-sm text-dgray hover:text-gold transition-colors duration-200 w-fit"
                >
                  {link.label} ↗
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body font-light text-xs text-dgray/60">
            © 2026 Cyber & Seth. Built for the transition.
          </p>
          <p className="font-body font-light text-xs text-dgray/40">
            All purchases fulfilled through Gumroad.
          </p>
        </div>
      </div>
    </footer>
  )
}
