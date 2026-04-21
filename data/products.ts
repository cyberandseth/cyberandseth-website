export interface Product {
  id: string
  name: string
  track: 'Track A' | 'Track B' | 'Both'
  price: string
  badge?: string
  description: string[]
  ctaText: string
  gumroadUrl?: string
  internalLink?: boolean
  href?: string
  coverImage: string
}

export const products: Product[] = [
  {
    id: 'resume-rewrite',
    name: 'The 5-Minute GRC Resume Rewrite',
    track: 'Both',
    price: 'Free',
    description: [
      "Your GRC resume isn't getting responses — not because your experience is wrong, but because it's written in the wrong language.",
      "One before/after. One fill-in template. One next step. Consumable in under 5 minutes.",
    ],
    ctaText: 'Get It Free',
    href: 'https://cyber-seth.kit.com/newsletter',
    coverImage: '/images/ResumeRewrite.png',
  },
  {
    id: 'risk-strategist-workbook',
    name: 'Risk Strategist Workbook',
    track: 'Track A',
    price: '$197',
    description: [
      "You're technically capable. You're doing real work. And you're invisible to the people who could advance your career.",
      "The problem isn't your skills. It's your positioning.",
      "You're communicating like a technician and being treated like one. You're building expertise in a lane that doesn't match where you want to go. And you're waiting to be noticed instead of making your value visible.",
      "This workbook contains the exact framework I used to fix that.",
    ],
    ctaText: 'Get the Workbook',
    gumroadUrl: 'https://cyberseth.gumroad.com/l/risk-strategy',
    internalLink: true,
    href: '/products/risk-strategist-workbook',
    coverImage: '/images/risk-strategist-workbook.png',
  },
  {
    id: 'career-toolkit',
    name: "The Career Toolkit Senior Security Analysts Don't Share",
    track: 'Track A',
    price: '$97',
    badge: 'NEW',
    description: [
      "Two plug-and-play workbooks that map your domain, track your wins, and build your promotion case — so you stop hoping and start engineering.",
    ],
    ctaText: 'Get the Toolkit',
    internalLink: true,
    href: '/products/career-toolkit',
    coverImage: '/images/career-toolkit-cover.png',
  },
  {
    id: 'background-is-the-edge',
    name: 'Your Background Is the Edge',
    track: 'Track B',
    price: '$47',
    description: [
      "You didn't come from a traditional cybersecurity path. And every job posting you read makes it feel like that's a problem.",
      "It isn't. It's actually your advantage — if you know how to position it.",
      "This guide is built for five specific backgrounds — finance, healthcare, military, legal, and project management — and it shows you exactly how the experience you already have maps to the GRC roles that are actively hiring.",
    ],
    ctaText: 'Get the Guide',
    gumroadUrl: 'https://cyberseth.gumroad.com/l/background-edge',
    coverImage: '/images/background-edge-cover.png',
  },
]
