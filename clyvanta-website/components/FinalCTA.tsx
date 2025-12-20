'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import ContactForm from './ContactForm'

export default function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" ref={ref} className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Talk About Your Challenge
          </h2>

          <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              If you're facing a complex technology challenge—integrating AI without breaking
              existing systems, consolidating fragmented platforms, or modernizing legacy
              infrastructure—we should talk.
            </p>

            <p className="font-semibold text-gray-900">
              Not a sales call. A strategy conversation.
            </p>

            <p>
              We'll assess your situation, identify the core technical challenge, and outline what it
              would take to solve it. <strong>Your trust is more valuable than any contract.</strong>{' '}
              If we're not the right fit, we'll tell you honestly.
            </p>

            <p>
              Most of our clients come from referrals—they were introduced to us by CTOs and
              engineering leaders who trusted our work. That's the standard we hold ourselves to.
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-50 p-8 md:p-12 rounded-xl shadow-lg"
        >
          <ContactForm />
        </motion.div>

        {/* Alternative Contact Methods */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600 mb-4">Or reach out directly:</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <a
              href="mailto:hello@clyvanta.com"
              className="flex items-center text-clyvanta-blue-dark hover:text-clyvanta-blue-cyan transition-colors font-medium"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              hello@clyvanta.com
            </a>
            <a
              href="tel:+16474909955"
              className="flex items-center text-clyvanta-blue-dark hover:text-clyvanta-blue-cyan transition-colors font-medium"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +1 (647) 490-9955
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
