'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      title: 'Enterprise AI & Intelligent Systems',
      description:
        'We architect production-ready AI systems that integrate with your existing infrastructure. Not proof-of-concepts that sit on a shelf—systems that process real transactions, make real decisions, and deliver measurable results.',
      features: [
        'AI strategy and system architecture for regulated industries',
        'Intelligent automation that reduces manual processing by 40-60%',
        'LLM integration for customer service, compliance, and analytics',
        'Data pipelines and MLOps infrastructure for continuous improvement',
      ],
      outcome:
        'Built intelligent automation system for property management operations, reducing manual processing time by 60% while improving data accuracy across 50+ building portfolio.',
      icon: '🤖', // Placeholder - will be replaced with custom SVG
    },
    {
      title: 'Strategic Enterprise Software',
      description:
        'We build custom software that becomes mission-critical business infrastructure. Platform consolidation. Custom integrations between disparate systems. Internal tools that solve complex operational challenges and drive measurable efficiency gains.',
      features: [
        'Custom enterprise applications (web, mobile, cloud-native)',
        'Platform consolidation—replacing multiple fragmented systems with unified solutions',
        'Enterprise system integration (CRM, ERP, legacy platforms, third-party APIs)',
        'SaaS products with analytics and intelligent automation',
      ],
      outcome:
        'Built unified property management platform consolidating five separate vendor systems, reducing support overhead by 80% and eliminating data synchronization errors across 50+ building portfolio.',
      icon: '🔧', // Placeholder - will be replaced with custom SVG
    },
    {
      title: 'Digital Transformation & Modernization',
      description:
        "We modernize legacy systems without breaking what's working. Incremental migration strategies. Cloud-native re-architecture. Integration of modern capabilities with decades-old infrastructure.",
      features: [
        'Legacy system modernization (mainframe to cloud, monolith to microservices)',
        'Cloud architecture design and migration (AWS, Azure, GCP)',
        'Process automation reducing manual workflows by 40-60%',
        'Integration of AI/ML capabilities into existing enterprise applications',
      ],
      outcome:
        'Migrated banking operations from legacy infrastructure to cloud-native architecture, enabling 10x scaling capacity while reducing infrastructure costs by 35%.',
      icon: '☁️', // Placeholder - will be replaced with custom SVG
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How We Work With You
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon Placeholder */}
              <div className="text-5xl mb-6">{service.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <p className="font-semibold text-gray-900 mb-3">What we deliver:</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <svg
                        className="w-5 h-5 text-clyvanta-blue-dark mr-2 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome */}
              <div className="pt-6 border-t border-gray-200">
                <p className="font-semibold text-gray-900 mb-2">Real outcome:</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.outcome}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
