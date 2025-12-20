'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Industries() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const industries = [
    {
      name: 'Financial Services',
      description: 'Fraud detection, payment processing, regulatory compliance, core banking integration',
      icon: '💰',
    },
    {
      name: 'Healthcare',
      description: 'HIPAA-compliant systems, patient portals, claims processing, provider workflow automation',
      icon: '🏥',
    },
    {
      name: 'Property Management',
      description: 'Operations platforms, tenant portals, IoT integration, portfolio management',
      icon: '🏢',
    },
    {
      name: 'Logistics & Operations',
      description: 'Field service management, inventory optimization, route planning, real-time tracking',
      icon: '🚚',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            We've Built Systems For
          </h2>
        </motion.div>

        {/* Industries Grid - 2x2 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center md:text-left"
            >
              <div className="text-5xl mb-4">{industry.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{industry.name}</h3>
              <p className="text-gray-700 leading-relaxed">{industry.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
