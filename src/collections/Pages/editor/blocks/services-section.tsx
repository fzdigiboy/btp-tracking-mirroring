import type { ComponentConfig } from '@measured/puck'
import React from 'react'

export type ServiceItem = {
  icon: string
  title: string
  description: string
}

export type ServicesSectionProps = {
  title: string
  services: ServiceItem[]
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ title, services }) => {
  return (
    <section className="py-16 md:py-24">
      <h2 className="text-center font-serif text-3xl font-bold leading-tight tracking-tight md:text-4xl">
        {title}
      </h2>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 rounded-xl border border-subtle-light dark:border-subtle-dark bg-background-light dark:bg-background-dark p-6 text-center shadow-sm"
          >
            <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-accent/20 text-accent">
              <span className="material-symbols-outlined">{service.icon}</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-serif text-xl font-bold">{service.title}</h3>
              <p className="text-sm text-subtext-light dark:text-subtext-dark">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export const ServicesSectionConfig: ComponentConfig<ServicesSectionProps> = {
  fields: {
    title: { type: 'text' },
    services: {
      type: 'array',
      arrayFields: {
        icon: { type: 'text' },
        title: { type: 'text' },
        description: { type: 'textarea' },
      },
      getItemSummary: (item) => item.title || 'Service',
    },
  },
  defaultProps: {
    title: 'Our Services',
    services: [
      {
        icon: 'corporate_fare',
        title: 'Corporate Law',
        description: 'Navigate complex corporate legalities with confidence and strategic insight.',
      },
      {
        icon: 'groups',
        title: 'Strategic Consulting',
        description:
          'Transform your business challenges into growth opportunities with expert guidance.',
      },
      {
        icon: 'school',
        title: 'Executive Coaching',
        description:
          'Unlock your leadership potential and drive peak performance with personalized coaching.',
      },
    ],
  },
  render: ({ title, services }) => {
    return <ServicesSection title={title} services={services} />
  },
}
