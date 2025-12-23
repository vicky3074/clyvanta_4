import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true, // set to false if you want fresh data
  apiVersion: '2024-01-01',
})

export interface LegalPage {
  _id: string
  title: string
  slug: {
    current: string
  }
  content: any[] // Portable Text content
  lastUpdated: string
}

export async function getLegalPage(slug: string): Promise<LegalPage | null> {
  const query = `*[_type == "legalPage" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    content,
    lastUpdated
  }`

  try {
    const page = await client.fetch(query, { slug })
    return page
  } catch (error) {
    console.error('Error fetching legal page:', error)
    return null
  }
}
