import { ComponentConfig } from '@measured/puck'
import TestimonialsSection from '@/app/(storefront)/btp_components/Home/component/TestimonialsSection'

export interface TestimonialsSectionProps {
  title: string
  testimonies: Array<{
    message: string
    author: string
    adress: string
  }>
  // TODO: A mettre dans chaque bloc
  isFullWidth: string
}

// The block structure
export const TestimonialsSectionBlock: ComponentConfig<TestimonialsSectionProps> = {
  label: 'Testimonies Section',
  fields: {
    title: { type: 'text' },
    testimonies: {
      type: 'array',
      label: 'Témoignnages',
      max: 3,
      arrayFields: {
        message: { type: 'textarea' },
        author: { type: 'text' },
        adress: { type: 'text' },
      },
    },
    isFullWidth: {
      type: 'radio',
      options: [
        { label: 'Yes', value: 'Yes' },
        { label: 'No', value: 'No' },
      ],
    },
  },
  defaultProps: {
    title: 'What Our International Clients Say',
    testimonies: [
      {
        message: 'Building my family home in Togo from Canada seemed impossible until I found TogoBuild. Their professionalism, constant updates, and transparency were exceptional. They delivered beyond my expectations.',
        author: 'Jean-Pierre D.',
        adress: 'Investor, Montreal, Canada',
      },
    ],
    isFullWidth: 'No',
  },

  render: ({ title, testimonies, isFullWidth }) => {
    return (
      <TestimonialsSection
        title={title}
        testimonies={testimonies}
        isFullWidth={isFullWidth}
      />
    )
  },
}
