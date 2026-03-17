'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '/',          label: 'Home' },
  { href: '/about',     label: 'About' },
  { href: '/products',  label: 'Products' },
  { href: '/resources', label: 'Resources' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body font-light text-sm text-dgray hover:text-white tracking-wide transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/resources"
              className="font-body font-bold text-xs tracking-widest uppercase bg-gold text-navy px-5 py-2.5 hover:bg-gold/90 transition-colors duration-200"
            >
              Free Career Map
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
          <nav className="flex flex-col flex-1 justify-center px-8 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-5xl text-white tracking-wider py-3 border-b border-white/8 hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div className="px-8 pb-12">
            <Link
              href="/resources"
              onClick={() => setMenuOpen(false)}
              className="block text-center font-body font-bold text-sm tracking-widest uppercase bg-gold text-navy py-4 hover:bg-gold/90 transition-colors duration-200"
            >
              Free Career Map
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
