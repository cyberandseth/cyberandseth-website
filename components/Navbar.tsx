'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const trackLinks = [
  { href: '/track-a',   label: 'Track A — Move Up' },
  { href: '/track-b',   label: 'Track B — Break In' },
  { href: '/challenge', label: 'The 5-Day GRC Challenge' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [tracksOpen, setTracksOpen] = useState(false)
  const [mobileTracksOpen, setMobileTracksOpen] = useState(false)
  const tracksRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Close tracks dropdown on outside click
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (tracksRef.current && !tracksRef.current.contains(e.target as Node)) {
        setTracksOpen(false)
      }
    }
    if (tracksOpen) {
      document.addEventListener('mousedown', onClickOutside)
      return () => document.removeEventListener('mousedown', onClickOutside)
    }
  }, [tracksOpen])

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          bg-navy border-b border-gold/30
          transition-shadow duration-300
          ${scrolled ? 'shadow-[0_2px_24px_rgba(0,0,0,0.5)]' : ''}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-0 shrink-0">
            <span className="font-display text-2xl text-white tracking-wider leading-none">
              CYBER{' '}
              <span className="text-gold">&amp;</span>
              {' '}SETH
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="font-body font-light text-sm text-dgray hover:text-white tracking-wide transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="font-body font-light text-sm text-dgray hover:text-white tracking-wide transition-colors duration-200"
            >
              About
            </Link>

            {/* Tracks dropdown */}
            <div
              ref={tracksRef}
              className="relative"
              onMouseEnter={() => setTracksOpen(true)}
              onMouseLeave={() => setTracksOpen(false)}
            >
              <button
                type="button"
                onClick={() => setTracksOpen((o) => !o)}
                className="flex items-center gap-1.5 font-body font-light text-sm text-dgray hover:text-white tracking-wide transition-colors duration-200"
                aria-expanded={tracksOpen}
                aria-haspopup="menu"
              >
                Tracks
                <span
                  className={`inline-block text-[10px] transition-transform duration-200 ${tracksOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                >
                  ▾
                </span>
              </button>

              {tracksOpen && (
                <div
                  role="menu"
                  className="absolute left-0 top-full pt-3 w-72"
                >
                  <div className="bg-navy border border-gold/30 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
                    {trackLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setTracksOpen(false)}
                        role="menuitem"
                        className="block font-body font-light text-sm text-dgray tracking-wide px-5 py-3 border-l-2 border-transparent hover:border-gold hover:bg-white/5 hover:text-white transition-all duration-150"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/resources"
              className="font-body font-light text-sm text-dgray hover:text-white tracking-wide transition-colors duration-200"
            >
              Resources
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/resources"
              className="font-body font-bold text-xs tracking-widest uppercase bg-gold text-navy px-5 py-2.5 hover:bg-gold/90 transition-colors duration-200"
            >
              Free Resources
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
            aria-label="Open menu"
          >
            <span className="w-6 h-[1.5px] bg-white block" />
            <span className="w-6 h-[1.5px] bg-white block" />
            <span className="w-4 h-[1.5px] bg-gold block" />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-navy flex flex-col">
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 h-16 border-b border-gold/30">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <span className="font-display text-2xl text-white tracking-wider leading-none">
                CYBER <span className="text-gold">&amp;</span> SETH
              </span>
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-dgray hover:text-white transition-colors p-2 -mr-2"
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4l12 12M16 4L4 16" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col flex-1 overflow-y-auto px-8 pt-6 pb-4 gap-1">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="font-display text-5xl text-white tracking-wider py-3 border-b border-white/8 hover:text-gold transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="font-display text-5xl text-white tracking-wider py-3 border-b border-white/8 hover:text-gold transition-colors duration-200"
            >
              About
            </Link>

            {/* Tracks collapsible */}
            <button
              type="button"
              onClick={() => setMobileTracksOpen((o) => !o)}
              className="flex items-center justify-between font-display text-5xl text-white tracking-wider py-3 border-b border-white/8 hover:text-gold transition-colors duration-200 text-left"
              aria-expanded={mobileTracksOpen}
            >
              <span>Tracks</span>
              <span
                className={`text-2xl transition-transform duration-200 ${mobileTracksOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              >
                ▾
              </span>
            </button>
            {mobileTracksOpen && (
              <div className="flex flex-col border-b border-white/8">
                {trackLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-body font-light text-lg text-dgray tracking-wide py-3 pl-6 border-l-2 border-gold/40 hover:text-white hover:border-gold transition-all duration-150"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/resources"
              onClick={() => setMenuOpen(false)}
              className="font-display text-5xl text-white tracking-wider py-3 border-b border-white/8 hover:text-gold transition-colors duration-200"
            >
              Resources
            </Link>
          </nav>

          {/* Bottom CTA */}
          <div className="px-8 pb-12">
            <Link
              href="/resources"
              onClick={() => setMenuOpen(false)}
              className="block text-center font-body font-bold text-sm tracking-widest uppercase bg-gold text-navy py-4 hover:bg-gold/90 transition-colors duration-200"
            >
              Free Resources
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
