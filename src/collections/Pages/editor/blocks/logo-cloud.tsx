import type { ComponentConfig } from '@measured/puck'
import React from 'react'
import Image from 'next/image'

export type LogoCloudProps = {
  title: string
  logos: Array<{
    url: string
    alt: string
  }>
}

export const LogoCloud: React.FC<LogoCloudProps> = ({ title, logos }) => {
  return (
    <section className="py-16">
      <h3 className="text-center text-sm font-bold uppercase tracking-widest text-subtext-light dark:text-subtext-dark">
        {title}
      </h3>
      <div className="mt-8 grid grid-cols-2 place-items-center gap-8 md:grid-cols-4 lg:grid-cols-5">
        {logos.map((logo, index) => (
          <div key={index} className="relative h-8 w-auto">
            {/* Note: Using img tag here for simplicity as aspect ratio might vary, or use Image with objectFit contain */}
            <img src={logo.url} alt={logo.alt} className="h-8 w-auto" />
          </div>
        ))}
      </div>
    </section>
  )
}

export const LogoCloudConfig: ComponentConfig<LogoCloudProps> = {
  fields: {
    title: { type: 'text' },
    logos: {
      type: 'array',
      arrayFields: {
        url: { type: 'text' }, // Placeholder for image URL
        alt: { type: 'text' },
      },
      getItemSummary: (item) => item.alt || 'Logo',
    },
  },
  defaultProps: {
    title: 'Trusted By Leading Companies',
    logos: [],
  },
  render: ({ title, logos }) => {
    return <LogoCloud title={title} logos={logos} />
  },
}
