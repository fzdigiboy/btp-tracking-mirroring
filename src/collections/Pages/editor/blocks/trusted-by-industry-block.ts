import { Media } from '@/payload-types'
import { ComponentConfig } from '@measured/puck'

// Ces types restent dans le frontend
export type TrustedByIndustryProps = {
  title?: string
  subtitle?: string
  description?: string
  logos: Media[]
  container: {
    bgColor: string
    textColor: string
    padding: string
    rounded: string
    maxWidth: string
  }
  logoStyle: {
    height: string
    opacity: string
    invertOnDark: boolean
    gapX: string
    gapY: string
  }
  // The background of the block itself
  bgColor?: string
  // The border radius of the block
  borderRadius?: string
  // The padding of the block
  padding?: string
}

export const TrustedByIndustryBlock: ComponentConfig<TrustedByIndustryProps> = {
  fields: {
    title: { type: 'text', label: 'Section Title' },
    subtitle: { type: 'text', label: 'Subtitle' },
    description: { type: 'text', label: 'Description' },
    bgColor: { type: 'text', label: 'Background color class' },
    borderRadius: { type: 'text', label: 'Border radius class' },
    padding: { type: 'text', label: 'Padding (ex: py-16 px-4)' },
    logos: {
      type: 'array',
      label: 'Logos',
      arrayFields: {
        image: {
          type: 'relationship',
          relationTo: 'Media',
          label: 'Logo Image',
        },
        alt: { type: 'text', label: 'Alt text' },
      },
    },

    container: {
      type: 'object',
      label: 'Container Style',
      objectFields: {
        bgColor: { type: 'text', label: 'Background color class' },
        textColor: { type: 'text', label: 'Text color class' },
        padding: { type: 'text', label: 'Padding (ex: py-16 px-4)' },
        rounded: { type: 'text', label: 'Border radius class' },
        maxWidth: { type: 'text', label: 'Max width (ex: max-w-6xl)' },
      },
    },

    logoStyle: {
      type: 'object',
      label: 'Logo Style',
      objectFields: {
        height: { type: 'text', label: 'Height (ex: h-8)' },
        opacity: { type: 'text', label: 'Opacity (ex: opacity-60)' },
        invertOnDark: { type: 'checkbox', label: 'Invert on dark mode?' },
        gapX: { type: 'text', label: 'Horizontal gap (ex: gap-x-16)' },
        gapY: { type: 'text', label: 'Vertical gap (ex: gap-y-8)' },
      },
    },
  },

  defaultProps: {
    title: 'Trusted by Industry Leaders',
    logos: [],
    container: {
      bgColor: 'bg-transparent',
      textColor: 'text-text-light dark:text-text-dark',
      padding: 'py-16 px-4',
      rounded: '',
      maxWidth: 'max-w-6xl',
    },
    logoStyle: {
      height: 'h-8',
      opacity: 'opacity-60',
      invertOnDark: true,
      gapX: 'gap-x-16',
      gapY: 'gap-y-8',
    },
  },
}
