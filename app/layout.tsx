import type { Metadata } from 'next'
import { Bebas_Neue, Lato } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  display: 'swap',
})

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Cyber & Seth — GRC Career Education',
    template: '%s | Cyber & Seth',
  },
  description:
    'GRC career education for people breaking in from other fields or moving up from technical roles. Real frameworks, honest paths, practical tools.',
  keywords: [
    'GRC careers',
    'cybersecurity GRC',
    'governance risk compliance',
    'GRC career path',
    'cybersecurity career change',
  ],
  openGraph: {
    siteName: 'Cyber & Seth',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${lato.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
