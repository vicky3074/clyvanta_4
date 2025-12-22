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
    <form onSubmit={handleSubmit} className="space-y-6">
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
        <label htmlFor="name" className="block text-base font-semibold text-white mb-3">
          Full Name <span className="text-orange-400">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 text-white rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all placeholder:text-slate-500 text-base"
          placeholder="John Doe"
        />
      </div>

      {/* Email and Phone */}
      <div className={compact ? 'space-y-6' : 'grid md:grid-cols-2 gap-6'}>
        <div>
          <label htmlFor="email" className="block text-base font-semibold text-white mb-3">
            Email Address <span className="text-orange-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 text-white rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all placeholder:text-slate-500 text-base"
            placeholder="john@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-base font-semibold text-white mb-3">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 text-white rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all placeholder:text-slate-500 text-base"
            placeholder="+1 (647) 490-9955"
          />
        </div>
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-base font-semibold text-white mb-3">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 text-white rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all placeholder:text-slate-500 text-base"
          placeholder="Company Name"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-base font-semibold text-white mb-3">
          Tell us about your project <span className="text-orange-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={compact ? 5 : 8}
          className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 text-white rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all resize-none placeholder:text-slate-500 text-base"
          placeholder="Describe your challenge or project in detail..."
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 text-white px-8 py-5 rounded-xl text-lg font-bold hover:from-orange-600 hover:via-red-500 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-orange-500/50 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-900 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none transform hover:scale-[1.02]"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-3">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </button>
      </div>

      {/* Success Message */}
      {isSubmitted && (
        <div className="p-5 bg-green-900/30 border-2 border-green-500/50 rounded-xl text-green-300 flex items-center gap-3 animate-fade-in">
          <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-semibold">Message sent successfully! We'll get back to you soon.</span>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="p-5 bg-red-900/30 border-2 border-red-500/50 rounded-xl text-red-300 flex items-center gap-3 animate-fade-in">
          <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-semibold">{error}</span>
        </div>
      )}
    </form>
  )
}
