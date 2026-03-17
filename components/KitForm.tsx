'use client'

import { useState } from 'react'

interface KitFormProps {
  headline?: string
  subtext?: string
  buttonText?: string
  dark?: boolean
}

export default function KitForm({
  headline = 'Start with the free GRC Career Map.',
  subtext = 'Three lanes. Salary ranges. First certifications. First moves. Free.',
  buttonText = 'Get the Career Map',
  dark = true,
}: KitFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        throw new Error('Submission failed')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again.')
    }
  }

  return (
    <div className={`w-full ${dark ? 'bg-navy' : 'bg-lgray'}`}>
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <div className="w-12 h-[2px] bg-gold mx-auto mb-8" />

        <h2
          className={`font-display text-4xl md:text-5xl tracking-wide mb-4 ${
            dark ? 'text-white' : 'text-navy'
          }`}
        >
          {headline}
        </h2>

        <p
          className={`font-body font-light text-base md:text-lg mb-10 leading-relaxed ${
            dark ? 'text-dgray' : 'text-steel'
          }`}
        >
          {subtext}
        </p>

        {status === 'success' ? (
          <div className="border border-gold/30 bg-gold/5 rounded-sm px-8 py-6">
            <p className="font-body font-bold text-gold text-base tracking-wide">
              You're in. Check your inbox.
            </p>
            <p className="font-body font-light text-dgray text-sm mt-2">
              The Career Map is on its way.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                disabled={status === 'loading'}
                className={`
                  flex-1 font-body font-light text-sm px-5 py-3.5
                  border bg-transparent outline-none
                  placeholder:text-dgray/60
                  transition-colors duration-200
                  disabled:opacity-50
                  ${dark
                    ? 'border-white/20 text-white focus:border-gold/60'
                    : 'border-steel/30 text-navy focus:border-gold'
                  }
                `}
              />
              <button
                type="submit"
                disabled={status === 'loading' || !email}
                className="
                  bg-gold text-navy font-body font-bold text-sm tracking-widest uppercase
                  px-8 py-3.5 whitespace-nowrap
                  hover:bg-gold/90 transition-colors duration-200
                  disabled:opacity-50 disabled:cursor-not-allowed
                "
              >
                {status === 'loading' ? 'Sending…' : buttonText}
              </button>
            </div>

            {status === 'error' && (
              <p className="mt-3 text-sm font-body text-red-400">
                {errorMsg}
              </p>
            )}

            <p className={`mt-4 text-xs font-body font-light ${dark ? 'text-dgray/60' : 'text-dgray'}`}>
              No spam. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
