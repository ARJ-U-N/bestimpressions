'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { MagneticButton } from '@/components/magnetic-button'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 3000)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-brand-yellow" />
              <span className="text-xs uppercase tracking-[0.3em] text-brand-gray font-manrope">
                Contact
              </span>
            </div>
            <h1
              className="font-oswald text-white uppercase tracking-tight leading-none mb-4"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
            >
              Get in <span className="text-brand-yellow">Touch</span>
            </h1>
            <p className="text-white/40 font-manrope font-light text-sm sm:text-base max-w-lg">
              Have questions? We'd love to hear from you. Reach out to us anytime.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-8"
            >
              <h2 className="font-oswald text-xl text-white uppercase tracking-tight">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { label: 'Name', type: 'text', key: 'name', placeholder: 'Your name' },
                  { label: 'Email', type: 'email', key: 'email', placeholder: 'your.email@example.com' },
                  { label: 'Phone', type: 'tel', key: 'phone', placeholder: '+91 99466 66255' },
                ].map((field) => (
                  <div key={field.key} className="space-y-2">
                    <label className="block text-xs uppercase tracking-widest text-brand-gray font-manrope">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.key as keyof typeof formData]}
                      onChange={(e) =>
                        setFormData({ ...formData, [field.key]: e.target.value })
                      }
                      required={field.key !== 'phone'}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 font-manrope font-light text-sm focus:outline-none focus:border-brand-yellow/30 transition-colors"
                    />
                  </div>
                ))}

                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-widest text-brand-gray font-manrope">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us more about your requirements..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="w-full h-32 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 font-manrope font-light text-sm resize-none focus:outline-none focus:border-brand-yellow/30 transition-colors"
                  />
                </div>

                <MagneticButton
                  onClick={() => { }}
                  className="w-full py-3.5 bg-white text-black font-manrope font-semibold text-sm rounded-full hover:bg-brand-yellow transition-colors duration-300 cursor-pointer"
                  strength={10}
                >
                  {submitted ? '✓ Message Sent!' : 'Send Message'}
                </MagneticButton>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-sm font-manrope"
                  >
                    Thank you for your message! We'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <h2 className="font-oswald text-xl text-white uppercase tracking-tight">
                Contact Information
              </h2>

              <div className="space-y-4">
                {[
                  {
                    icon: MapPin,
                    title: 'Address',
                    content: 'Best Impressions, Kochi\nKerala, India',
                    color: 'bg-brand-yellow/10 text-brand-yellow',
                  },
                  {
                    icon: Phone,
                    title: 'Phone',
                    content: '+91 99466 66255',
                    sub: 'Mon-Fri, 9am-6pm IST',
                    href: 'tel:+919946666255',
                    color: 'bg-brand-yellow/10 text-brand-yellow',
                  },
                  {
                    icon: Mail,
                    title: 'Email',
                    content: 'info@bestimpressions.com',
                    sub: "We'll respond within 24 hours",
                    href: 'mailto:info@bestimpressions.com',
                    color: 'bg-brand-yellow/10 text-brand-yellow',
                  },
                  {
                    icon: MessageCircle,
                    title: 'WhatsApp',
                    content: 'Chat with us',
                    sub: 'Instant messaging support',
                    href: 'https://wa.me/919946666255',
                    color: 'bg-[#25D366]/10 text-[#25D366]',
                    external: true,
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="glass-panel rounded-2xl p-6 hover:border-white/10 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                        <item.icon size={18} />
                      </div>
                      <div>
                        <h3 className="font-oswald text-sm text-white uppercase tracking-wider mb-1">
                          {item.title}
                        </h3>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.external ? '_blank' : undefined}
                            rel={item.external ? 'noopener noreferrer' : undefined}
                            className="text-white/60 hover:text-brand-yellow text-sm font-manrope font-light transition-colors"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-white/60 text-sm font-manrope font-light whitespace-pre-line">
                            {item.content}
                          </p>
                        )}
                        {item.sub && (
                          <p className="text-white/20 text-xs font-manrope mt-1">{item.sub}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="glass-panel rounded-2xl overflow-hidden h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={24} className="mx-auto mb-2 text-brand-yellow/30" />
                  <p className="text-white/20 text-xs font-manrope">Google Maps</p>
                  <p className="text-white/10 text-[10px] font-manrope mt-1">
                    Replace with actual embed
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <div className="mt-24 pt-16 border-t border-white/[0.06]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[1px] bg-brand-yellow" />
                <span className="text-xs uppercase tracking-[0.3em] text-brand-gray font-manrope">
                  FAQ
                </span>
              </div>
              <h2
                className="font-oswald text-white uppercase tracking-tight leading-none"
                style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
              >
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  q: 'What is the minimum order quantity?',
                  a: 'We accept orders of any quantity. Whether you need 10 or 10,000 units, we have flexible pricing for all volumes.',
                },
                {
                  q: 'How long does delivery take?',
                  a: 'Standard delivery takes 5-7 business days. Express delivery options are available for urgent orders.',
                },
                {
                  q: 'Do you offer design services?',
                  a: 'Yes! Our design team can help create custom designs. Consultation is free for all orders.',
                },
                {
                  q: 'What payment methods do you accept?',
                  a: 'We accept bank transfers, online payments, and cash on delivery for local orders. WhatsApp quotes included.',
                },
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass-panel rounded-2xl p-6 hover:border-white/10 transition-all duration-300"
                >
                  <h3 className="font-oswald text-sm text-white uppercase tracking-wider mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-white/40 text-sm font-manrope font-light leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
