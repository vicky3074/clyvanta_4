'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ValueProposition() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-16 md:py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: '#1f2937' }}>
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              We Build Systems That Actually Ship.
            </h2>
          </motion.div>

          {/* Right Column - Supporting Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              We optimize for "will this work in production?"—not "how fast can we ship?" Our systems integrate with your existing infrastructure and deliver measurable results from day one.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-gray-400">
              The numbers prove why this matters: only <strong className="text-clyvanta-blue-cyan">16% of projects deliver on time</strong> (Standish Group). Most run <strong className="text-clyvanta-blue-cyan">45% over budget</strong> and deliver <strong className="text-clyvanta-blue-cyan">56% less value</strong> (McKinsey).
            </p>

            <p className="text-lg md:text-xl font-semibold text-clyvanta-blue-cyan">
              We're in the 16% that actually ship.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
