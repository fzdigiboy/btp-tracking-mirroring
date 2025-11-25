import type { ComponentConfig } from '@measured/puck'
import React from 'react'

export type Step = {
  number: string
  title: string
  description: string
}

export type HowItWorksStepsProps = {
  sectionTitle: string
  subtitle: string
  steps: Step[]
}

export const HowItWorksSteps: React.FC<HowItWorksStepsProps> = ({
  sectionTitle,
  subtitle,
  steps,
}) => {
  return (
    <section className="py-16 md:py-24 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {sectionTitle}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto mb-16">{subtitle}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Number Circle */}
            <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
              <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {step.number}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{step.title}</h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export const HowItWorksStepsConfig: ComponentConfig<HowItWorksStepsProps> = {
  fields: {
    sectionTitle: { type: 'text', label: 'Section Title' },
    subtitle: { type: 'textarea', label: 'Subtitle' },
    steps: {
      type: 'array',
      label: 'Steps',
      arrayFields: {
        number: { type: 'text', label: 'Step Number' },
        title: { type: 'text', label: 'Step Title' },
        description: { type: 'textarea', label: 'Step Description' },
      },
      getItemSummary: (item: any) => `Step ${item.number}: ${item.title}` || 'Step',
      min: 3,
      max: 4,
    },
  },
  defaultProps: {
    sectionTitle: 'How It Works',
    subtitle: 'Our streamlined approach ensures clarity, efficiency, and results.',
    steps: [
      {
        number: '1',
        title: 'Initial Consultation',
        description:
          'We begin with a thorough consultation to understand your unique needs and goals.',
      },
      {
        number: '2',
        title: 'Strategy Development',
        description:
          'Our experts develop a tailored legal strategy to address your specific challenges.',
      },
      {
        number: '3',
        title: 'Execution & Reporting',
        description:
          'We execute the plan with precision and provide transparent progress reporting.',
      },
    ],
  },
  render: ({ sectionTitle, subtitle, steps }) => {
    return <HowItWorksSteps sectionTitle={sectionTitle} subtitle={subtitle} steps={steps} />
  },
}
