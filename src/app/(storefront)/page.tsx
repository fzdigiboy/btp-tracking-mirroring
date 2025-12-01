import { PuckRender } from '@/components/PuckRender'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getPageByHandle } from '@/lib/puck-pages'
// import { getFeaturedProducts } from '@/lib/products'
import { generatePageMetadata, generatePageJsonLd } from '@/lib/seo'
import { seoConfig } from '@/lib/seo-config'

// Enable ISR for dynamic multi-tenant pages
export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageByHandle({ handle: 'home' })

  return generatePageMetadata({
    pageKey: 'home',
    title: page?.title,
    description: page?.description!,
    url: seoConfig.siteUrl,
  })
}

export default async function HomePage() {
  const page = await getPageByHandle({ handle: 'home' })

  if (!page) return notFound()

  const featuredProducts: any[] = []

  const structuredData = generatePageJsonLd({
    title: page.title,
    description: page.description || seoConfig.defaultDescription,
    url: seoConfig.siteUrl,
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PuckRender
        data={page.page}
        metadata={{
          featuredProducts,
        }}
      />
    </>
  )
}
