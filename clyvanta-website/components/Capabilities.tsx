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
      id: 'data-ai',
      title: 'Data & AI',
      description:
        'We architect production-ready AI systems that integrate with your existing infrastructure. Not proof-of-concepts that sit on a shelf—systems that process real transactions, make real decisions, and deliver measurable results.',
      image: '/images/capabilities-ai.jpg',
    },
    {
      id: 'product-cloud',
      title: 'Product & Cloud',
      description:
        'We build custom software and AI-powered SaaS products that become mission-critical business infrastructure. Platform consolidation. Custom integrations between disparate systems. Turn your idea into scalable revenue.',
      image: '/images/capabilities-product-new.jpg',
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description:
        'We modernize legacy systems or build your first proper software to replace Excel spreadsheets and manual processes. Whether you\'re running on decades-old infrastructure or managing everything in spreadsheets.',
      image: '/images/capabilities-digital-new.jpg',
    },
  ]

  return (
    <section ref={ref} id="capabilities" className="relative section-large overflow-hidden bg-section-blue">
      {/* Animated Gradient Overlay - Subtle Accent */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-orange-600/10 animate-pulse"></div>

      {/* Background Pattern Overlay - More Subtle */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="eyebrow text-blue-200 mb-4">What We Build</p>
          <h2 className="heading-section text-white mb-4">
            Our Capabilities
          </h2>
          <p className="text-intro text-blue-100 max-w-3xl mx-auto">
            Three ways we deliver systems that ship
          </p>
        </motion.div>

        {/* Alternating Layout with Gradient Fade */}
        <div className="space-y-6 md:space-y-8">
          {capabilities.map((capability, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={capability.id}
                id={capability.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -3 }}
                className="group relative overflow-hidden rounded-2xl scroll-mt-24"
              >
                {/* Unified Dark Card Design */}
                <div className="relative bg-gradient-to-br from-slate-800/95 via-slate-900/95 to-blue-900/95 backdrop-blur-sm transition-all duration-500 group-hover:shadow-2xl">

                  {/* Full Card Overlay with Vignette Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-transparent to-slate-900/40"></div>

                  {/* Edge Gradient Vignette - All 4 Sides */}
                  <div className="absolute inset-0">
                    {/* Top gradient */}
                    <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-slate-900/30 to-transparent"></div>
                    {/* Bottom gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
                    {/* Left gradient */}
                    <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-slate-900/30 to-transparent"></div>
                    {/* Right gradient */}
                    <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-slate-900/30 to-transparent"></div>
                  </div>

                  {/* Subtle Pattern Overlay */}
                  <div className="absolute inset-0 overflow-hidden">
                    {/* Grid Pattern Overlay */}
                    <div className="absolute inset-0 opacity-[0.08]" style={{
                      backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
                      backgroundSize: '50px 50px'
                    }}></div>
                  </div>

                  {/* Content Grid - Alternating Layout with Square Image Support */}
                  <div className="relative z-10 w-full grid md:grid-cols-12 gap-0">
                    {isEven ? (
                      <>
                        {/* Image Left - 4 columns for better square image display */}
                        <div className="md:col-span-4 relative aspect-square md:aspect-auto md:h-full">
                          <div className="relative w-full h-full min-h-[280px] md:min-h-[300px]">
                            <Image
                              src={capability.image}
                              alt={capability.title}
                              fill
                              className="object-cover object-center rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
                              sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            {/* Subtle vignette overlay for better blend */}
                            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-900/40 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"></div>
                          </div>
                        </div>

                        {/* Text Right - 8 columns */}
                        <div className="md:col-span-8 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                          <h3 className="heading-subsection text-white mb-4">
                            {capability.title}
                          </h3>
                          <p className="text-body text-white/90">
                            {capability.description}
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Text Left - 8 columns */}
                        <div className="md:col-span-8 p-6 md:p-8 lg:p-10 order-2 md:order-1 flex flex-col justify-center">
                          <h3 className="heading-subsection text-white mb-4">
                            {capability.title}
                          </h3>
                          <p className="text-body text-white/90">
                            {capability.description}
                          </p>
                        </div>

                        {/* Image Right - 4 columns for better square image display */}
                        <div className="md:col-span-4 relative aspect-square md:aspect-auto md:h-full order-1 md:order-2">
                          <div className="relative w-full h-full min-h-[280px] md:min-h-[300px]">
                            <Image
                              src={capability.image}
                              alt={capability.title}
                              fill
                              className="object-cover object-center rounded-t-2xl md:rounded-r-2xl md:rounded-tl-none"
                              sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            {/* Subtle vignette overlay for better blend */}
                            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-900/40 rounded-t-2xl md:rounded-r-2xl md:rounded-tl-none"></div>
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
