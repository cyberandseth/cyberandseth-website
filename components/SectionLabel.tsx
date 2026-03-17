'use client'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <span
      className={`
        font-body font-light text-ice text-xs tracking-widest2 uppercase
        block mb-4
        ${className}
      `}
    >
      {children}
    </span>
  )
}
