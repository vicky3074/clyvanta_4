'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function WhoWeHelp() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const audiences = [
    {
      name: 'Emerging & mid-market companies',
      description: 'Building enterprise systems and AI foundations that scale',
    },
    {
      name: 'Enterprises',
      description: 'Modernizing infrastructure and scaling AI-driven platforms',
    },
    {
      name: 'Product & tech teams',
      description: 'Building AI-powered SaaS products and exploring new revenue streams',
    },
  ]

  return (
    <section id="who-we-help" ref={ref} className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Who We Help
          </h2>
        </motion.div>

        {/* Horizontal Single Row Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-12 lg:gap-16"
        >
          {audiences.map((audience, index) => (
            <div key={index} className="flex-1 text-center max-w-xs">
              <div className="mb-4">
                <span className="inline-block w-12 h-1 bg-clyvanta-blue-cyan rounded-full"></span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                {audience.name}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
