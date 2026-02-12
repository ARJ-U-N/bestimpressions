'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { getCategoryDetail, getProductsByCategory } from '@/lib/products'
import { MagneticButton } from '@/components/magnetic-button'
import { motion } from 'framer-motion'
import { ArrowLeft, MessageCircle } from 'lucide-react'

export default function CategoryPage() {
    const params = useParams()
    const slug = params.slug as string
    const category = getCategoryDetail(slug)
    const categoryProducts = getProductsByCategory(slug)

    if (!category) {
        return (
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="font-oswald text-4xl text-white uppercase tracking-tight mb-4">
                            Category Not Found
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

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1">
                {/* ═══════════════════════════════════════════════
            SECTION 1: Category Hero + Description
        ═══════════════════════════════════════════════ */}
                <section className="relative">
                    {/* Hero Image */}
                    <div className="relative h-[40vh] sm:h-[50vh] overflow-hidden">
                        <Image
                            src={category.image}
                            alt={category.title}
                            fill
                            sizes="100vw"
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[#020202]" />

                        {/* Title overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end px-4 sm:px-6 lg:px-8 pb-12">
                            <div className="max-w-7xl mx-auto w-full">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="mb-6"
                                >
                                    <Link
                                        href="/"
                                        className="inline-flex items-center gap-2 text-white/40 hover:text-brand-yellow text-xs uppercase tracking-widest font-manrope transition-colors"
                                    >
                                        <ArrowLeft size={14} />
                                        Back to Home
                                    </Link>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-8 h-[1px] bg-brand-yellow" />
                                        <span className="text-xs uppercase tracking-[0.3em] text-brand-yellow font-manrope">
                                            {category.subtitle}
                                        </span>
                                    </div>
                                    <h1
                                        className="font-oswald text-white uppercase tracking-tight leading-none"
                                        style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
                                    >
                                        {category.title}
                                    </h1>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Description Text */}
                    <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="space-y-5"
                            >
                                {category.description.map((paragraph, i) => (
                                    <p
                                        key={i}
                                        className="text-white/50 font-manrope font-light text-sm sm:text-base leading-relaxed"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </motion.div>

                            {/* Enquiry CTA */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="mt-8 flex flex-col sm:flex-row gap-4"
                            >
                                <MagneticButton
                                    as="a"
                                    href="https://wa.me/919946666255"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#25D366]/40 text-white font-manrope font-medium text-sm rounded-full hover:bg-[#25D366] hover:text-black hover:border-[#25D366] transition-all duration-300 group cursor-pointer"
                                    strength={10}
                                >
                                    <MessageCircle size={16} className="group-hover:animate-spin-once" />
                                    Enquire About {category.title}
                                </MagneticButton>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════
            SECTION 2: Product Grid
        ═══════════════════════════════════════════════ */}
                <section className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="max-w-7xl mx-auto">
                        {/* Section Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="mb-10 border-t border-white/[0.06] pt-12"
                        >
                            <div className="flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-8 h-[1px] bg-brand-yellow" />
                                        <span className="text-xs uppercase tracking-[0.3em] text-brand-gray font-manrope">
                                            Products
                                        </span>
                                    </div>
                                    <h2 className="font-oswald text-2xl sm:text-3xl text-white uppercase tracking-tight">
                                        All {category.title}
                                    </h2>
                                </div>
                                <span className="text-xs text-white/30 font-manrope">
                                    {categoryProducts.length} product{categoryProducts.length !== 1 ? 's' : ''}
                                </span>
                            </div>
                        </motion.div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {categoryProducts.map((product, i) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-50px' }}
                                    transition={{ delay: i * 0.08, duration: 0.5 }}
                                >
                                    <ProductCard product={product} showActions />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
