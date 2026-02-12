'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle, Send } from 'lucide-react'
import { MagneticButton } from './magnetic-button'

interface ConciergeModalProps {
    isOpen: boolean
    onClose: () => void
    productName: string
    productPrice: number
    quantity?: string
}

export function ConciergeModal({
    isOpen,
    onClose,
    productName,
    productPrice,
    quantity = '1',
}: ConciergeModalProps) {
    const [notes, setNotes] = useState('')

    const handleSendToWhatsApp = () => {
        const message = `Hi, I'd like to request: *${productName}*\n\nQuantity: ${quantity}\nBudget Reference: ₹${productPrice}/unit\n${notes ? `\nCustomization Notes:\n${notes}` : ''}\n\nPlease share availability and final pricing.`
        const whatsappUrl = `https://wa.me/919946666255?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, '_blank')
        onClose()
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 40 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90vw] max-w-lg"
                    >
                        <div className="glass-panel rounded-2xl p-8 relative border border-white/10">
                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>

                            {/* Header */}
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-brand-yellow" />
                                    <span className="text-xs uppercase tracking-widest text-brand-gray font-manrope">
                                        Concierge Request
                                    </span>
                                </div>
                                <h3 className="font-oswald text-2xl text-white uppercase tracking-tight">
                                    {productName}
                                </h3>
                                <p className="text-brand-gray text-sm mt-1 font-manrope">
                                    Starting from ₹{productPrice}/unit
                                </p>
                            </div>

                            {/* Notes */}
                            <div className="mb-8">
                                <label className="block text-xs uppercase tracking-widest text-brand-gray mb-3 font-manrope">
                                    Customization Notes{' '}
                                    <span className="text-white/20">(optional)</span>
                                </label>
                                <textarea
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                    placeholder="Logo files, specific colors, quantity breakdown, deadline..."
                                    className="w-full h-28 bg-white/[0.03] border border-white/10 rounded-xl p-4 text-white placeholder:text-white/20 font-manrope font-light text-sm resize-none focus:outline-none focus:border-brand-yellow/30 transition-colors"
                                />
                            </div>

                            {/* Send Button */}
                            <MagneticButton
                                onClick={handleSendToWhatsApp}
                                className="w-full group flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-black font-manrope font-semibold text-base py-4 rounded-xl transition-all duration-300 cursor-pointer"
                                strength={10}
                            >
                                <MessageCircle
                                    size={20}
                                    className="group-hover:animate-spin-once"
                                />
                                <span>Send to WhatsApp</span>
                                <Send size={16} className="opacity-60" />
                            </MagneticButton>

                            <p className="text-center text-white/20 text-xs mt-4 font-manrope">
                                We typically respond within 5 minutes during business hours
                            </p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
