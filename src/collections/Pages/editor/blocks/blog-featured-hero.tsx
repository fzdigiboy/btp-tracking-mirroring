import type { ComponentConfig } from '@measured/puck'
import React from 'react'
import Image from 'next/image'
import { ImagePickerField } from '../components/ImagePickerField'

export type BlogFeaturedHeroProps = {
  title: string
  description: string
  ctaText: string
  ctaLink: string
  image?: {
    url: string
    alt: string
  }
}

export const BlogFeaturedHero: React.FC<BlogFeaturedHeroProps> = ({
  title,
  description,
  ctaText,
  ctaLink,
  image,
}) => {
  return (
    <section className="py-12 md:py-16">
      <div className="rounded-2xl bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Image à gauche */}
          <div className="h-full min-h-[300px] md:min-h-[400px] relative">
            {image && image.url && (
              <Image
                src={image.url}
                alt={image.alt || 'Featured Article'}
                fill
                className="object-cover"
              />
            )}
          </div>

          {/* Contenu à droite */}
          <div className="p-8 md:p-12 flex flex-col justify-center gap-6">
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight text-gray-900 dark:text-white">
              {title}
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {description}
            </p>
            <div>
              <a
                href={ctaLink}
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base transition-colors duration-200"
              >
                {ctaText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export const BlogFeaturedHeroConfig: ComponentConfig<BlogFeaturedHeroProps> = {
  fields: {
    title: {
      type: 'text',
      label: 'Title',
    },
    description: {
      type: 'textarea',
      label: 'Description',
    },
    ctaText: {
      type: 'text',
      label: 'CTA Button Text',
    },
    ctaLink: {
      type: 'text',
      label: 'CTA Link',
    },
    image: {
      type: 'object',
      objectFields: {
        url: {
          type: 'custom',
          render: ({ onChange, value }) => (
            <ImagePickerField
              label="Featured Image"
              value={value || ''}
              onChange={onChange}
              placeholder="Select a featured image"
            />
          ),
        },
        alt: { type: 'text', label: 'Alt Text' },
      },
    },
  },
  defaultProps: {
    title: 'Pioneering Insights in Modern Consultancy',
    description:
      'Explore our latest analysis on industry trends, strategic growth, and the future of professional services. Stay ahead of the curve with expert perspectives.',
    ctaText: 'Read The Featured Article',
    ctaLink: '#',
  },
  render: ({ title, description, ctaText, ctaLink, image }) => {
    return (
      <BlogFeaturedHero
        title={title}
        description={description}
        ctaText={ctaText}
        ctaLink={ctaLink}
        image={image}
      />
    )
  },
}
