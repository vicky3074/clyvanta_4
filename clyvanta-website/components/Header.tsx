'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    // Check if we're on the homepage
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Navigate to homepage with hash
      window.location.href = `/#${sectionId}`
    }
  }

  const navLinks = [
    { name: 'Capabilities', id: 'capabilities' },
    { name: 'How We Work', id: 'how-we-work' },
    { name: 'Who We Help', id: 'who-we-help' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 md:pt-6">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Glass Morphism Container with Gradient Border */}
        <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-blue-500/30 via-purple-500/20 to-orange-500/30">
          <div
            className={`backdrop-blur-xl bg-slate-800/60 rounded-2xl transition-all duration-300 ${
              isScrolled
                ? 'shadow-2xl shadow-blue-500/10'
                : 'shadow-xl shadow-blue-500/5'
            }`}
          >
            <div className="flex items-center justify-between h-16 lg:h-20 px-4 md:px-8">
              {/* Logo */}
              <a
                href="/"
                className="flex items-center hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-lg"
              >
                <img
                  src="/images/logo-header.png"
                  alt="Clyvanta"
                  className="h-9 md:h-11 w-auto"
                />
              </a>

              {/* Desktop Navigation - Centered */}
              <nav className="hidden md:flex items-center space-x-10 font-sans">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/90 hover:text-white transition-colors text-base font-semibold relative group py-2 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transition-all group-hover:w-full"></span>
                  </button>
                ))}
              </nav>

              {/* CTA Button - Desktop */}
              <a
                href="/contact"
                className="hidden md:block bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 text-white px-7 py-3 rounded-lg font-semibold hover:from-orange-600 hover:via-red-500 hover:to-orange-500 transition-all hover:shadow-lg hover:shadow-orange-500/40 text-base font-sans focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Contact Us
              </a>

              {/* Mobile CTA Button */}
              <a
                href="/contact"
                className="md:hidden bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 text-white px-5 py-3 rounded-lg font-semibold hover:from-orange-600 hover:via-red-500 hover:to-orange-500 transition-all text-sm font-sans focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
