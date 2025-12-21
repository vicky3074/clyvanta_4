'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function WhoWeHelp() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const audiences = [
    {
      name: 'Emerging & Mid-Market Companies',
      description: 'Building enterprise systems and AI foundations that scale',
      accentColor: 'from-orange-400 to-amber-300',
    },
    {
      name: 'Enterprises',
      description: 'Modernizing infrastructure and scaling AI-driven platforms',
      accentColor: 'from-blue-400 to-cyan-300',
    },
    {
      name: 'Product & Tech Teams',
      description: 'Building AI-powered SaaS products and exploring new revenue streams',
      accentColor: 'from-emerald-400 to-teal-300',
    },
  ]

  return (
    <section id="who-we-help" ref={ref} className="relative py-20 md:py-32 overflow-hidden" style={{ backgroundColor: '#1f2937' }}>
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Who We Help
          </h2>
        </motion.div>

        {/* Simple 3-Column Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 md:gap-12"
        >
          {audiences.map((audience, index) => (
            <div key={index} className="text-center">
              {/* Accent line */}
              <div className="mb-4 flex justify-center">
                <div className={`w-16 h-1 bg-gradient-to-r ${audience.accentColor} rounded-full`}></div>
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                {audience.name}
              </h3>
              <p className="text-base text-white/70 leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
