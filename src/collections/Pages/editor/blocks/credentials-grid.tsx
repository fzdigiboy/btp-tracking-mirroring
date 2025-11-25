import type { ComponentConfig } from '@measured/puck'
import React from 'react'

export type Credential = {
  icon: string
  title: string
  description: string
}

export type CredentialsGridProps = {
  sectionTitle: string
  credentials: Credential[]
}

export const CredentialsGrid: React.FC<CredentialsGridProps> = ({ sectionTitle, credentials }) => {
  return (
    <section className="py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
        {sectionTitle}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {credentials.map((credential, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
          >
            {/* Icon */}
            <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-3xl">
                {credential.icon}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {credential.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {credential.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export const CredentialsGridConfig: ComponentConfig<CredentialsGridProps> = {
  fields: {
    sectionTitle: { type: 'text', label: 'Section Title' },
    credentials: {
      type: 'array',
      label: 'Credentials',
      arrayFields: {
        icon: { type: 'text', label: 'Material Icon Name' },
        title: { type: 'text', label: 'Title' },
        description: { type: 'textarea', label: 'Description' },
      },
      getItemSummary: (item: any) => item.title || 'Credential',
    },
  },
  defaultProps: {
    sectionTitle: 'Qualifications & Credentials',
    credentials: [
      {
        icon: 'school',
        title: 'PhD in Clinical Psychology',
        description:
          'Stanford University, 2008. Specialized in cognitive behavioral therapy and adult psychopathology.',
      },
      {
        icon: 'verified',
        title: 'Board Certified',
        description:
          'American Board of Professional Psychology (ABPP), ensuring the highest standards of care.',
      },
      {
        icon: 'menu_book',
        title: 'Published Author',
        description:
          'Authored numerous articles in peer-reviewed journals on stress management for executives.',
      },
    ],
  },
  render: ({ sectionTitle, credentials }) => {
    return <CredentialsGrid sectionTitle={sectionTitle} credentials={credentials} />
  },
}
