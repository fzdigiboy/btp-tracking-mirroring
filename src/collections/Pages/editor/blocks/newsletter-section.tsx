'use client'

import type { ComponentConfig } from '@measured/puck'
import React, { useState } from 'react'

export type NewsletterSectionProps = {
  title: string
  description: string
  buttonText: string
  placeholder: string
}

export const NewsletterSection: React.FC<NewsletterSectionProps> = ({
  title,
  description,
  buttonText,
  placeholder,
}) => {
  const [email, setEmail] = useState('')

  return (
    <section className="py-16 md:py-20">
      <div className="rounded-2xl bg-blue-50 dark:bg-blue-900/20 px-8 py-12 md:px-12 md:py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg mb-8">
            {description}
          </p>

          {/* Email Form */}
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              className="flex-1 px-5 py-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold whitespace-nowrap transition-colors">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export const NewsletterSectionConfig: ComponentConfig<NewsletterSectionProps> = {
  fields: {
    title: { type: 'text', label: 'Title' },
    description: { type: 'textarea', label: 'Description' },
    placeholder: { type: 'text', label: 'Input Placeholder' },
    buttonText: { type: 'text', label: 'Button Text' },
  },
  defaultProps: {
    title: 'Subscribe to our Newsletter',
    description: 'Get the latest insights and articles delivered to your inbox.',
    placeholder: 'Enter your email',
    buttonText: 'Subscribe',
  },
  render: ({ title, description, buttonText, placeholder }) => {
    return (
      <NewsletterSection
        title={title}
        description={description}
        buttonText={buttonText}
        placeholder={placeholder}
      />
    )
  },
}
