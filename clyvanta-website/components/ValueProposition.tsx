'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ValueProposition() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative section-large overflow-hidden bg-section-blue">
      {/* Animated Gradient Overlay - Subtle Accent */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-orange-600/10 animate-pulse"></div>

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Two-column layout like Webstacks */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Left Column - Large Headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow text-blue-200 mb-4">Our Promise</p>
            <h2 className="heading-display text-white" style={{ maxWidth: '600px' }}>
              Systems Built for Your Business Reality.
            </h2>
          </motion.div>

          {/* Right Column - Supporting Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-intro text-blue-100" style={{ lineHeight: '1.8' }}>
              We don't just build software—we deliver secure, reliable solutions that work with your existing operations and drive real business outcomes. No jargon. No abandoned projects. Just technology that makes your business better.
            </p>

            <p className="text-body text-blue-100/80" style={{ lineHeight: '1.9' }}>
              The reality: <strong className="text-clyvanta-blue-cyan">84% of technology projects fail</strong> to deliver what was promised (Standish Group). They run <strong className="text-clyvanta-blue-cyan">45% over budget</strong> and deliver <strong className="text-clyvanta-blue-cyan">56% less value</strong> than expected (McKinsey).
            </p>

            <p className="text-intro font-semibold text-clyvanta-blue-cyan">
              We build systems that succeed.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
