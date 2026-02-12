'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function Navbar() {
  const [sheetOpen, setSheetOpen] = useState(false)
  const whatsappLink = 'https://wa.me/919946666255'

  const navItems = [
    { label: 'Home', href: '/' },
    {
      label: 'Identity Cards',
      href: '/category/id-cards',
      submenu: [
        { label: 'Employee IDs', href: '/product/employee-id-cards' },
        { label: 'Student IDs', href: '/product/student-id-cards' },
        { label: 'Customized IDs', href: '/product/customized-id-cards' },
        { label: 'RFID Cards', href: '/product/rfid-access-cards' },
        { label: 'Badge Reels', href: '/product/badge-reels' },
        { label: 'Lanyards', href: '/product/lanyards-tags' },
      ],
    },
    {
      label: 'PVC Cards',
      href: '/category/pvc-cards',
      submenu: [
        { label: 'Business Cards', href: '/product/business-booster-cards' },
        { label: 'Membership Cards', href: '/product/membership-cards' },
      ],
    },
    {
      label: 'Mug Printing',
      href: '/category/mugs',
      submenu: [
        { label: 'Magic Mugs', href: '/product/magic-mugs' },
        { label: 'Gold Mugs', href: '/product/gold-plated-mugs' },
        { label: 'Silver Mugs', href: '/product/silver-plated-mugs' },
        { label: 'White Mugs', href: '/product/white-mugs' },
      ],
    },
    {
      label: 'Merchandise',
      href: '/category/merch',
      submenu: [
        { label: 'T-Shirts', href: '/product/t-shirt-jerseys' },
        { label: 'Badges', href: '/product/badges' },
        { label: 'Keychains', href: '/product/keychains' },
        { label: 'Gifts', href: '/product/photo-frames' },
      ],
    },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <>
      {/* ═══════════════════════════════════════════════
          MOBILE NAVBAR — Balanced Layout
          Hamburger (Left) | Logo (Center-Left) | Icons (Right)
      ═══════════════════════════════════════════════ */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 px-4 py-3">
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200, delay: 0.1 }}
          className="flex items-center justify-between bg-black/70 backdrop-blur-2xl border border-white/[0.08] rounded-2xl px-4 py-2.5"
        >
          {/* Left: Hamburger */}
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <button className="p-2 text-white/70 hover:text-white rounded-xl hover:bg-white/[0.05] transition-colors">
                <Menu size={20} />
              </button>
            </SheetTrigger>

            {/* Side Sheet Menu */}
            <SheetContent
              side="left"
              className="w-[85vw] max-w-sm bg-[#0A0A0A] border-r border-white/[0.06] p-0"
            >
              <SheetHeader className="px-6 pt-6 pb-4 border-b border-white/[0.06]">
                <SheetTitle className="flex items-center gap-2.5">
                  <Image src="/cropped-BEST-IMPRESSIONS-LOGO.png" alt="Best Impressions" width={36} height={36} className="rounded-lg" />
                  <span className="font-oswald text-base text-white uppercase tracking-tight">
                    BEST IMPRESSIONS
                  </span>
                </SheetTitle>
              </SheetHeader>

              <div className="px-4 py-4 space-y-1 overflow-y-auto max-h-[calc(100vh-180px)]">
                {navItems.map((item, index) => (
                  <div key={index}>
                    {item.submenu ? (
                      <div className="py-2">
                        {/* Category header — links to category page */}
                        <Link
                          href={item.href}
                          onClick={() => setSheetOpen(false)}
                          className="flex items-center gap-2 px-3 py-2 text-white/90 text-sm font-manrope font-medium hover:text-brand-yellow transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                          {item.label}
                        </Link>
                        <div className="ml-6 space-y-0.5">
                          {item.submenu.map((subitem, subindex) => (
                            <Link
                              key={subindex}
                              href={subitem.href}
                              className="block py-2 px-3 text-sm text-white/40 hover:text-white hover:bg-white/[0.03] rounded-lg font-manrope font-light transition-colors"
                              onClick={() => setSheetOpen(false)}
                            >
                              {subitem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block py-2.5 px-3 text-white/80 hover:text-white hover:bg-white/[0.03] rounded-lg font-manrope text-sm transition-colors"
                        onClick={() => setSheetOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Sheet Footer — WhatsApp */}
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/[0.06] bg-[#0A0A0A]">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366] text-black text-sm font-manrope font-semibold transition-all duration-300 hover:bg-[#20bd5a] group"
                  onClick={() => setSheetOpen(false)}
                >
                  <MessageCircle size={16} className="group-hover:animate-spin-once" />
                  Chat on WhatsApp
                </a>
              </div>
            </SheetContent>
          </Sheet>

          {/* Center-Left: Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image src="/cropped-BEST-IMPRESSIONS-LOGO.png" alt="Best Impressions" width={32} height={32} className="rounded-md transition-transform group-hover:scale-110 duration-300" />
            <span className="font-oswald text-sm tracking-tight text-white uppercase">
              BEST IMPRESSIONS
            </span>
          </Link>

          {/* Right: WhatsApp Icon */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#25D366] hover:bg-[#25D366]/10 rounded-xl transition-colors"
          >
            <MessageCircle size={20} />
          </a>
        </motion.div>
      </nav>

      {/* ═══════════════════════════════════════════════
          DESKTOP NAVBAR — Floating Island (unchanged)
      ═══════════════════════════════════════════════ */}
      <nav className="hidden lg:block fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95vw] max-w-5xl">
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200, delay: 0.2 }}
          className="flex items-center justify-between px-5 py-3 rounded-full bg-black/60 backdrop-blur-2xl border border-white/[0.08] shadow-2xl shadow-black/40"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image src="/cropped-BEST-IMPRESSIONS-LOGO.png" alt="Best Impressions" width={36} height={36} className="rounded-lg transition-transform group-hover:scale-110 duration-300" />
            <span className="font-oswald text-base tracking-tight text-white uppercase">
              BEST IMPRESSIONS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-1">
            {navItems.map((item, index) => {
              if (item.submenu) {
                return (
                  <DropdownMenu key={index}>
                    <DropdownMenuTrigger asChild>
                      <motion.button
                        className="px-3 py-1.5 text-sm font-manrope font-light text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/[0.05] cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {item.label}
                      </motion.button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-black/90 backdrop-blur-2xl border-white/10 rounded-xl mt-2">
                      {/* Link to full category page */}
                      <DropdownMenuItem asChild>
                        <Link
                          href={item.href}
                          className="cursor-pointer text-brand-yellow hover:text-brand-yellow font-manrope font-medium text-sm hover:bg-white/[0.05]"
                        >
                          View All {item.label} →
                        </Link>
                      </DropdownMenuItem>
                      <div className="h-[1px] bg-white/[0.06] my-1" />
                      {item.submenu.map((subitem, subindex) => (
                        <DropdownMenuItem key={subindex} asChild>
                          <Link
                            href={subitem.href}
                            className="cursor-pointer text-white/70 hover:text-white font-manrope font-light text-sm hover:bg-white/[0.05]"
                          >
                            {subitem.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )
              }
              return (
                <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href={item.href}
                    className="px-3 py-1.5 text-sm font-manrope font-light text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/[0.05]"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#25D366]/40 text-white text-xs font-manrope transition-all duration-300 hover:bg-[#25D366] hover:text-black hover:border-[#25D366] group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle size={14} className="group-hover:animate-spin-once" />
              <span>WhatsApp</span>
            </motion.a>
          </div>
        </motion.div>
      </nav>

      {/* Spacer */}
      <div className="h-16 lg:h-20" />
    </>
  )
}
