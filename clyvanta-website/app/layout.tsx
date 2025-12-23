import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import Script from 'next/script'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { headers } from 'next/headers'

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
  title: 'Enterprise AI & Digital Transformation | Clyvanta',
  description: 'Production-ready AI systems, cloud infrastructure, and digital transformation for mid-market and enterprise companies. Expert consultancy in Data & AI, Product & Cloud, and Strategic Software.',
  icons: {
    icon: '/images/logo-square.png',
    apple: '/images/logo-square.png',
  },
  openGraph: {
    title: 'Clyvanta - Production-Ready AI, Cloud & Digital Transformation',
    description: 'We build enterprise systems that deliver results. Data & AI solutions, custom product & cloud platforms, and digital transformation that actually works.',
    url: 'https://www.clyvanta.com',
    siteName: 'Clyvanta',
    images: [
      {
        url: '/images/logo-square.png',
        width: 800,
        height: 800,
        alt: 'Clyvanta - Production-Ready AI, Cloud & Digital Transformation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clyvanta - Production-Ready AI, Cloud & Digital Transformation',
    description: 'We build enterprise systems that deliver results. Data & AI solutions, custom product & cloud platforms, and digital transformation that actually works.',
    images: ['/images/logo-square.png'],
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = await headers()
  const pathname = headersList.get('x-pathname') || ''
  const isStudioRoute = pathname.startsWith('/studio')

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo-square.png" />
        {/* CookieYes Cookie Consent Banner */}
        <script
          id="cookieyes"
          type="text/javascript"
          src={`https://cdn-cookieyes.com/client_data/${process.env.NEXT_PUBLIC_COOKIEYES_CLIENT_ID}/script.js`}
        />
      </head>
      <body className={`${inter.variable} ${manrope.variable} font-sans`}>
        {!isStudioRoute && (
          <>
            {/* Google Analytics */}
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
              `}
            </Script>
            <Header />
          </>
        )}

        {children}

        {!isStudioRoute && (
          <>
            <Footer />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  )
}
