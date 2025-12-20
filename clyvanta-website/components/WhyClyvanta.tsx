'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function WhyClyvanta() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const differentiators = [
    {
      title: 'Selective Focus',
      description: 'We specialize in complex enterprise challenges—AI integration, platform consolidation, legacy modernization. Not everything for everyone.',
    },
    {
      title: 'Measurable Results',
      description: '60% reduction in manual processing. 80% less support overhead. If we can\'t measure it, we don\'t build it.',
    },
    {
      title: 'You Own It',
      description: 'We transfer knowledge, document decisions, and train your team. Build capability, not dependency.',
    },
    {
      title: 'Security First',
      description: 'Enterprise-grade security practices from day one. GDPR, HIPAA, SOC 2 compliant. Your data protected at every layer.',
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
    <section id="why-clyvanta" ref={ref} className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Clyvanta
          </h2>
        </motion.div>

        {/* Differentiators Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 lg:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
