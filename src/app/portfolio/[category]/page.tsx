import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getCategoryData, getRelatedCategories } from '@/lib/portfolio-data'
import { CaseStudyPage } from '@/components/portfolio/case-study-page'

// ---------------------------------------------------------------------------
// Next.js App Router — Server Component
// Generates dynamic SEO metadata per category slug.
// The interactive client UI is delegated to <CaseStudyPage />.
// ---------------------------------------------------------------------------

interface PageProps {
  params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params
  const data = getCategoryData(category)

  if (!data) {
    return {
      title: 'Réalisation | KOINONOS',
      description: 'Page de réalisation KOINONOS.',
    }
  }

  // Default to French for metadata (primary market)
  const seoFr = data.seo.fr

  return {
    title: seoFr.title,
    description: seoFr.description,
    keywords: seoFr.keywords,
    alternates: {
      canonical: `/portfolio/${category}`,
    },
    openGraph: {
      title: seoFr.title,
      description: seoFr.description,
      url: `/portfolio/${category}`,
      siteName: 'KOINONOS',
      images: [
        {
          url: data.heroImage,
          width: 1200,
          height: 630,
          alt: data.title.fr,
        },
      ],
      locale: 'fr_CD',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seoFr.title,
      description: seoFr.description,
      images: [data.heroImage],
    },
    other: {
      // Schema.org structured data as a JSON-LD string (injected via script tag below)
      'schema:type': 'CreativeWork',
    },
  }
}

export async function generateStaticParams() {
  return [
    { category: 'security' },
    { category: 'network' },
    { category: 'dev' },
    { category: 'training' },
  ]
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params
  const data = getCategoryData(category)

  if (!data) {
    notFound()
  }

  const relatedCategories = getRelatedCategories(category)

  // Schema.org structured data for SEO
  const schemaOrgData = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: data.title.fr,
    description: data.shortDescription.fr,
    provider: {
      '@type': 'Organization',
      name: 'KOINONOS',
      url: 'https://groupkoinonos.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kinshasa',
        addressCountry: 'CD',
      },
    },
    locationCreated: {
      '@type': 'Place',
      name: 'République Démocratique du Congo',
    },
    keywords: data.seo.fr.keywords.join(', '),
    url: `https://groupkoinonos.com/portfolio/${category}`,
    image: `https://groupkoinonos.com${data.heroImage}`,
  }

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgData) }}
      />
      {/* Client-side page with all interactive sections */}
      <CaseStudyPage data={data} relatedCategories={relatedCategories} />
    </>
  )
}
