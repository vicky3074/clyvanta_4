'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Capabilities() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const capabilities = [
    {
      title: 'Data & AI',
      description:
        'We architect production-ready AI systems that integrate with your existing infrastructure. Not proof-of-concepts that sit on a shelf—systems that process real transactions, make real decisions, and deliver measurable results.',
      align: 'left',
    },
    {
      title: 'Product & Cloud',
      description:
        'We build custom software and AI-powered SaaS products that become mission-critical business infrastructure. Platform consolidation. Custom integrations between disparate systems. Turn your idea into scalable revenue.',
      align: 'right',
    },
    {
      title: 'Digital Transformation',
      description:
        'We modernize legacy systems or build your first proper software to replace Excel spreadsheets and manual processes. Whether you\'re running on decades-old infrastructure or managing everything in spreadsheets—we build systems without disrupting your business.',
      align: 'left',
    },
  ]

  return (
    <section ref={ref} className="bg-white">
      {/* Section Heading */}
      <div className="py-16 md:py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Our Capabilities
        </motion.h2>
      </div>

      {/* Capability Bands */}
      <div>
        {capabilities.map((capability, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`py-20 md:py-32 ${
              index % 2 === 0 ? 'bg-blue-50/50' : 'bg-purple-50/30'
            }`}
          >
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
              <div
                className={`${
                  capability.align === 'right'
                    ? 'md:ml-auto md:text-right'
                    : ''
                } max-w-4xl`}
              >
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-clyvanta-blue-dark mb-6">
                  {capability.title}
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl">
                  {capability.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
