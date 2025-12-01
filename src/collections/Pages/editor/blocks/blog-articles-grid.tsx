import type { ComponentConfig } from '@measured/puck'
import React from 'react'
import Image from 'next/image'
import { ImagePickerField } from '../components/ImagePickerField'

export type BlogArticle = {
  title: string
  excerpt: string
  category: string
  image?: {
    url: string
    alt: string
  }
  author: string
  date: string
  link: string
}

export type BlogArticlesGridProps = {
  sectionTitle: string
  articles: BlogArticle[]
}

export const BlogArticlesGrid: React.FC<BlogArticlesGridProps> = ({ sectionTitle, articles }) => {
  return (
    <section className="py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
        {sectionTitle}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <article key={index} className="flex flex-col group cursor-pointer">
            {/* Image */}
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 mb-5 relative">
              {article.image?.url && (
                <Image
                  src={article.image.url}
                  alt={article.image.alt || article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              )}
            </div>

            {/* Category Badge */}
            <span className="inline-block w-fit px-3 py-1.5 rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-3">
              {article.category}
            </span>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {article.title}
            </h3>

            {/* Excerpt */}
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
              {article.excerpt}
            </p>

            {/* Meta */}
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <span>By {article.author}</span>
              <span className="mx-2">•</span>
              <span>{article.date}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export const BlogArticlesGridConfig: ComponentConfig<BlogArticlesGridProps> = {
  fields: {
    sectionTitle: {
      type: 'text',
      label: 'Section Title',
    },
    articles: {
      type: 'array',
      label: 'Articles',
      arrayFields: {
        title: { type: 'text', label: 'Title' },
        excerpt: { type: 'textarea', label: 'Excerpt' },
        category: { type: 'text', label: 'Category' },
        image: {
          type: 'object',
          objectFields: {
            url: {
              type: 'custom',
              render: ({ onChange, value }) => (
                <ImagePickerField
                  label="Article Image"
                  value={value || ''}
                  onChange={onChange}
                  placeholder="Select article image"
                />
              ),
            },
            alt: { type: 'text', label: 'Alt Text' },
          },
        },
        author: { type: 'text', label: 'Author Name' },
        date: { type: 'text', label: 'Date' },
        link: { type: 'text', label: 'Article Link' },
      },
      getItemSummary: (item: any) => item.title || 'Article',
    },
  },
  defaultProps: {
    sectionTitle: 'Recent Articles',
    articles: [
      {
        title: 'The Future of AI in Business Consulting',
        excerpt:
          'Discover how artificial intelligence is reshaping consulting strategies and client outcomes.',
        category: 'Consulting Trends',
        author: 'Jane Doe',
        date: 'Oct 26, 2023',
        link: '#',
      },
      {
        title: '5 Strategies for Scaling Your Practice',
        excerpt:
          'Actionable advice for professionals looking to expand their client base and operational efficiency.',
        category: 'Growth Strategies',
        author: 'John Smith',
        date: 'Oct 15, 2023',
        link: '#',
      },
      {
        title: 'Avoiding Burnout: A Guide for High-Achievers',
        excerpt:
          'Practical tips for maintaining mental and physical wellness in a demanding professional career.',
        category: 'Wellness Tips',
        author: 'Dr. Emily White',
        date: 'Oct 02, 2023',
        link: '#',
      },
    ],
  },
  render: ({ sectionTitle, articles }) => {
    return <BlogArticlesGrid sectionTitle={sectionTitle} articles={articles} />
  },
}
