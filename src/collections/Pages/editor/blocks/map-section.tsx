import type { ComponentConfig } from '@measured/puck'
import React from 'react'

export type MapSectionProps = {
  title: string
  embedUrl: string
  height: number
}

export const MapSection: React.FC<MapSectionProps> = ({ title, embedUrl, height }) => {
  return (
    <section className="py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        {title}
      </h2>

      <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
        {embedUrl ? (
          <iframe
            src={embedUrl}
            width="100%"
            height={height}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <div
            className="bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400"
            style={{ height: `${height}px` }}
          >
            <p>Map embed URL not configured</p>
          </div>
        )}
      </div>
    </section>
  )
}

export const MapSectionConfig: ComponentConfig<MapSectionProps> = {
  fields: {
    title: { type: 'text', label: 'Section Title' },
    embedUrl: {
      type: 'textarea',
      label: 'Google Maps Embed URL',
    },
    height: {
      type: 'number',
      label: 'Map Height (px)',
      min: 300,
    },
  },
  defaultProps: {
    title: 'Our Location',
    embedUrl: '',
    height: 450,
  },
  render: ({ title, embedUrl, height }) => {
    return <MapSection title={title} embedUrl={embedUrl} height={height} />
  },
}
