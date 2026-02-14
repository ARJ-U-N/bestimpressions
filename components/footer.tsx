import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/[0.06]">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-yellow/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <Image src="/cropped-BEST-IMPRESSIONS-LOGO.png" alt="Best Impressions" width={36} height={36} className="rounded-lg" />
              <span className="font-heading text-base text-white uppercase tracking-tight">
                BEST IMPRESSIONS
              </span>
            </div>
            <p className="text-white/30 text-sm font-sans font-light leading-relaxed">
              Premium printing and merchandise solutions for your brand identity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="flex items-center gap-2 font-heading text-sm text-white uppercase tracking-wider mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Contact Us', href: '/contact' },
                { label: 'Products', href: '/#featured' },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-white/30 hover:text-brand-yellow text-sm font-sans font-light transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="flex items-center gap-2 font-heading text-sm text-white uppercase tracking-wider mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
              Products
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'ID Cards', href: '/product/employee-id-cards' },
                { label: 'Business Cards', href: '/product/business-booster-cards' },
                { label: 'Mug Printing', href: '/product/magic-mugs' },
                { label: 'Merchandise', href: '/product/t-shirt-jerseys' },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-white/30 hover:text-brand-yellow text-sm font-sans font-light transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="flex items-center gap-2 font-heading text-sm text-white uppercase tracking-wider mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-brand-yellow flex-shrink-0 mt-0.5" />
                <span className="text-white/30 text-sm font-sans font-light">
                  Kochi, Kerala, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-brand-yellow flex-shrink-0" />
                <a
                  href="tel:+919946666255"
                  className="text-white/30 hover:text-brand-yellow text-sm font-sans font-light transition-colors"
                >
                  +91 99466 66255
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-brand-yellow flex-shrink-0" />
                <a
                  href="mailto:info@bestimpressions.com"
                  className="text-white/30 hover:text-brand-yellow text-sm font-sans font-light transition-colors"
                >
                  info@bestimpressions.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.04] my-8" />

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs font-sans font-light tracking-wider">
            &copy; {currentYear} Best Impressions. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex gap-4">
            {[
              { icon: Linkedin, label: 'LinkedIn' },
              { icon: Twitter, label: 'Twitter' },
              { icon: Facebook, label: 'Facebook' },
            ].map((social, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full border border-white/[0.06] flex items-center justify-center text-white/20 hover:text-brand-yellow hover:border-brand-yellow/30 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
