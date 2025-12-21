'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function HowWeWork() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="how-we-work"
      ref={ref}
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
      style={{ backgroundColor: '#4f46e5' }}
    >
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Left Column - Text Content (3/5 width) */}
          <div className="md:col-span-3">
            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight"
            >
              Every Project is Unique. Our Approach Adapts.
            </motion.h2>

            {/* Main Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl leading-relaxed text-blue-100"
            >
              Enterprise AI systems and platform consolidation don&apos;t follow
              cookie-cutter playbooks. Each project brings unique technical
              constraints, evolving requirements, and shifting market conditions. We
              don&apos;t force a rigid methodology—we adapt our proven framework to
              your reality.
            </motion.p>
          </div>

          {/* Right Column - Visual Space (2/5 width) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-2 hidden md:block relative"
          >
            <Image
              src="/images/ai-brain.jpg"
              alt="AI and Data"
              width={500}
              height={500}
              className="rounded-lg opacity-90 shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
