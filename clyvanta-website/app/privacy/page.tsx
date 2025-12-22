import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-950 pt-32 pb-20 relative overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="heading-display text-white mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-blue-200 mb-8 font-sans">
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
            <ul className="list-disc pl-6 text-blue-100 space-y-2 mb-4 font-sans">
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
            <ul className="list-disc pl-6 text-blue-100 space-y-2 mb-4 font-sans">
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
            <p className="text-blue-100 font-sans">
              Email:{' '}
              <a href="mailto:hello@clyvanta.com" className="text-blue-300 hover:text-orange-400 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-950 rounded">
                hello@clyvanta.com
              </a>
              <br />
              Phone:{' '}
              <a href="tel:+16474909955" className="text-blue-300 hover:text-orange-400 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-950 rounded">
                +1 (647) 490-9955
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link
            href="/"
            className="text-blue-300 hover:text-orange-400 font-semibold font-sans inline-flex items-center transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-950 rounded"
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
  )
}
