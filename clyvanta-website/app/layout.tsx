import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

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
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
