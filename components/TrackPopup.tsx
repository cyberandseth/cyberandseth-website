'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const STORAGE_KEY = 'cs_popup_seen'
const SUPPRESS_DAYS = 30

type Step = 'email' | 'qualifier'

function isSuppressed(): boolean {
  if (typeof window === 'undefined') return true
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return false
    const ts = parseInt(raw, 10)
    if (!ts || Number.isNaN(ts)) return false
    const now = Date.now()
    const ageMs = now - ts
    const maxMs = SUPPRESS_DAYS * 24 * 60 * 60 * 1000
    return ageMs < maxMs
  } catch {
    return false
  }
}

function markSeen() {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, String(Date.now()))
  } catch {
    /* ignore */
  }
}

export default function TrackPopup() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState<Step>('email')
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  // Trigger 4s after mount, first visit only
  useEffect(() => {
    if (isSuppressed()) return
    const t = window.setTimeout(() => setOpen(true), 4000)
    return () => window.clearTimeout(t)
  }, [])

  // Lock body scroll while modal is open
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') handleDismiss()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  function handleDismiss() {
    markSeen()
    setOpen(false)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || submitting) return
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error('Submission failed')
      // Advance to qualifier step
      setStep('qualifier')
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  function handleTrackChoice(path: '/track-a' | '/track-b') {
    markSeen()
    setOpen(false)
    router.push(path)
  }

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={step === 'email' ? 'Get the GRC Resume Rewrite' : 'Choose your track'}
      className="fixed inset-0 z-[200] flex items-center justify-center px-4 sm:px-6"
      style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
    >
      <div
        className="relative w-full max-w-[480px] bg-navy border-t-[3px] border-gold shadow-[0_20px_80px_rgba(0,0,0,0.8)] animate-[fadeIn_180ms_ease-out]"
        style={{
          animation: 'fadeIn 180ms ease-out',
        }}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Close"
          className="absolute top-3 right-3 p-2 text-dgray hover:text-white transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 4l12 12M16 4L4 16" />
          </svg>
        </button>

        {step === 'email' && (
          <div className="p-8 sm:p-10">
            <span className="font-body font-bold text-[10px] tracking-widest2 uppercase text-gold block mb-4">
              Free Resource
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-white tracking-wide leading-tight mb-4">
              Get the 5-Minute GRC Resume Rewrite.
            </h2>
            <p className="font-body font-light text-dgray text-sm sm:text-base leading-relaxed mb-6">
              One before/after. One template. One next step. Find out which GRC lane fits your background — and what to do first.
            </p>

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                disabled={submitting}
                className="w-full font-body font-light text-sm px-5 py-3.5 border border-white/20 bg-transparent text-white outline-none placeholder:text-dgray/60 focus:border-gold/60 transition-colors duration-200 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={submitting || !email}
                className="w-full font-body font-bold text-sm tracking-widest uppercase bg-gold text-navy px-6 py-3.5 hover:bg-gold/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Sending…' : 'Send It Free'}
              </button>
              {error && (
                <p className="font-body text-sm text-red-400">{error}</p>
              )}
              <p className="font-body font-light text-xs text-dgray/60 text-center mt-1">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          </div>
        )}

        {step === 'qualifier' && (
          <div className="p-8 sm:p-10">
            <span className="font-body font-bold text-[10px] tracking-widest2 uppercase text-gold block mb-4">
              One Quick Question
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-white tracking-wide leading-tight mb-3">
              Which describes you right now?
            </h2>
            <p className="font-body font-light text-dgray text-sm sm:text-base leading-relaxed mb-6">
              We&apos;ll send you to the right resources for your situation.
            </p>

            <div className="flex flex-col gap-3">
              {/* Track A */}
              <button
                type="button"
                onClick={() => handleTrackChoice('/track-a')}
                className="group text-left w-full bg-[#111f2e] border border-white/10 hover:border-gold hover:bg-gold/5 transition-colors duration-200 p-5 flex flex-col gap-2"
              >
                <span className="font-body font-bold text-[10px] tracking-widest2 uppercase text-gold">
                  Track A
                </span>
                <span className="font-display text-xl text-white tracking-wide leading-tight group-hover:text-gold transition-colors">
                  I&apos;m already in cybersecurity or IT.
                </span>
                <span className="font-body font-light text-dgray text-sm leading-relaxed">
                  2–5 years in the field. Technically capable. Ready to stop executing and start leading.
                </span>
              </button>

              {/* Track B */}
              <button
                type="button"
                onClick={() => handleTrackChoice('/track-b')}
                className="group text-left w-full bg-[#111f2e] border border-white/10 hover:border-ice hover:bg-ice/5 transition-colors duration-200 p-5 flex flex-col gap-2"
              >
                <span className="font-body font-bold text-[10px] tracking-widest2 uppercase text-ice">
                  Track B
                </span>
                <span className="font-display text-xl text-white tracking-wide leading-tight group-hover:text-ice transition-colors">
                  I&apos;m coming from another field.
                </span>
                <span className="font-body font-light text-dgray text-sm leading-relaxed">
                  Finance, healthcare, military, legal, or PM. I want to break into GRC and need to know where to start.
                </span>
              </button>
            </div>

            <div className="mt-5 text-center">
              <button
                type="button"
                onClick={handleDismiss}
                className="font-body font-light text-sm text-dgray/70 hover:text-dgray transition-colors tracking-wide"
              >
                Skip — take me to the homepage
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
