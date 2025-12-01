import { ComponentConfig } from '@measured/puck'

// Ces types restent dans le frontend
export type CallToActionProps = {
  title: string
  description: string

  container: {
    bgColor: string
    textColor: string
    padding: string
    rounded: string
    maxWidth: string
    center: boolean
  }

  button: {
    text: string
    link: string
    bgColor: string
    textColor: string
    paddingX: string
    paddingY: string
    rounded: string
    hover: string
  }
}

export const CallToActionBlock: ComponentConfig<CallToActionProps> = {
  fields: {
    title: { type: 'text', label: 'Title' },
    description: { type: 'textarea', label: 'Description' },

    container: {
      type: 'object',
      label: 'Container',
      objectFields: {
        bgColor: { type: 'text', label: 'Background color class' },
        textColor: { type: 'text', label: 'Text color class' },
        padding: { type: 'text', label: 'Padding (ex: p-8 sm:p-12)' },
        rounded: { type: 'text', label: 'Border radius' },
        maxWidth: { type: 'text', label: 'Max width (ex: max-w-4xl)' },
        center: { type: 'checkbox', label: 'Center content?' },
      },
    },

    button: {
      type: 'object',
      label: 'Button',
      objectFields: {
        text: { type: 'text', label: 'Button text' },
        link: { type: 'text', label: 'Button link' },
        bgColor: { type: 'text', label: 'Button background class' },
        textColor: { type: 'text', label: 'Button text color' },
        paddingX: { type: 'text', label: 'Padding X (ex: px-6, px-8)' },
        paddingY: { type: 'text', label: 'Padding Y (ex: h-12)' },
        rounded: { type: 'text', label: 'Rounded class' },
        hover: { type: 'text', label: 'Hover class (opacity, scale…)' },
      },
    },
  },

  defaultProps: {
    title: 'Ready to Start Your Project in Togo?',
    description: "Let's build your future, together. Contact us for a free consultation.",

    container: {
      bgColor: 'bg-primary',
      textColor: 'text-white',
      padding: 'p-12',
      rounded: 'rounded-xl',
      maxWidth: 'max-w-4xl',
      center: true,
    },

    button: {
      text: 'Get in Touch',
      link: '#',
      bgColor: 'bg-primary-accent',
      textColor: 'text-white',
      paddingX: 'px-8',
      paddingY: 'h-12',
      rounded: 'rounded-full',
      hover: 'hover:bg-opacity-90',
    },
  },

  //   render: (props) => <CallToAction {...props} />,
}
