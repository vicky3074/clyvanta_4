'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function Capabilities() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const capabilities = [
    {
      title: 'Data & AI',
      description:
        'We architect production-ready AI systems that integrate with your existing infrastructure. Not proof-of-concepts that sit on a shelf—systems that process real transactions, make real decisions, and deliver measurable results.',
      gradient: 'from-orange-600/90 via-amber-600/80 to-yellow-500/70',
      accentColor: 'from-orange-400 to-amber-300',
      image: '/images/data-ai.png',
    },
    {
      title: 'Product & Cloud',
      description:
        'We build custom software and AI-powered SaaS products that become mission-critical business infrastructure. Platform consolidation. Custom integrations between disparate systems. Turn your idea into scalable revenue.',
      gradient: 'from-blue-700/90 via-blue-600/80 to-cyan-500/70',
      accentColor: 'from-blue-400 to-cyan-300',
      image: '/images/product-cloud.png',
    },
    {
      title: 'Digital Transformation',
      description:
        'We modernize legacy systems or build your first proper software to replace Excel spreadsheets and manual processes. Whether you\'re running on decades-old infrastructure or managing everything in spreadsheets—we build systems without disrupting your business.',
      gradient: 'from-emerald-600/90 via-teal-600/80 to-cyan-500/70',
      accentColor: 'from-emerald-400 to-teal-300',
      image: '/images/digital-transformation.png',
    },
  ]

  return (
    <section ref={ref} id="capabilities" className="relative py-12 md:py-16 overflow-hidden" style={{ backgroundColor: '#4f46e5' }}>
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12 md:mb-16"
        >
          Our Capabilities
        </motion.h2>

        {/* Compact Alternating Layout with Images */}
        <div className="space-y-6 md:space-y-8">
          {capabilities.map((capability, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -3 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                {/* Compact Card with Abstract Design */}
                <div className={`relative bg-gradient-to-br ${capability.gradient} backdrop-blur-sm min-h-[200px] md:min-h-[220px] flex items-center transition-all duration-500 group-hover:shadow-2xl`}>

                  {/* Subtle Abstract Background Elements */}
                  <div className="absolute inset-0 overflow-hidden">
                    {/* Gradient Orbs - Reduced */}
                    <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${capability.accentColor} rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    <div className={`absolute -bottom-16 -left-16 w-48 h-48 bg-gradient-to-tr ${capability.accentColor} rounded-full blur-2xl opacity-15 group-hover:opacity-25 transition-opacity duration-500`}></div>

                    {/* Grid Pattern Overlay */}
                    <div className="absolute inset-0 opacity-5" style={{
                      backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
                      backgroundSize: '50px 50px'
                    }}></div>
                  </div>

                  {/* Content Grid - Alternating Layout */}
                  <div className="relative z-10 w-full grid md:grid-cols-12 gap-0 items-center">
                    {isEven ? (
                      <>
                        {/* Image Left */}
                        <div className="md:col-span-4 relative h-[200px] md:h-[220px]">
                          <Image
                            src={capability.image}
                            alt={capability.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70"></div>
                          <div className="absolute inset-0 flex items-center justify-center p-6">
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center leading-tight">
                              {capability.title}
                            </h3>
                          </div>
                        </div>

                        {/* Text Right */}
                        <div className="md:col-span-8 p-6 md:p-8 lg:p-10">
                          <p className="text-base md:text-lg text-white/90 leading-relaxed">
                            {capability.description}
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Text Left */}
                        <div className="md:col-span-8 p-6 md:p-8 lg:p-10 order-2 md:order-1">
                          <p className="text-base md:text-lg text-white/90 leading-relaxed">
                            {capability.description}
                          </p>
                        </div>

                        {/* Image Right */}
                        <div className="md:col-span-4 relative h-[200px] md:h-[220px] order-1 md:order-2">
                          <Image
                            src={capability.image}
                            alt={capability.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70"></div>
                          <div className="absolute inset-0 flex items-center justify-center p-6">
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center leading-tight">
                              {capability.title}
                            </h3>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
