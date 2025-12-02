import type { ComponentConfig } from '@measured/puck'
import React from 'react'
import Image from 'next/image'
import { ImagePickerField } from '../components/ImagePickerField'

export type ContentBlock = {
  type: 'paragraph' | 'heading' | 'image' | 'quote'
  content?: string
  level?: 'h2' | 'h3'
  image?: {
    url: string
    alt: string
    caption?: string
  }
}

export type ArticleContentProps = {
  blocks: ContentBlock[]
}

export const ArticleContent: React.FC<ArticleContentProps> = ({ blocks }) => {
  return (
    <article className="py-12 prose prose-lg dark:prose-invert max-w-none">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'heading':
            const HeadingTag = block.level || 'h2'
            return (
              <HeadingTag key={index} className="font-bold text-gray-900 dark:text-white mt-12 mb-4">
                {block.content}
              </HeadingTag>
            )

          case 'paragraph':
            return (
              <p key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {block.content}
              </p>
            )

          case 'image':
            return (
              <figure key={index} className="my-10">
                {block.image?.url && (
                  <div className="aspect-video w-full rounded-xl overflow-hidden relative bg-gray-200 dark:bg-gray-800">
                    <Image
                      src={block.image.url}
                      alt={block.image.alt || 'Article image'}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                {block.image?.caption && (
                  <figcaption className="text-center text-sm text-gray-500 dark:text-gray-400 mt-3">
                    {block.image.caption}
                  </figcaption>
                )}
              </figure>
            )

          case 'quote':
            return (
              <blockquote key={index} className="border-l-4 border-blue-600 pl-6 py-4 my-8 italic text-xl text-gray-700 dark:text-gray-300">
                &quot;{block.content}&quot;
              </blockquote>
            )

          default:
            return null
        }
      })}
    </article>
  )
}

export const ArticleContentConfig: ComponentConfig<ArticleContentProps> = {
  fields: {
    blocks: {
      type: 'array',
      label: 'Content Blocks',
      arrayFields: {
        type: {
          type: 'select',
          label: 'Block Type',
          options: [
            { label: 'Paragraph', value: 'paragraph' },
            { label: 'Heading', value: 'heading' },
            { label: 'Image', value: 'image' },
            { label: 'Quote', value: 'quote' },
          ],
        },
        content: { type: 'textarea', label: 'Content' },
        level: {
          type: 'select',
          label: 'Heading Level',
          options: [
            { label: 'H2', value: 'h2' },
            { label: 'H3', value: 'h3' },
          ],
        },
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
                  placeholder="Select an image"
                />
              ),
            },
            alt: { type: 'text', label: 'Alt Text' },
            caption: { type: 'text', label: 'Caption' },
          },
        },
      },
      getItemSummary: (item: any) => `${item.type}: ${item.content?.substring(0, 40) || '...'}`,
    },
  },
  defaultProps: {
    blocks: [
      {
        type: 'paragraph',
        content:
          'The legal industry is undergoing a profound transformation driven by digital innovation. Law firms that embrace technology are not only improving efficiency but also delivering superior client value.',
      },
      {
        type: 'heading',
        level: 'h2',
        content: 'Understanding the Core Pillars of Legal Digital Transformation',
      },
      {
        type: 'paragraph',
        content:
          'Digital transformation in law goes beyond adopting new software. It requires a cultural shift, strategic vision, and commitment to continuous improvement.',
      },
    ],
  },
  render: ({ blocks }) => {
    return <ArticleContent blocks={blocks} />
  },
}
