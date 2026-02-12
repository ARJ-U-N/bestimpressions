'use client'

import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { products, categories, getProductsByCategory } from '@/lib/products'
import { MagneticButton } from '@/components/magnetic-button'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowDown, MessageCircle } from 'lucide-react'

// Hero words for kinetic typography
const heroWords = ['BRAND.', 'YOUR.', 'IDENTITY.']

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  // Parallax transforms for hero text spreading
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 0])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 80])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Get featured products — one from each category
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
          KINETIC HERO SECTION
      ═══════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <motion.div style={{ opacity }} className="text-center relative z-10">
          {/* Stacked kinetic typography */}
          <div className="space-y-0 leading-none">
            {heroWords.map((word, i) => (
              <motion.div
                key={word}
                initial={{ opacity: 0, y: 60, rotateX: 40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  delay: 0.4 + i * 0.15,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ y: i === 0 ? y1 : i === 1 ? y2 : y3 }}
              >
                <h1
                  className={`font-oswald uppercase tracking-tightest leading-[0.85] ${i === 2
                    ? 'text-brand-yellow'
                    : 'text-white'
                    }`}
                  style={{ fontSize: 'clamp(3rem, 12vw, 14rem)' }}
                >
                  {word}
                </h1>
              </motion.div>
            ))}
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-8 text-white/40 font-manrope font-light text-sm sm:text-base max-w-md mx-auto tracking-wide"
          >
            Premium printing solutions for corporate professionals and creative minds.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <MagneticButton
              as="a"
              href="#collections"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-black font-manrope font-semibold text-sm rounded-full hover:bg-brand-yellow transition-colors duration-300 cursor-pointer"
            >
              Explore Collections
              <ArrowDown size={16} />
            </MagneticButton>

            <MagneticButton
              as="a"
              href="https://wa.me/919946666255"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#25D366]/40 text-white font-manrope font-light text-sm rounded-full hover:bg-[#25D366] hover:text-black hover:border-[#25D366] transition-all duration-300 group cursor-pointer"
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
              <span className="text-xs uppercase tracking-[0.3em] text-brand-gray font-manrope">
                Collections
              </span>
            </div>
            <h2
              className="font-oswald text-white uppercase tracking-tight leading-none"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              Our Collections
            </h2>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px] sm:auto-rows-[220px]">
            {[
              {
                title: 'Identity Cards',
                description: 'Professional ID solutions',
                link: '/product/employee-id-cards',
                image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=600&fit=crop',
                span: 'col-span-2 row-span-2',
              },
              {
                title: 'PVC Cards',
                description: 'Business & membership',
                link: '/product/business-booster-cards',
                image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
                span: 'col-span-1 row-span-1',
              },
              {
                title: 'Mug Printing',
                description: 'Custom printed mugs',
                link: '/product/magic-mugs',
                image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=400&fit=crop',
                span: 'col-span-1 row-span-1',
              },
              {
                title: 'Merchandise',
                description: 'T-shirts, badges & more',
                link: '/product/t-shirt-jerseys',
                image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop',
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
                        <span className="text-[10px] uppercase tracking-widest text-white/50 font-manrope">
                          {category.description}
                        </span>
                      </div>
                      <h3 className="font-oswald text-xl sm:text-2xl text-white uppercase tracking-tight group-hover:text-brand-yellow transition-colors duration-500">
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
              <span className="text-xs uppercase tracking-[0.3em] text-brand-gray font-manrope">
                Featured
              </span>
            </div>
            <h2
              className="font-oswald text-white uppercase tracking-tight leading-none"
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
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/40 hover:text-brand-yellow font-manrope transition-colors duration-300"
            >
              <span className="w-6 h-[1px] bg-current" />
              View All Products
              <span className="w-6 h-[1px] bg-current" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          WHY CHOOSE US
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-brand-yellow" />
              <span className="text-xs uppercase tracking-[0.3em] text-brand-gray font-manrope">
                Why Us
              </span>
            </div>
            <h2
              className="font-oswald text-white uppercase tracking-tight leading-none"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              Why Best Impressions?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                num: '01',
                title: 'Premium Quality',
                description: 'Using the finest materials and latest printing technology for superior results.',
              },
              {
                num: '02',
                title: 'Custom Solutions',
                description: 'Fully customizable designs tailored to your brand and requirements.',
              },
              {
                num: '03',
                title: 'Quick Turnaround',
                description: 'Fast delivery without compromising on quality or attention to detail.',
              },
              {
                num: '04',
                title: 'Expert Team',
                description: 'Experienced professionals ready to guide you through every step.',
              },
              {
                num: '05',
                title: 'Competitive Pricing',
                description: 'Best prices in the market with transparent and flexible payment options.',
              },
              {
                num: '06',
                title: 'Concierge Support',
                description: 'Dedicated WhatsApp support for instant assistance and personalized quotes.',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500"
              >
                <span className="font-oswald text-3xl text-white/[0.06] group-hover:text-brand-yellow/20 transition-colors duration-500">
                  {feature.num}
                </span>
                <h3 className="font-oswald text-lg text-white uppercase tracking-tight mt-4 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/40 font-manrope font-light leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
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
                className="font-oswald text-white uppercase tracking-tight leading-none mb-4"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
              >
                Ready to Make a <span className="text-brand-yellow">Great Impression</span>?
              </h2>
              <p className="text-white/40 font-manrope font-light text-sm sm:text-base max-w-lg mx-auto mb-10">
                Connect with us on WhatsApp to discuss your requirements and get a personalized quote within minutes.
              </p>

              <MagneticButton
                as="a"
                href="https://wa.me/919946666255"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 border border-[#25D366]/50 text-white font-manrope font-semibold text-base rounded-full hover:bg-[#25D366] hover:text-black hover:border-[#25D366] transition-all duration-300 group cursor-pointer"
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
