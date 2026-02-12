'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { MagneticButton } from '@/components/magnetic-button'
import { ConciergeModal } from '@/components/concierge-modal'
import { getProductById, products } from '@/lib/products'
import { ProductCard } from '@/components/product-card'
import { ArrowLeft, Check, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ProductPage() {
  const params = useParams()
  const productId = params.id as string
  const product = getProductById(productId)

  const [quantity, setQuantity] = useState('1')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeImage, setActiveImage] = useState(0)

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-oswald text-4xl text-white uppercase tracking-tight mb-4">
              Product Not Found
            </h1>
            <Link href="/">
              <MagneticButton className="px-8 py-3 bg-brand-yellow text-black font-manrope font-semibold rounded-full cursor-pointer">
                Back to Home
              </MagneticButton>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  // Generate gallery images (using the same image with different crops for now)
  const galleryImages = [
    product.image,
    product.image.replace('fit=crop', 'fit=crop&q=80'),
    product.image.replace('w=600', 'w=800'),
  ]

  // Related products from same category
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/40 hover:text-brand-yellow text-xs uppercase tracking-widest font-manrope transition-colors mb-10"
            >
              <ArrowLeft size={14} />
              Back to Home
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* ─── Left: Image Gallery ─── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {/* Main Image */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.06]">
                <Image
                  src={galleryImages[activeImage]}
                  alt={product.name}
                  fill
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-all duration-700"
                />
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-2">
                {galleryImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative aspect-square rounded-xl overflow-hidden border transition-all duration-300 cursor-pointer ${activeImage === i
                        ? 'border-brand-yellow/50 shadow-lg shadow-brand-yellow/10'
                        : 'border-white/[0.06] hover:border-white/20'
                      }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} view ${i + 1}`}
                      fill
                      sizes="150px"
                      className={`object-cover transition-all duration-500 ${activeImage === i ? '' : 'grayscale hover:grayscale-0'
                        }`}
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* ─── Right: Details (Sticky) ─── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:sticky lg:top-28 lg:self-start space-y-8"
            >
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                  <span className="text-xs uppercase tracking-widest text-brand-gray font-manrope">
                    {product.categoryLabel}
                  </span>
                </div>
                <h1
                  className="font-oswald text-white uppercase tracking-tight leading-none"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
                >
                  {product.name}
                </h1>
                <p className="text-white/40 font-manrope font-light text-sm leading-relaxed">
                  {product.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="font-oswald text-4xl text-white">₹{product.price}</span>
                  <span className="text-white/30 font-manrope text-sm">/unit</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 border-y border-white/[0.06] py-6">
                <h3 className="text-xs uppercase tracking-widest text-brand-gray font-manrope mb-4">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {product.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      className="flex items-center gap-3 text-white/60 font-manrope font-light text-sm"
                    >
                      <Check size={14} className="text-brand-yellow flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Order Section */}
              <div className="glass-panel rounded-2xl p-6 space-y-5">
                <h3 className="text-xs uppercase tracking-widest text-brand-gray font-manrope">
                  Place Your Order
                </h3>

                {/* Quantity */}
                <div className="space-y-2">
                  <label className="block text-xs text-white/50 font-manrope">Quantity</label>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white font-manrope text-sm focus:outline-none focus:border-brand-yellow/30 transition-colors"
                  />
                </div>

                <p className="text-[11px] text-white/30 font-manrope leading-relaxed">
                  Click below to open a concierge request. You can share your logo, design files, and customization requirements. We'll provide a personalized quote within minutes.
                </p>
              </div>

              {/* ─── THE MAGNETIC "REQUEST" BUTTON ─── */}
              <MagneticButton
                onClick={() => setIsModalOpen(true)}
                className="w-full group flex items-center justify-center gap-3 py-4 px-8 border border-[#25D366]/40 text-white font-manrope font-semibold text-base rounded-full hover:bg-[#25D366] hover:text-black hover:border-[#25D366] transition-all duration-300 cursor-pointer"
                strength={15}
              >
                <MessageCircle size={20} className="group-hover:animate-spin-once" />
                <span>REQUEST THIS ITEM</span>
              </MagneticButton>

              <p className="text-center text-white/20 text-[11px] font-manrope">
                We'll respond within minutes with a personalized quote
              </p>
            </motion.div>
          </div>

          {/* ─── Related Products ─── */}
          {relatedProducts.length > 0 && (
            <div className="mt-24 pt-16 border-t border-white/[0.06]">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[1px] bg-brand-yellow" />
                <span className="text-xs uppercase tracking-[0.3em] text-brand-gray font-manrope">
                  Related
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedProducts.map((p, i) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <ProductCard product={p} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />

      {/* Concierge Modal */}
      <ConciergeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={product.name}
        productPrice={product.price}
        quantity={quantity}
      />
    </div>
  )
}
