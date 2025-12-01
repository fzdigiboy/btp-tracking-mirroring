
import TestimonialsSectionWrapper from '@/app/(storefront)/btp_components/Testimonials/component/TestimonialsSectionWrapper'
import { ComponentConfig } from '@measured/puck'

export interface TestimoniesSectionProps {
  title: string
  // TODO: A mettre dans chaque bloc
  isFullWidth: string
}

// The block structure
export const TestimoniesSectionBlock: ComponentConfig<TestimoniesSectionProps> = {
  label: 'Testimonies Section',

  fields: {
    title: { type: 'text' },
    isFullWidth: {
      type: 'radio',
      options: [
        { label: 'Yes', value: 'Yes' },
        { label: 'No', value: 'No' },
      ],
    },
  },
  defaultProps: {
    title: 'Testimonies about Projects',
    isFullWidth: 'No',
  },

//   render: ({ title, isFullWidth }) => {
//     return (
//         <TestimonialsSectionWrapper
//           title={title}
//           isFullWidth={isFullWidth}
//         />
//     )
//   },
render: (props) => <TestimonialsSectionWrapper {...props} />,
}
