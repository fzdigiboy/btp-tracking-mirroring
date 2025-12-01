import type { ComponentConfig } from '@measured/puck'
import React from 'react'

export type TimelineItem = {
  period: string
  title: string
  organization: string
  location: string
}

export type TimelineExperienceProps = {
  sectionTitle: string
  items: TimelineItem[]
}

export const TimelineExperience: React.FC<TimelineExperienceProps> = ({ sectionTitle, items }) => {
  return (
    <section className="py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
        {sectionTitle}
      </h2>

      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="flex gap-6">
            {/* Timeline Dot */}
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 flex-shrink-0 mt-2" />
              {index < items.length - 1 && (
                <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700 mt-2" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                {item.period}
              </p>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {item.organization}, {item.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export const TimelineExperienceConfig: ComponentConfig<TimelineExperienceProps> = {
  fields: {
    sectionTitle: { type: 'text', label: 'Section Title' },
    items: {
      type: 'array',
      label: 'Timeline Items',
      arrayFields: {
        period: { type: 'text', label: 'Period (e.g., 2015 - Present)' },
        title: { type: 'text', label: 'Title/Position' },
        organization: { type: 'text', label: 'Organization' },
        location: { type: 'text', label: 'Location' },
      },
      getItemSummary: (item: any) => item.title || 'Experience',
    },
  },
  defaultProps: {
    sectionTitle: 'Experience & Milestones',
    items: [
      {
        period: '2015 - Present',
        title: 'Founder & Principal Psychologist',
        organization: 'Reed Psychology Associates',
        location: 'San Francisco, CA',
      },
      {
        period: '2010 - 2015',
        title: 'Senior Clinical Psychologist',
        organization: 'Bay Area Health Services',
        location: 'Oakland, CA',
      },
      {
        period: '2008 - 2010',
        title: 'Postdoctoral Fellowship',
        organization: 'UCSF Department of Psychiatry',
        location: 'San Francisco, CA',
      },
    ],
  },
  render: ({ sectionTitle, items }) => {
    return <TimelineExperience sectionTitle={sectionTitle} items={items} />
  },
}
