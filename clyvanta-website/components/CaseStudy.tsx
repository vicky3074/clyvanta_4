'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CaseStudy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const metrics = [
    {
      value: '80%',
      label: 'reduction in support tickets',
    },
    {
      value: '5→1',
      label: 'Single unified platform replacing five vendor relationships',
    },
    {
      value: '100%',
      label: 'Real-time synchronization eliminating data entry errors',
    },
    {
      value: '$200K',
      label: 'annual savings in administrative overhead',
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Platform Consolidation for Multi-Site Operations
          </h2>
        </motion.div>

        {/* Case Study Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          {/* The Challenge */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              A property management company was operating five separate software systems—one for
              resident payments, one for maintenance requests, one for amenity booking, one for
              package tracking, and one for communications. Each system had its own login, its own
              support burden, and constant data synchronization issues.
            </p>
          </div>

          {/* Our Solution */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              We built a unified platform that integrated all functionality under one roof. The new
              system connected to their existing enterprise systems (Salesforce, SAP) via API,
              pulling real-time data while presenting a single, seamless interface for residents and
              staff.
            </p>
          </div>
        </motion.div>

        {/* Impact Metrics - 2x2 Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">The Impact</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-clyvanta-blue-dark to-clyvanta-blue-cyan p-8 rounded-xl text-center text-white shadow-lg"
              >
                <div className="text-4xl md:text-5xl font-bold mb-3">{metric.value}</div>
                <div className="text-lg text-blue-100">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
