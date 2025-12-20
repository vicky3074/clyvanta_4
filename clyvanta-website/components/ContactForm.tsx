'use client'

import { useState, FormEvent } from 'react'

interface ContactFormProps {
  compact?: boolean
}

export default function ContactForm({ compact = false }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setIsSubmitted(true)
        // Reset form
        ;(e.target as HTMLFormElement).reset()
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        throw new Error(data.message || 'Something went wrong')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Web3Forms Access Key */}
      <input
        type="hidden"
        name="access_key"
        value="57daab8f-2a1f-419d-952d-22cb97c96213"
      />

      {/* Honeypot for spam protection */}
      <input type="checkbox" name="botcheck" className="hidden" />

      {/* Full Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clyvanta-blue-dark focus:border-transparent outline-none transition"
          placeholder="John Doe"
        />
      </div>

      {/* Email and Phone */}
      <div className={compact ? 'space-y-4' : 'grid md:grid-cols-2 gap-4'}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clyvanta-blue-dark focus:border-transparent outline-none transition"
            placeholder="john@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clyvanta-blue-dark focus:border-transparent outline-none transition"
            placeholder="+1 (647) 490-9955"
          />
        </div>
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clyvanta-blue-dark focus:border-transparent outline-none transition"
          placeholder="Company Name"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Tell us about your project *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={compact ? 3 : 5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clyvanta-blue-dark focus:border-transparent outline-none transition resize-none"
          placeholder="Describe your challenge or project..."
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-clyvanta-orange text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>

      {/* Success Message */}
      {isSubmitted && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
          ✓ Message sent successfully! We'll get back to you soon.
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
          ✗ {error}
        </div>
      )}
    </form>
  )
}
