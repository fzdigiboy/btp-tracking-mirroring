import type { Block } from 'payload'
import { ComponentConfig } from '@measured/puck'
import React from 'react'
import Image from 'next/image'
import { ImagePickerField } from '../components/ImagePickerField'

export type HeroSectionProps = {
  title: string
  subtitle: string
  primaryCtaText: string
  primaryCtaLink: string
  image?: {
    url: string
    alt: string
  }
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  primaryCtaText,
  primaryCtaLink,
  image,
}) => {
  return (
    <section className="py-16 md:py-24">
      <div className="grid grid-cols-1 gap-12 @container md:grid-cols-2">
        <div className="flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-4 text-left">
            <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-text-light dark:text-text-dark md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="text-base text-subtext-light dark:text-subtext-dark md:text-lg">
              {subtitle}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={primaryCtaLink}
              className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-accent text-primary text-base font-bold tracking-wide transition-opacity hover:opacity-90"
            >
              <span className="truncate">{primaryCtaText}</span>
            </a>
          </div>
        </div>
        <div className="w-full">
          {image && image.url && (
            <div className="aspect-square w-full rounded-xl bg-cover bg-center relative overflow-hidden">
              <Image
                src={image.url}
                alt={image.alt || 'Hero Image'}
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

export const HeroSectionConfig: ComponentConfig<HeroSectionProps> = {
  fields: {
    title: { type: 'text' },
    subtitle: { type: 'textarea' },
    primaryCtaText: { type: 'text' },
    primaryCtaLink: { type: 'text' },
    image: {
      type: 'object',
      objectFields: {
        url: {
          type: 'custom',
          render: ({ onChange, value }) => (
            <ImagePickerField
              label="Hero Image"
              value={value || ''}
              onChange={onChange}
              placeholder="Select a hero image"
            />
          ),
        },
        alt: { type: 'text', label: 'Alt Text' },
      },
    },
  },
  defaultProps: {
    title: 'Expert Legal Counsel for Modern Businesses',
    subtitle:
      'Providing strategic guidance and innovative solutions to help your company thrive in a complex legal landscape.',
    primaryCtaText: 'Book a Free Consultation',
    primaryCtaLink: '#',
  },
  render: ({ title, subtitle, primaryCtaText, primaryCtaLink, image }) => {
    return (
      <HeroSection
        title={title}
        subtitle={subtitle}
        primaryCtaText={primaryCtaText}
        primaryCtaLink={primaryCtaLink}
        image={image}
      />
    )
  },
}
