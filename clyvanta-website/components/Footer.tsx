'use client'

import Link from 'next/link'

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <img
              src="/images/logo-1.svg"
              alt="Clyvanta"
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-400 leading-relaxed">
              Strategic Technology Consultancy
            </p>
            <p className="text-gray-400 mt-2">
              Toronto, Canada
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wide text-sm">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-clyvanta-blue-cyan transition-colors text-sm"
                >
                  Enterprise AI & Intelligent Systems
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-clyvanta-blue-cyan transition-colors text-sm"
                >
                  Strategic Enterprise Software
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-clyvanta-blue-cyan transition-colors text-sm"
                >
                  Digital Transformation
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wide text-sm">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('how-we-work')}
                  className="text-gray-400 hover:text-clyvanta-blue-cyan transition-colors text-sm"
                >
                  How We Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('why-clyvanta')}
                  className="text-gray-400 hover:text-clyvanta-blue-cyan transition-colors text-sm"
                >
                  Why Clyvanta
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-clyvanta-blue-cyan transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wide text-sm">
              Contact
            </h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href="mailto:hello@clyvanta.com"
                  className="text-gray-400 hover:text-clyvanta-blue-cyan transition-colors text-sm"
                >
                  hello@clyvanta.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+16474909955"
                  className="text-gray-400 hover:text-clyvanta-blue-cyan transition-colors text-sm"
                >
                  +1 (647) 490-9955
                </a>
              </li>
            </ul>

            <h3 className="text-white font-semibold mb-4 uppercase tracking-wide text-sm">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-clyvanta-blue-cyan transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-clyvanta-blue-cyan transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 pt-8 pb-8">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-30 grayscale">
            <div className="text-sm font-semibold text-gray-500">McKinsey</div>
            <div className="text-sm font-semibold text-gray-500">Standish Group</div>
            <div className="text-sm font-semibold text-gray-500">BCG</div>
            <div className="text-sm font-semibold text-gray-500">Harvard Business Review</div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Clyvanta Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
