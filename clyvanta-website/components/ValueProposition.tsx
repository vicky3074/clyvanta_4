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
            <h2 className="heading-display text-white max-w-[600px]">
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
            <p className="text-intro text-blue-100 leading-[1.8]">
              We design and deliver secure, production-grade platforms that integrate seamlessly with complex, existing environments and support mission-critical operations.
            </p>

            <p className="text-body text-blue-100/80 leading-[1.9]">
              Industry research shows that many IT initiatives are delivered late, exceed budget, or fail to meet scope and value expectations. McKinsey reports that, on average, IT projects run <strong className="text-clyvanta-blue-cyan">45% over budget</strong>, deliver <strong className="text-clyvanta-blue-cyan">56% less value than expected</strong>, and <strong className="text-clyvanta-blue-cyan">84% fail to fully deliver</strong> what was promised.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
