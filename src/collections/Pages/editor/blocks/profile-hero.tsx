import type { ComponentConfig } from '@measured/puck'
import React from 'react'
import Image from 'next/image'
import { ImagePickerField } from '../components/ImagePickerField'

export type ProfileHeroProps = {
  name: string
  title: string
  description: string
  ctaText: string
  ctaLink: string
  image?: {
    url: string
    alt: string
  }
}

export const ProfileHero: React.FC<ProfileHeroProps> = ({
  name,
  title,
  description,
  ctaText,
  ctaLink,
  image,
}) => {
  return (
    <section className="py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            {name}
            {title && <span className="block text-3xl md:text-4xl lg:text-5xl mt-2">{title}</span>}
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </p>

          <div>
            <a
              href={ctaLink}
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base transition-colors"
            >
              {ctaText}
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="order-first md:order-last">
          {image?.url && (
            <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden relative bg-gray-200 dark:bg-gray-800">
              <Image
                src={image.url}
                alt={image.alt || name}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export const ProfileHeroConfig: ComponentConfig<ProfileHeroProps> = {
  fields: {
    name: { type: 'text', label: 'Name' },
    title: { type: 'text', label: 'Title/Position' },
    description: { type: 'textarea', label: 'Description' },
    ctaText: { type: 'text', label: 'CTA Button Text' },
    ctaLink: { type: 'text', label: 'CTA Link' },
    image: {
      type: 'object',
      objectFields: {
        url: {
          type: 'custom',
          render: ({ onChange, value }) => (
            <ImagePickerField
              label="Profile Image"
              value={value || ''}
              onChange={onChange}
              placeholder="Select profile image"
            />
          ),
        },
        alt: { type: 'text', label: 'Alt Text' },
      },
    },
  },
  defaultProps: {
    name: 'Dr. Evelyn Reed, PhD',
    title: 'Leading Clinical Psychologist',
    description:
      'Dedicated to guiding professionals through complex life transitions with clarity and confidence.',
    ctaText: 'Learn More About My Approach',
    ctaLink: '#',
  },
  render: ({ name, title, description, ctaText, ctaLink, image }) => {
    return (
      <ProfileHero
        name={name}
        title={title}
        description={description}
        ctaText={ctaText}
        ctaLink={ctaLink}
        image={image}
      />
    )
  },
}
