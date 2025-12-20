import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Last updated: December 19, 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using the Clyvanta website, you agree to be bound by these Terms
                of Service and all applicable laws and regulations. If you do not agree with any of
                these terms, you are prohibited from using this site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of Website</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This website is provided for informational purposes about Clyvanta's strategic
                technology consultancy services. You may use this website for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Learning about our services and capabilities</li>
                <li>Contacting us for consultation inquiries</li>
                <li>Reviewing case studies and service information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The content, design, graphics, and other materials on this website are owned by or
                licensed to Clyvanta Inc. and are protected by copyright and other intellectual
                property laws. You may not reproduce, distribute, or create derivative works from
                this content without express written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Information about our services on this website is for general informational purposes
                only and does not constitute a binding offer or contract. All professional
                engagements are subject to separate written agreements that outline the specific
                scope, terms, and conditions of work.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer of Warranties</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This website and its content are provided "as is" without warranties of any kind,
                either express or implied. While we strive to keep information accurate and
                up-to-date, we make no representations or warranties about the completeness,
                accuracy, or reliability of any information on this site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Clyvanta Inc. shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages resulting from your use or inability to use this
                website, even if we have been advised of the possibility of such damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Modifications to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to modify these Terms of Service at any time. Changes will be
                effective immediately upon posting to this website. Your continued use of the
                website after any changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms of Service are governed by and construed in accordance with the laws of
                the Province of Ontario, Canada, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <p className="text-gray-700">
                Clyvanta Inc.
                <br />
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
