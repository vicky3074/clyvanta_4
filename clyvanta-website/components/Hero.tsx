'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const pillars = [
    {
      icon: '🤖',
      title: 'Data & AI',
      description: 'Transform workflows with production-ready intelligence.',
    },
    {
      icon: '🔧',
      title: 'Product & Cloud',
      description: 'Custom software that becomes your competitive edge.',
    },
    {
      icon: '☁️',
      title: 'Digital Transformation',
      description: 'Scale with future-ready cloud solutions.',
    },
  ]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-24 md:py-32 lg:py-40"
      style={{ backgroundColor: '#4f46e5' }}
    >
      {/* Background Pattern - Subtle */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-20 md:mb-24"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Enterprise Systems That Ship.
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We architect AI systems, consolidate platforms, and modernize infrastructure for enterprise companies.
          </p>

          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-clyvanta-orange text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
          >
            <span>Start Strategy Call</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.button>
        </motion.div>

        {/* Three Pillars - No boxes, with dividers */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className={`py-6 ${index !== 2 ? 'md:border-r border-white/20' : ''} ${index === 0 ? 'md:pr-8 lg:pr-12' : index === 1 ? 'md:px-8 lg:px-12' : 'md:pl-8 lg:pl-12'}`}
            >
              <h3 className="text-xl md:text-2xl font-bold text-clyvanta-blue-cyan mb-4 flex items-center gap-2">
                {pillar.title}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </h3>
              <p className="text-blue-100 text-base md:text-lg leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
