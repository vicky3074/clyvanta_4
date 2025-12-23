'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const pillars = [
    {
      icon: '🤖',
      title: 'Data & AI',
      description: 'Transform workflows with production-ready intelligence.',
      targetId: 'data-ai',
    },
    {
      icon: '🔧',
      title: 'Product & Cloud',
      description: 'Custom software that becomes your competitive edge.',
      targetId: 'product-cloud',
    },
    {
      icon: '☁️',
      title: 'Digital Transformation',
      description: 'Scale with future-ready cloud solutions.',
      targetId: 'digital-transformation',
    },
  ]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden section-hero bg-section-blue pt-32 md:pt-40"
    >
      {/* Animated Gradient Overlay - Subtle Accent */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-orange-600/10 animate-pulse"></div>

      {/* Background Pattern - More Subtle */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16 md:mb-20"
        >
          <h1 className="heading-display text-white mb-6">
            We Build Enterprise Systems That Deliver Results.
          </h1>
          <p className="text-hero text-blue-100 mb-8 max-w-3xl mx-auto">
            Solutions that go live, integrate seamlessly, and deliver measurable results from day one.
          </p>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-orange-600 hover:via-red-500 hover:to-orange-500 transition-all shadow-lg hover:shadow-xl hover:shadow-orange-500/50 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-950 focus:outline-none inline-flex items-center space-x-2"
            >
              <span>Contact Us</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.button>
          </Link>
        </motion.div>

        {/* Three Pillars - Horizontal on Desktop, Vertical on Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          {pillars.map((pillar, index) => (
            <motion.button
              key={index}
              onClick={() => scrollToSection(pillar.targetId)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group text-left cursor-pointer pb-6 border-b md:border-b-0 md:border-r border-white/20 last:border-r-0 last:border-b-0 hover:border-white/40 transition-all md:pr-6 md:last:pr-0 focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-slate-950 focus:outline-none rounded-lg focus:p-4"
            >
              <h3 className="heading-card text-white mb-2 flex items-center gap-2">
                {pillar.title}
                <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </h3>
              <p className="text-body text-blue-100/70">
                {pillar.description}
              </p>
            </motion.button>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
