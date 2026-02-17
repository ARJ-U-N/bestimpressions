'use client'

import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { products } from '@/lib/products'
import { MagneticButton } from '@/components/magnetic-button'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowDown, MessageCircle, Shield, Zap, Package } from 'lucide-react'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['700', '900'],
})

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80])

  // Get featured products — one from each core category
  const featuredProducts = [
    products.find((p) => p.id === 'employee-id-cards'),
    products.find((p) => p.id === 'business-booster-cards'),
    products.find((p) => p.id === 'magic-mugs'),
    products.find((p) => p.id === 't-shirt-jerseys'),
  ].filter(Boolean) as typeof products

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ═══════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <motion.div style={{ opacity, y: heroY }} className="text-center relative z-10 max-w-5xl mx-auto">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1
              className={`${roboto.className} uppercase tracking-tight leading-tight text-white text-[2.5rem] md:text-[clamp(3rem,8vw,7rem)]`}
            >
              <span className="block md:inline">KERALA&apos;S FASTEST PREMIUM</span>{' '}
              <span className="block md:inline"><span className="text-brand-yellow">ID CARD</span> &amp; <span className="text-brand-yellow">BRANDING</span></span>{' '}
              <span className="block md:inline">SOLUTIONS</span>
            </h1>
          </motion.div>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-8 text-white/50 font-sans font-light text-base sm:text-lg max-w-2xl mx-auto tracking-wide leading-relaxed"
          >
            We deliver UV printing + engraving under one roof.{' '}
            <span className="text-white/70 font-medium">Zero Hassle. 100% On-Time.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <MagneticButton
              as="a"
              href="#collections"
              className="inline-flex items-center gap-2 px-10 py-4 bg-brand-yellow text-black font-heading font-bold text-sm sm:text-base uppercase tracking-wider rounded-full hover:bg-yellow-300 transition-colors duration-300 cursor-pointer"
            >
              Explore Products
              <ArrowDown size={18} />
            </MagneticButton>

            <MagneticButton
              as="a"
              href="https://wa.me/919946666255"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#25D366]/40 text-white font-sans font-light text-sm rounded-full hover:bg-[#25D366] hover:text-black hover:border-[#25D366] transition-all duration-300 group cursor-pointer"
            >
              <MessageCircle size={16} className="group-hover:animate-spin-once" />
              Chat on WhatsApp
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 rounded-full bg-brand-yellow" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════
          BENTO GRID — COLLECTIONS
      ═══════════════════════════════════════════════ */}
      <section id="collections" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-brand-yellow" />
              <span className="text-xs uppercase tracking-[0.3em] text-brand-gray font-sans">
                Collections
              </span>
            </div>
            <h2
              className="font-heading text-white uppercase tracking-wide leading-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              Our Core Offerings
            </h2>
          </motion.div>

          {/* Bento Grid — Updated to client's 4 core categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px] sm:auto-rows-[220px]">
            {[
              {
                title: 'Identity Cards',
                description: 'Employee, Student & RFID',
                link: '/category/id-cards',
                image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=600&fit=crop',
                span: 'col-span-2 row-span-2',
              },
              {
                title: 'Metal NFC Cards',
                description: 'Premium Business Cards',
                link: '/category/pvc-cards',
                image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
                span: 'col-span-1 row-span-1',
              },
              {
                title: 'Merchandise',
                description: 'Mugs, Bottles & T-Shirts',
                link: '/category/mugs',
                image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=400&fit=crop',
                span: 'col-span-1 row-span-1',
              },
              {
                title: 'Corporate Gifting',
                description: 'Welcome Kits & Engraved Pens',
                link: '/category/merch',
                image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop',
                span: 'col-span-2 row-span-1',
              },
            ].map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={category.span}
              >
                <Link href={category.link} className="block h-full group">
                  <div className="relative h-full rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.06] hover:border-brand-yellow/30 transition-all duration-700">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover transition-all duration-[2000ms] grayscale group-hover:grayscale-0 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-end p-5 sm:p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                        <span className="text-[10px] uppercase tracking-widest text-white/50 font-sans">
                          {category.description}
                        </span>
                      </div>
                      <h3 className="font-heading text-xl sm:text-2xl text-white uppercase tracking-wide group-hover:text-brand-yellow transition-colors duration-500">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          THE BEST IMPRESSIONS ADVANTAGE
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-brand-yellow" />
              <span className="text-xs uppercase tracking-[0.3em] text-brand-gray font-sans">
                Why Us
              </span>
            </div>
            <h2
              className="font-heading text-white uppercase tracking-wide leading-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              The Best Impressions <span className="text-brand-yellow">Advantage</span>
            </h2>
          </motion.div>

          {/* 3-Column USP Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: Shield,
                title: 'Premium Quality',
                description: 'Accurate colors and premium finishing guaranteed.',
              },
              {
                icon: Zap,
                title: 'Fastest Turnaround',
                description: 'We solve the biggest market issue: unreliable vendors. We deliver on time, every time.',
              },
              {
                icon: Package,
                title: 'One-Stop Partner',
                description: 'Design → Print → Engraving → Sorting → Delivery. No coordination with multiple vendors needed.',
              },
            ].map((usp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-brand-yellow/30 transition-all duration-700"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-brand-yellow/10 flex items-center justify-center mb-6 group-hover:bg-brand-yellow/20 transition-colors duration-500">
                  <usp.icon size={24} className="text-brand-yellow" />
                </div>
                <h3 className="font-heading text-xl text-white uppercase tracking-wide mb-3">
                  {usp.title}
                </h3>
                <p className="text-sm text-white/40 font-sans font-light leading-relaxed">
                  {usp.description}
                </p>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-brand-yellow/0 group-hover:bg-brand-yellow/40 transition-all duration-700 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FEATURED PRODUCTS
      ═══════════════════════════════════════════════ */}
      <section id="featured" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-brand-yellow" />
              <span className="text-xs uppercase tracking-[0.3em] text-brand-gray font-sans">
                Featured
              </span>
            </div>
            <h2
              className="font-heading text-white uppercase tracking-wide leading-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              Handpicked For You
            </h2>
          </motion.div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          {/* View All */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/40 hover:text-brand-yellow font-sans transition-colors duration-300"
            >
              <span className="w-6 h-[1px] bg-current" />
              View All Products
              <span className="w-6 h-[1px] bg-current" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CTA — WHATSAPP CONCIERGE
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/[0.03] via-transparent to-transparent" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-yellow/30 to-transparent" />

            <div className="relative glass-panel rounded-3xl p-10 sm:p-16 text-center border-none">
              <h2
                className="font-heading text-white uppercase tracking-wide leading-tight mb-4"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
              >
                Ready to Make a <span className="text-brand-yellow">Great Impression</span>?
              </h2>
              <p className="text-white/40 font-sans font-light text-sm sm:text-base max-w-lg mx-auto mb-10">
                Connect with us on WhatsApp to discuss your requirements and get a personalized quote within minutes.
              </p>

              <MagneticButton
                as="a"
                href="https://wa.me/919946666255"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 border border-[#25D366]/50 text-white font-sans font-semibold text-base rounded-full hover:bg-[#25D366] hover:text-black hover:border-[#25D366] transition-all duration-300 group cursor-pointer"
                strength={15}
              >
                <MessageCircle size={20} className="group-hover:animate-spin-once" />
                Chat on WhatsApp Now
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
