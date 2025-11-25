import type { ComponentConfig } from '@measured/puck'
import React from 'react'
import Image from 'next/image'
import ImagePickerField from '@/collections/Pages/editor/components/ImagePickerField'

export type AboutSectionProps = {
  title: string
  content: string
  ctaText: string
  ctaLink: string
  image?: {
    url: string
    alt: string
  }
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  content,
  ctaText,
  ctaLink,
  image,
}) => {
  return (
    <section className="py-16 md:py-24">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-text-light dark:text-text-dark md:text-4xl">
              {title}
            </h2>
            <p className="text-base text-subtext-light dark:text-subtext-dark">{content}</p>
          </div>
          <a
            href={ctaLink}
            className="mt-6 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white dark:bg-accent dark:text-primary text-base font-bold tracking-wide transition-opacity hover:opacity-90"
          >
            <span className="truncate">{ctaText}</span>
          </a>
        </div>
        <div className="order-1 h-full w-full md:order-2">
          {image && (
            <div className="aspect-[4/3] w-full rounded-xl bg-cover bg-center relative overflow-hidden">
              <Image src={image.url} alt={image.alt} fill className="object-cover" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export const AboutSectionConfig: ComponentConfig<AboutSectionProps> = {
  fields: {
    title: { type: 'text' },
    content: { type: 'textarea' },
    ctaText: { type: 'text' },
    ctaLink: { type: 'text' },
    image: {
      type: 'custom',
      label: 'Background Image',
      render: ({ onChange, value }) => (
        <ImagePickerField
          label="Background Image"
          value={value as any}
          onChange={onChange as any}
          placeholder="Select a background image from your media library"
        />
      ),
    },
  },
  defaultProps: {
    title: 'About Dr. Eleanor Vance',
    content:
      'With over 15 years of experience, Dr. Vance is dedicated to providing unparalleled legal and strategic support. My mission is to build lasting partnerships with my clients, founded on trust, integrity, and a deep commitment to achieving their goals. I combine rigorous analysis with a pragmatic approach to deliver results that matter.',
    ctaText: 'Learn More About Me',
    ctaLink: '#',
  },
  render: ({ title, content, ctaText, ctaLink, image }) => {
    return (
      <AboutSection
        title={title}
        content={content}
        ctaText={ctaText}
        ctaLink={ctaLink}
        image={image}
      />
    )
  },
}
