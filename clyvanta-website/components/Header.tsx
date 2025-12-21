'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navLinks = [
    { name: 'Services', id: 'capabilities' },
    { name: 'How We Work', id: 'how-we-work' },
    { name: 'Who We Help', id: 'who-we-help' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 md:pt-6">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div
          className={`bg-white rounded-2xl transition-all duration-300 ${
            isScrolled
              ? 'shadow-lg'
              : 'shadow-md'
          }`}
        >
          <div className="flex items-center justify-between h-16 lg:h-20 px-4 md:px-6">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img
              src="/images/logo.svg"
              alt="Clyvanta"
              className="h-8 md:h-10 w-auto"
            />
          </button>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-700 hover:text-clyvanta-blue-dark transition-colors font-medium text-sm"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-clyvanta-blue-dark transition-colors font-medium text-sm"
            >
              Contact Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-clyvanta-blue-dark text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-900 transition-colors text-sm"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-clyvanta-blue-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden border-t border-gray-200"
            >
              <div className="px-4 md:px-6 py-4 space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block w-full text-left text-gray-700 hover:text-clyvanta-blue-dark transition-colors font-medium py-2 text-sm"
                  >
                    {link.name}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full text-left text-gray-700 hover:text-clyvanta-blue-dark transition-colors font-medium py-2 text-sm"
                >
                  Contact Us
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-clyvanta-blue-dark text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors text-sm"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  )
}
