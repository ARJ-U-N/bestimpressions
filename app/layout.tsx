import type { Metadata, Viewport } from 'next'
import { League_Spartan, Montserrat } from 'next/font/google'
import './globals.css'
import { InteractiveDotGrid } from '@/components/interactive-dot-grid'

// Brand Typography — League Spartan (Headings) + Montserrat (Body)
const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Best Impressions — Kerala\'s Fastest Premium ID Card & Branding Solutions',
  description:
    'Premium UV printing, engraving, ID cards, metal NFC cards, merchandise, and corporate gifting. Zero hassle. 100% on-time delivery across Kerala.',
}

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${leagueSpartan.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
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