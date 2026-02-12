'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/lib/products'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

interface ProductCardProps {
  product: Product
  className?: string
  showActions?: boolean
}

export function ProductCard({ product, className = '', showActions = false }: ProductCardProps) {
  const whatsappMessage = `Hi, I'm interested in *${product.name}* (₹${product.price}/unit). Please share details and customization options.`
  const whatsappUrl = `https://wa.me/919946666255?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <motion.div
      className={`group h-full rounded-2xl overflow-hidden bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] transition-all duration-700 hover:border-brand-yellow/40 hover:shadow-lg hover:shadow-brand-yellow/[0.05] ${className}`}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
    >
      {/* Image — Clickable to product page */}
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-all duration-[2000ms] ease-out grayscale group-hover:grayscale-0 group-hover:scale-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Category label */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-widest text-white/70 font-manrope">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
              {product.categoryLabel}
            </span>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <Link href={`/product/${product.id}`} className="block">
          <h3 className="font-oswald text-lg uppercase tracking-tight text-brand-yellow text-center group-hover:text-white transition-colors duration-500">
            {product.name}
          </h3>
        </Link>

        <p className="text-xs text-white/40 font-manrope font-light line-clamp-2 leading-relaxed text-center">
          {product.description}
        </p>

        {/* Price */}
        <div className="text-center py-1">
          <span className="font-oswald text-xl text-white">
            ₹{product.price}
          </span>
          <span className="text-xs text-white/30 font-manrope font-light ml-1">/unit</span>
        </div>

        {/* Action Buttons */}
        {showActions ? (
          <div className="flex gap-2 pt-2 border-t border-white/[0.06]">
            <Link
              href={`/product/${product.id}`}
              className="flex-1 py-2.5 px-4 bg-brand-yellow text-black font-manrope font-semibold text-xs text-center rounded-lg hover:bg-yellow-300 transition-colors duration-300 uppercase tracking-wider"
            >
              Read More
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 bg-[#25D366] text-white font-manrope font-semibold text-xs rounded-lg hover:bg-[#20bd5a] transition-colors duration-300 uppercase tracking-wider group/wa"
            >
              <MessageCircle size={12} className="group-hover/wa:animate-spin-once" />
              WhatsApp
            </a>
          </div>
        ) : (
          <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
            <Link
              href={`/product/${product.id}`}
              className="text-[10px] uppercase tracking-widest text-white/30 font-manrope group-hover:text-brand-yellow/60 transition-colors"
            >
              Explore →
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-[#25D366]/50 font-manrope hover:text-[#25D366] transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <MessageCircle size={10} />
              WhatsApp
            </a>
          </div>
        )}
      </div>

      {/* Hover border glow */}
      <div className="absolute inset-0 rounded-2xl border-2 border-brand-yellow/0 group-hover:border-brand-yellow/20 transition-all duration-700 pointer-events-none" />
    </motion.div>
  )
}
