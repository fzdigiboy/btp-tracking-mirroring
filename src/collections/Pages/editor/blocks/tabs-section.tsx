'use client'

import type { ComponentConfig } from '@measured/puck'
import React, { useState } from 'react'

export type Tab = {
  label: string
  content: string
}

export type TabsSectionProps = {
  tabs: Tab[]
}

export const TabsSection: React.FC<TabsSectionProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-12">
      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-3 mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 rounded-lg font-medium text-base transition-colors ${
              activeTab === index
                ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="py-8">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {tabs[activeTab]?.content}
          </p>
        </div>
      </div>
    </section>
  )
}

export const TabsSectionConfig: ComponentConfig<TabsSectionProps> = {
  fields: {
    tabs: {
      type: 'array',
      label: 'Tabs',
      arrayFields: {
        label: { type: 'text', label: 'Tab Label' },
        content: { type: 'textarea', label: 'Tab Content' },
      },
      getItemSummary: (item: any) => item.label || 'Tab',
    },
  },
  defaultProps: {
    tabs: [
      {
        label: 'Biography',
        content:
          "A compelling narrative of the professional's journey, motivations, and passion for their field. This section would elaborate on what drives them to excel and how their personal experiences have shaped their professional approach, creating a connection with the visitor.",
      },
      {
        label: 'Qualifications',
        content:
          'Detailed information about educational background, certifications, and professional credentials.',
      },
      {
        label: 'Philosophy',
        content:
          'Description of the professional approach, values, and methodology used in their practice.',
      },
      {
        label: 'Experience',
        content: 'Overview of work history, notable achievements, and career milestones.',
      },
    ],
  },
  render: ({ tabs }) => {
    return <TabsSection tabs={tabs} />
  },
}
