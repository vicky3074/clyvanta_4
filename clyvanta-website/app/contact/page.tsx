import Image from 'next/image'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-orange-600/5"></div>
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 section-large pt-32 md:pt-40">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="heading-display text-white mb-6">
            Contact Clyvanta
          </h1>
          <p className="text-intro text-blue-100 max-w-2xl mx-auto">
            Tell us about your project, and we'll help you figure out the right next step.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left Column - Context + Contact Info (2/5 width) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Context Section */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Let's Talk About Your Project
              </h2>
              <p className="text-blue-100 mb-4 leading-relaxed">
                We work with teams to design and deliver production-ready software, AI systems, and cloud infrastructure.
              </p>
              <p className="text-blue-200 text-sm mb-6 leading-relaxed">
                Use this form to reach out if you're:
              </p>
              <ul className="space-y-2 text-blue-100 text-sm mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Exploring a new product or platform</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Modernizing an existing system</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Evaluating AI or cloud architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Looking for a long-term technical partner</span>
                </li>
              </ul>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {/* Email */}
              <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-4 border border-white/5 hover:border-orange-500/20 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-orange-400/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-blue-300 mb-0.5">Email</p>
                    <a
                      href="mailto:hello@clyvanta.com"
                      className="text-white hover:text-orange-400 transition-colors text-sm font-medium focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-950 focus:outline-none rounded"
                    >
                      hello@clyvanta.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-4 border border-white/5 hover:border-orange-500/20 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-orange-400/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-blue-300 mb-0.5">Phone</p>
                    <a
                      href="tel:+16474909955"
                      className="text-white hover:text-orange-400 transition-colors text-sm font-medium focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-950 focus:outline-none rounded"
                    >
                      +1 (647) 490-9955
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-4 border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-orange-400/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-blue-300 mb-0.5">Location</p>
                    <p className="text-white text-sm font-medium">Toronto, Canada</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-4 border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-orange-400/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-blue-300 mb-1">Follow Us</p>
                    <div className="flex items-center gap-3">
                      <a
                        href="https://www.linkedin.com/company/clyvant-tech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-950 rounded"
                        aria-label="Follow us on LinkedIn"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a
                        href="https://x.com/Clyvanta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-950 rounded"
                        aria-label="Follow us on X"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form (3/5 width) */}
          <div className="lg:col-span-3">
            <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-8 md:p-10 shadow-2xl border border-white/10">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Send Us a Message
                </h2>
                <p className="text-blue-100 text-base">
                  Share a few details below. The more context you provide, the better we can help.
                </p>
              </div>
              <ContactForm />

              {/* Trust Message */}
              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-sm text-blue-200 text-center leading-relaxed">
                  We'll review your message and respond within 1 business day.<br />
                  No obligation. No sales pressure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
