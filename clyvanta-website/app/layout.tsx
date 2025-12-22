import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Clyvanta - Strategic Technology Consultancy',
  description: 'Enterprise AI, Strategic Software, and Digital Transformation services for mid-market and enterprise companies.',
  icons: {
    icon: '/images/logo-square.png',
    apple: '/images/logo-square.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo-square.png" />
        {/* CookieYes Cookie Consent Banner */}
        <script
          id="cookieyes"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/a900971ae185298bc6253a21fac1c9b4/script.js"
        />
      </head>
      <body className={`${inter.variable} ${manrope.variable} font-sans`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q97BH5E9XE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q97BH5E9XE');
          `}
        </Script>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
