import type { ComponentConfig } from '@measured/puck'
import React from 'react'
import Image from 'next/image'
import { ImagePickerField } from '../components/ImagePickerField'

export type RelatedArticle = {
  title: string
  category: string
  readTime: string
  link: string
  image?: {
    url: string
    alt: string
  }
}

export type RelatedArticlesProps = {
  sectionTitle: string
  articles: RelatedArticle[]
}

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({ sectionTitle, articles }) => {
  return (
    <section className="py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
        {sectionTitle}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <a key={index} href={article.link} className="group">
            <article className="flex flex-col h-full">
              {/* Image */}
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 mb-4 relative">
                {article.image?.url && (
                  <Image
                    src={article.image.url}
                    alt={article.image.alt || article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>

              {/* Category */}
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3">
                {article.category}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3 line-clamp-2">
                {article.title}
              </h3>

              {/* Read Time */}
              <span className="text-sm text-gray-500 dark:text-gray-400 mt-auto">
                {article.readTime} min read
              </span>
            </article>
          </a>
        ))}
      </div>
    </section>
  )
}

export const RelatedArticlesConfig: ComponentConfig<RelatedArticlesProps> = {
  fields: {
    sectionTitle: { type: 'text', label: 'Section Title' },
    articles: {
      type: 'array',
      label: 'Related Articles',
      arrayFields: {
        title: { type: 'text', label: 'Title' },
        category: { type: 'text', label: 'Category' },
        readTime: { type: 'text', label: 'Read Time (min)' },
        link: { type: 'text', label: 'Article Link' },
        image: {
          type: 'object',
          objectFields: {
            url: {
              type: 'custom',
              render: ({ onChange, value }) => (
                <ImagePickerField
                  label="Image"
                  value={value || ''}
                  onChange={onChange}
                  placeholder="Select image"
                />
              ),
            },
            alt: { type: 'text', label: 'Alt Text' },
          },
        },
      },
      getItemSummary: (item: any) => item.title || 'Article',
      min: 3,
      max: 3,
    },
  },
  defaultProps: {
    sectionTitle: 'Related Articles',
    articles: [
      {
        title: 'The Rise of Smart Contracts in 2024',
        category: 'Contract Law',
        readTime: '5',
        link: '#',
      },
      {
        title: 'Virtual Consultations: Best Practices',
        category: 'Client Relations',
        readTime: '6',
        link: '#',
      },
      {
        title: 'Protecting Your Firm From Data Breaches',
        category: 'Cybersecurity',
        readTime: '8',
        link: '#',
      },
    ],
  },
  render: ({ sectionTitle, articles }) => {
    return <RelatedArticles sectionTitle={sectionTitle} articles={articles} />
  },
}
