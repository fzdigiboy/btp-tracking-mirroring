import type { ComponentConfig } from '@measured/puck'
import React from 'react'
import Image from 'next/image'

export type TestimonialItem = {
  quote: string
  authorName: string
  authorRole: string
  company?: string
  authorImage?: {
    url: string
    alt: string
  }
}

export type TestimonialsSectionProps = {
  title: string
  subtitle: string
  testimonials: TestimonialItem[]
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  title,
  subtitle,
  testimonials,
}) => {
  return (
    <section className="py-16 md:py-24 text-center">
      <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight md:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-base text-subtext-light dark:text-subtext-dark">
        {subtitle}
      </p>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 text-left">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col justify-between rounded-xl border border-subtle-light dark:border-subtle-dark bg-background-light dark:bg-background-dark p-6 shadow-sm"
          >
            <blockquote className="text-base">"{testimonial.quote}"</blockquote>
            <div className="mt-4 flex items-center gap-4">
              {testimonial.authorImage && (
                <div className="size-12 rounded-full relative overflow-hidden">
                  <Image
                    src={testimonial.authorImage.url}
                    alt={testimonial.authorImage.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <p className="font-bold">{testimonial.authorName}</p>
                <p className="text-sm text-subtext-light dark:text-subtext-dark">
                  {testimonial.authorRole}
                  {testimonial.company && `, ${testimonial.company}`}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export const TestimonialsSectionConfig: ComponentConfig<TestimonialsSectionProps> = {
  fields: {
    title: { type: 'text' },
    subtitle: { type: 'text' },
    testimonials: {
      type: 'array',
      arrayFields: {
        quote: { type: 'textarea' },
        authorName: { type: 'text' },
        authorRole: { type: 'text' },
        company: { type: 'text' },
        authorImage: {
          type: 'custom',
          render: () => <div>Image selection not implemented</div>,
        },
      },
      getItemSummary: (item) => item.authorName || 'Testimonial',
    },
  },
  defaultProps: {
    title: 'What Our Clients Say',
    subtitle: "Hear from the business leaders we've helped to succeed.",
    testimonials: [
      {
        quote:
          "Eleanor's strategic insights were a game-changer for our company. Her guidance was instrumental during our latest merger.",
        authorName: 'Johnathan Doe',
        authorRole: 'CEO',
        company: 'Tech Innovators Inc.',
      },
    ],
  },
  render: ({ title, subtitle, testimonials }) => {
    return <TestimonialsSection title={title} subtitle={subtitle} testimonials={testimonials} />
  },
}
