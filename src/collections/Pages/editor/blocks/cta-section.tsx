import type { ComponentConfig } from '@measured/puck'
import React from 'react'

export type CTASectionProps = {
  title: string
  description: string
  ctaText: string
  ctaLink: string
}

export const CTASection: React.FC<CTASectionProps> = ({ title, description, ctaText, ctaLink }) => {
  return (
    <section className="my-16 md:my-24">
      <div className="rounded-xl bg-primary dark:bg-subtle-dark p-8 md:p-16 text-center">
        <h2 className="font-serif text-3xl font-bold leading-tight text-white dark:text-text-dark md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-gray-300 dark:text-subtext-dark">
          {description}
        </p>
        <a
          href={ctaLink}
          className="mt-8 flex mx-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-accent text-primary text-base font-bold tracking-wide transition-opacity hover:opacity-90"
        >
          <span className="truncate">{ctaText}</span>
        </a>
      </div>
    </section>
  )
}

export const CTASectionConfig: ComponentConfig<CTASectionProps> = {
  fields: {
    title: { type: 'text' },
    description: { type: 'textarea' },
    ctaText: { type: 'text' },
    ctaLink: { type: 'text' },
  },
  defaultProps: {
    title: 'Ready to Achieve Your Goals?',
    description:
      "Let's discuss how my expertise can help drive your business forward. Schedule a complimentary consultation today.",
    ctaText: 'Schedule Your Free Consultation',
    ctaLink: '#',
  },
  render: ({ title, description, ctaText, ctaLink }) => {
    return (
      <CTASection title={title} description={description} ctaText={ctaText} ctaLink={ctaLink} />
    )
  },
}
