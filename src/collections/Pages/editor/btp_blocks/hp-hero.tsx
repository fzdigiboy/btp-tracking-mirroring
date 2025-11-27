import HeroSectionComponent from '@/app/(storefront)/btp_components/Home/component/HeroSection'
import { ComponentConfig } from '@measured/puck'
import ImagePickerField from '../components/ImagePickerField'
import { colorPickerField } from '../fields/color-picker'

export interface HeroSectionProps {
  title: string
  description: string
  button: Array<{
    text: string
    href: string
    color: string
  }>
  image?: {
    url: string
    alt: string
  }
  // TODO: A mettre dans chaque bloc
  isFullWidth: string
}

// The block structure
export const HeroSectionBlock: ComponentConfig<HeroSectionProps> = {
  label: 'Hero Section',
  
  fields: {
    title: { type: 'text' },
    description: { type: 'text' },
    button: {
      type: 'array',
      label: 'Buttons',
      arrayFields: {
        text: { type: 'text' },
        href: { type: 'text' },
        color: colorPickerField,
      },
    },
    image: {
      type: 'custom',
      label: 'Background Image',
      render: ({ onChange, value }) => (
        <ImagePickerField
          label="Background Image"
          value={value as any}
          onChange={onChange as any}
          placeholder="Select a background image from your media library"
        />
      ),
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
    title: 'Your Trusted Partner for Building in Congo',
    description: 'From Plan Conception to Key Handover, We Manage Everything Remotely.',
    button: [
      {
        text: 'Request a Free Quote',
        href: '#',
        color: '#003366',
      },
      {
        text: 'Our Services',
        href: '#',
        color: '#FFFFFFFF',
      },
    ],
    image: {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCA-WpptGbWx9_thOx8-C6UeQLqyDpcYsaNuUwM7djc4DeGtC-KHhFhZerFJk34lhV8-u8NLBUjh2Fx7HvE0aQpVlgNOXLwgG3yKrAuReKd0ZvXdGwUvjmor_lmX8ShOTfHQJGK0uAh5uvZm7JV-XENLX8kweHnx8GGI3M96IGh4KOWZh2Jo2cBPWSb1oUod3C61bRaaJcagyCwcX7rInYfqO-swwVRhAGv1RqCXAG44kR7TlCp6YXQqpeyIk1vD78lw-sKF_NflCQ_',
      alt: 'TogoBuild',
    },
    isFullWidth: 'No',
  },

  render: ({ title, description, button, image, isFullWidth }) => {
    return (
      <HeroSectionComponent
        title={title}
        description={description}
        button={button}
        image={image}
        isFullWidth={isFullWidth}
      />
    )
  },
}
