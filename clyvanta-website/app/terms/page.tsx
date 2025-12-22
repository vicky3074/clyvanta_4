import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TermsOfService() {
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
            Terms of Service
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-blue-200 mb-8">
              Last updated: December 19, 2024
            </p>

            <section className="mb-8">
              <h2 className="heading-card text-white mb-4">Agreement to Terms</h2>
              <p className="text-body text-blue-100 mb-4">
                By accessing and using the Clyvanta website, you agree to be bound by these Terms
                of Service and all applicable laws and regulations. If you do not agree with any of
                these terms, you are prohibited from using this site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="heading-card text-white mb-4">Use of Website</h2>
              <p className="text-body text-blue-100 mb-4">
                This website is provided for informational purposes about Clyvanta's strategic
                technology consultancy services. You may use this website for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-blue-100 space-y-2 mb-4">
                <li>Learning about our services and capabilities</li>
                <li>Contacting us for consultation inquiries</li>
                <li>Reviewing case studies and service information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="heading-card text-white mb-4">Intellectual Property</h2>
              <p className="text-body text-blue-100 mb-4">
                The content, design, graphics, and other materials on this website are owned by or
                licensed to Clyvanta Inc. and are protected by copyright and other intellectual
                property laws. You may not reproduce, distribute, or create derivative works from
                this content without express written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="heading-card text-white mb-4">Professional Services</h2>
              <p className="text-body text-blue-100 mb-4">
                Information about our services on this website is for general informational purposes
                only and does not constitute a binding offer or contract. All professional
                engagements are subject to separate written agreements that outline the specific
                scope, terms, and conditions of work.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="heading-card text-white mb-4">Disclaimer of Warranties</h2>
              <p className="text-body text-blue-100 mb-4">
                This website and its content are provided "as is" without warranties of any kind,
                either express or implied. While we strive to keep information accurate and
                up-to-date, we make no representations or warranties about the completeness,
                accuracy, or reliability of any information on this site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="heading-card text-white mb-4">Limitation of Liability</h2>
              <p className="text-body text-blue-100 mb-4">
                Clyvanta Inc. shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages resulting from your use or inability to use this
                website, even if we have been advised of the possibility of such damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="heading-card text-white mb-4">Modifications to Terms</h2>
              <p className="text-body text-blue-100 mb-4">
                We reserve the right to modify these Terms of Service at any time. Changes will be
                effective immediately upon posting to this website. Your continued use of the
                website after any changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="heading-card text-white mb-4">Governing Law</h2>
              <p className="text-body text-blue-100 mb-4">
                These Terms of Service are governed by and construed in accordance with the laws of
                the Province of Ontario, Canada, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="heading-card text-white mb-4">Contact Information</h2>
              <p className="text-body text-blue-100 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <p className="text-blue-100">
                Clyvanta Inc.
                <br />
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
