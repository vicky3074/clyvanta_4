import Link from 'next/link'
import { getLegalPage } from '@/lib/sanity'
import PortableText from '@/components/PortableText'

export default async function PrivacyPolicy() {
  const page = await getLegalPage('privacy-policy')

  if (!page) {
    return (
      <main className="min-h-screen bg-slate-950 pt-32 pb-20 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="heading-display text-white mb-8">Privacy Policy</h1>
          <p className="text-gray-300">Content not found. Please check back later.</p>
        </div>
      </main>
    )
  }

  const lastUpdated = new Date(page.lastUpdated).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <main className="min-h-screen bg-slate-950 pt-32 pb-20 relative overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="heading-display text-white mb-8">
          {page.title}
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-blue-200 mb-8 font-sans">
            Last updated: {lastUpdated}
          </p>

          <PortableText value={page.content} />
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
