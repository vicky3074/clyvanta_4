import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-section-blue pt-32 pb-20 relative overflow-hidden">
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

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="heading-display text-white mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-blue-200 mb-8">
              Last updated: December 19, 2024
            </p>

            <section className="mb-8">
              <h2 className="heading-card text-white mb-4">Information We Collect</h2>
              <p className="text-body text-blue-100 mb-4">
                When you contact us through our website, we collect the information you provide,
                including your name, email address, phone number, company name, and any message or
                project details you share with us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="heading-card text-white mb-4">How We Use Your Information</h2>
              <p className="text-body text-blue-100 mb-4">
                We use the information you provide to:
              </p>
              <ul className="list-disc pl-6 text-blue-100 space-y-2 mb-4">
                <li>Respond to your inquiries and consultation requests</li>
                <li>Understand your project requirements and technical challenges</li>
                <li>Communicate with you about potential engagements</li>
                <li>Provide relevant information about our services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="heading-card text-white mb-4">Data Protection</h2>
              <p className="text-body text-blue-100 mb-4">
                We take the security of your data seriously. All form submissions are processed
                securely through Web3Forms, and we do not store your personal information on our
                servers beyond what is necessary for communication purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="heading-card text-white mb-4">Information Sharing</h2>
              <p className="text-body text-blue-100 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third
                parties. Your contact information is used solely for the purpose of responding to
                your inquiry and potential business engagement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="heading-card text-white mb-4">Your Rights</h2>
              <p className="text-body text-blue-100 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-blue-100 space-y-2 mb-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of any inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of future communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="heading-card text-white mb-4">Contact Us</h2>
              <p className="text-body text-blue-100 mb-4">
                If you have any questions about this Privacy Policy or how we handle your data,
                please contact us:
              </p>
              <p className="text-blue-100">
                Email:{' '}
                <a href="mailto:hello@clyvanta.com" className="text-blue-300 hover:text-blue-200 transition-colors">
                  hello@clyvanta.com
                </a>
                <br />
                Phone:{' '}
                <a href="tel:+16474909955" className="text-blue-300 hover:text-blue-200 transition-colors">
                  +1 (647) 490-9955
                </a>
              </p>
            </section>
          </div>

          <div className="mt-12">
            <Link
              href="/"
              className="text-blue-300 hover:text-blue-200 font-semibold inline-flex items-center transition-colors"
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
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
