'use client'

import type { ComponentConfig } from '@measured/puck'
import React, { useState } from 'react'

export type BlogSearchFiltersProps = {
  placeholder: string
  categories: string[]
}

export const BlogSearchFilters: React.FC<BlogSearchFiltersProps> = ({
  placeholder,
  categories,
}) => {
  const [activeCategory, setActiveCategory] = useState('All Posts')

  return (
    <section className="py-8">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="8" cy="8" r="6" />
              <path d="M12 12l6 6" />
            </svg>
          </span>
          <input
            type="text"
            placeholder={placeholder}
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-3">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-colors duration-200 ${
              activeCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  )
}

export const BlogSearchFiltersConfig: ComponentConfig<BlogSearchFiltersProps> = {
  fields: {
    placeholder: {
      type: 'text',
      label: 'Search Placeholder',
    },
    categories: {
      type: 'array',
      label: 'Filter Categories',
      arrayFields: {
        category: {
          type: 'text',
        },
      },
      getItemSummary: (item: any) => item.category || 'Category',
    },
  },
  defaultProps: {
    placeholder: 'Search articles by keyword...',
    categories: ['All Posts', 'Legal Insights', 'Consulting Trends', 'Wellness Tips'],
  },
  render: ({ placeholder, categories }) => {
    // Transform categories array
    const categoryList = categories?.map((item: any) => item.category) || []

    return <BlogSearchFilters placeholder={placeholder} categories={categoryList} />
  },
}
