import { ComponentConfig } from '@measured/puck'

export interface SpacerProps {
  height: number
  unit: 'px' | 'rem' | 'em'
}

export const Spacer: ComponentConfig<SpacerProps> = {
  label: 'Spacing',
  fields: {
    height: { type: 'number' },
    unit: {
      type: 'select',
      options: [
        { label: 'px', value: 'px' },
        { label: 'rem', value: 'rem' },
        { label: 'em', value: 'em' },
      ],
    },
  },
  defaultProps: {
    height: 40,
    unit: 'px',
  },
  render: ({ height, unit }) => <div style={{ height: `${height}${unit}` }} />,
}
