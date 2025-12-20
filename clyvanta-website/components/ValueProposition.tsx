'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ValueProposition() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-32 md:py-40 lg:py-48 bg-gradient-to-b from-clyvanta-blue-dark via-blue-800 to-gray-900">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          {/* Main Narrative - No heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="space-y-12 md:space-y-16 text-white"
          >
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-white font-light">
              We optimize for "will this work in production?"—not "how fast can we ship?"
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-blue-100 max-w-4xl mx-auto">
              The numbers prove why this matters: only <strong className="text-clyvanta-blue-cyan">16% of projects deliver on time</strong> (Standish Group). Most run <strong className="text-clyvanta-blue-cyan">45% over budget</strong> and deliver <strong className="text-clyvanta-blue-cyan">56% less value</strong> (McKinsey).
            </p>

            <p className="text-xl md:text-2xl font-semibold text-clyvanta-blue-cyan">
              We're in the 16% that actually ship.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
