import type { ComponentConfig } from '@measured/puck'
import React from 'react'
import Image from 'next/image'
import { ImagePickerField } from '../components/ImagePickerField'
import Link from 'next/link'

export type ArticleHeaderProps = {
  category: string
  title: string
  author: string
  publishDate: string
  readTime: string
  tags: string[]
  featuredImage?: {
    url: string
    alt: string
  }
}

export const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  category,
  title,
  author,
  publishDate,
  readTime,
  tags,
  featuredImage,
}) => {
  return (
    <header className="py-8 md:py-12">
      {/* Breadcrumb & Category */}
      <div className="mb-6">
        <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400">
            Blog
          </Link>
          <span>/</span>
          <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
            {category}
          </Link>
        </nav>

        <span className="inline-block px-3 py-1.5 rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-wide">
          {category}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
        {title}
      </h1>

      {/* Meta Info */}
      <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-600 dark:text-gray-400">
        <span>By {author}</span>
        <span>•</span>
        <span>Published on {publishDate}</span>
        <span>•</span>
        <span>{readTime} min read</span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Featured Image */}
      {featuredImage?.url && (
        <div className="aspect-video w-full rounded-2xl overflow-hidden relative bg-gray-200 dark:bg-gray-800">
          <Image
            src={featuredImage.url}
            alt={featuredImage.alt || title}
            fill
            className="object-cover"
          />
        </div>
      )}
    </header>
  )
}

export const ArticleHeaderConfig: ComponentConfig<ArticleHeaderProps> = {
  fields: {
    category: { type: 'text', label: 'Category' },
    title: { type: 'textarea', label: 'Title' },
    author: { type: 'text', label: 'Author Name' },
    publishDate: { type: 'text', label: 'Publish Date' },
    readTime: { type: 'text', label: 'Read Time (minutes)' },
    tags: {
      type: 'array',
      label: 'Tags',
      arrayFields: {
        tag: { type: 'text' },
      },
      getItemSummary: (item: any) => item.tag || 'Tag',
    },
    featuredImage: {
      type: 'object',
      objectFields: {
        url: {
          type: 'custom',
          render: ({ onChange, value }) => (
            <ImagePickerField
              label="Featured Image"
              value={value || ''}
              onChange={onChange}
              placeholder="Select featured image"
            />
          ),
        },
        alt: { type: 'text', label: 'Alt Text' },
      },
    },
  },
  defaultProps: {
    category: 'Legal Strategy',
    title: 'The Art of Digital Transformation in Law: A 2024 Guide',
    author: 'Dr. Evelyn Reed',
    publishDate: 'October 28, 2023',
    readTime: '7',
    tags: ['Legal Tech', 'Innovation', 'Firm Management'],
  },
  render: ({ category, title, author, publishDate, readTime, tags, featuredImage }) => {
    const tagList = tags?.map((item: any) => item.tag) || []

    return (
      <ArticleHeader
        category={category}
        title={title}
        author={author}
        publishDate={publishDate}
        readTime={readTime}
        tags={tagList}
        featuredImage={featuredImage}
      />
    )
  },
}
