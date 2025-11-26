import { ComponentConfig } from '@measured/puck'

// Ces types restent dans le frontend
export type ReadyToStartProps = {
  title?: string
  description?: string
  bgColor?: string
  borderRadius?: string
  padding?: string
  // Button settings
  button: {
    text: string
    url: string
    target?: string
    bgColor?: string
    borderColor?: string
    borderWidth?: string
    borderRadius?: string
    padding?: string
  }
}

export const ReadyToStartBlock: ComponentConfig<ReadyToStartProps> = {
  fields: {
    title: { type: 'text', label: 'Section Title' },
    description: { type: 'text', label: 'Description' },
    bgColor: { type: 'text', label: 'Background color class' },
    borderRadius: { type: 'text', label: 'Border radius class' },
    padding: { type: 'text', label: 'Padding (ex: py-16 px-4)' },
    button: {
      type: 'object',
      label: 'Button',
      objectFields: {
        text: { type: 'text', label: 'Button text' },
        url: { type: 'text', label: 'Button URL' },
        target: { type: 'text', label: 'Button target' },
        bgColor: { type: 'text', label: 'Button background color class' },
        borderColor: { type: 'text', label: 'Button border color class' },
        borderWidth: { type: 'text', label: 'Button border width class' },
        borderRadius: { type: 'text', label: 'Button border radius class' },
        padding: { type: 'text', label: 'Button padding (ex: py-4 px-8)' },
      },
    },

    // render: (props) => <CallToAction {...props} />,
  },
}
