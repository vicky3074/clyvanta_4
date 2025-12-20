import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Last updated: December 19, 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you contact us through our website, we collect the information you provide,
                including your name, email address, phone number, company name, and any message or
                project details you share with us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information you provide to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Respond to your inquiries and consultation requests</li>
                <li>Understand your project requirements and technical challenges</li>
                <li>Communicate with you about potential engagements</li>
                <li>Provide relevant information about our services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Protection</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We take the security of your data seriously. All form submissions are processed
                securely through Web3Forms, and we do not store your personal information on our
                servers beyond what is necessary for communication purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third
                parties. Your contact information is used solely for the purpose of responding to
                your inquiry and potential business engagement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of any inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of future communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or how we handle your data,
                please contact us:
              </p>
              <p className="text-gray-700">
                Email:{' '}
                <a href="mailto:hello@clyvanta.com" className="text-clyvanta-blue-dark hover:underline">
                  hello@clyvanta.com
                </a>
                <br />
                Phone:{' '}
                <a href="tel:+16474909955" className="text-clyvanta-blue-dark hover:underline">
                  +1 (647) 490-9955
                </a>
              </p>
            </section>
          </div>

          <div className="mt-12">
            <Link
              href="/"
              className="text-clyvanta-blue-dark hover:text-clyvanta-blue-cyan font-semibold inline-flex items-center"
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
