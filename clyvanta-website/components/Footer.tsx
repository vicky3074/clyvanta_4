'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content - 5 Columns with Separators */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6 pb-8 border-b border-gray-800">
          {/* Column 1: Company Info */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="inline-block hover:opacity-80 transition-opacity mb-4">
              <img
                src="/images/logo-header.png"
                alt="Clyvanta"
                className="h-10 w-auto"
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Production-ready AI systems and enterprise software.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#capabilities"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Data & AI
                </Link>
              </li>
              <li>
                <Link
                  href="/#capabilities"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Product & Cloud
                </Link>
              </li>
              <li>
                <Link
                  href="/#capabilities"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Digital Transformation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#how-we-work"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  How We Work
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hello@clyvanta.com"
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+16474909955"
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Phone</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Clyvanta Inc. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Toronto, Canada
          </p>
        </div>
      </div>
    </footer>
  )
}
