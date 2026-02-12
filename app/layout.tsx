import type { Metadata, Viewport } from 'next'
import { Oswald, Manrope } from 'next/font/google'
import './globals.css'
import { InteractiveDotGrid } from '@/components/interactive-dot-grid'

// Industrial Luxury Typography
const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Best Impressions — Premium Printing & Brand Identity',
  description:
    'Ultra-premium printing solutions for corporate identity, custom merchandise, and luxury brand materials. ID cards, PVC cards, mugs, and more.',
}

export const viewport: Viewport = {
  themeColor: '#020202',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${oswald.variable} ${manrope.variable}`}>
      <body className="font-manrope antialiased">
        {/* Background Layer — Interactive Dot Grid */}
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        >
          <InteractiveDotGrid />
        </div>

        {/* Vignette Overlay */}
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            zIndex: 1,
            background:
              'radial-gradient(ellipse at center, transparent 40%, rgba(2,2,2,0.5) 75%, rgba(2,2,2,0.9) 100%)',
          }}
        />

        {/* Content Layer */}
        <div className="relative z-10 min-h-screen flex flex-col">{children}</div>
      </body>
    </html>
  )
}