import ContactForm from '@/components/ContactForm'
import Image from 'next/image'

export const metadata = {
  title: 'Contact Us - Clyvanta',
  description: 'Get in touch with Clyvanta for enterprise AI, strategic software, and digital transformation services.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-section-blue py-24 md:py-32 relative overflow-hidden">
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-orange-600/10 animate-pulse"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="heading-display text-white mb-6">
            Let&apos;s Talk About Your Challenge
          </h1>
          <p className="text-intro text-blue-100 max-w-3xl mx-auto">
            Facing complex technology challenges? Our experts are ready to help you build
            production-ready systems that actually ship.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-white/10">
              <h2 className="heading-card text-white mb-6">Get in Touch</h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <a
                      href="mailto:hello@clyvanta.com"
                      className="text-blue-300 hover:text-blue-200 transition-colors"
                    >
                      hello@clyvanta.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Phone</h3>
                    <a
                      href="tel:+16474909955"
                      className="text-blue-300 hover:text-blue-200 transition-colors"
                    >
                      +1 (647) 490-9955
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Location</h3>
                    <p className="text-blue-100">Toronto, Canada</p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Office Hours</h3>
                    <p className="text-blue-100">Monday - Friday</p>
                    <p className="text-blue-100">9:00 AM - 6:00 PM EST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000"
                alt="Modern office workspace"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 md:p-10 shadow-lg border border-white/10">
            <h2 className="heading-card text-white mb-6">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-blue-500/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center border border-blue-400/20">
          <h2 className="heading-subsection text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-intro text-blue-100 max-w-2xl mx-auto">
            Whether you need AI integration, custom software development, or digital transformation consulting,
            our team is here to help you build systems that deliver results.
          </p>
        </div>
      </div>
    </div>
  )
}
