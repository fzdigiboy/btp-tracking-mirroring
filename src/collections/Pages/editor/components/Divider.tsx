import { ComponentConfig } from '@measured/puck'
import React from 'react'
import { colorPickerField } from '../fields/color-picker'

export interface DividerProps {
  style?: 'solid' | 'dashed' | 'dotted'
  color?: string
  thickness?: number
}

export const Divider: ComponentConfig<DividerProps> = {
  label: 'Divider',
  fields: {
    style: {
      type: 'select',
      options: [
        { label: 'Solid', value: 'solid' },
        { label: 'Dashed', value: 'dashed' },
        { label: 'Dotted', value: 'dotted' },
      ],
    },
    color: colorPickerField,
    thickness: {
      type: 'number',
      label: 'Thickness (px)',
    },
  },
  defaultProps: {
    style: 'solid',
    color: '#d1d5db',
    thickness: 1,
  },
  render: ({ style, color, thickness }) => {
    return (
      <hr
        style={{
          width: '100%',
          borderTopStyle: style,
          borderTopWidth: `${thickness}px`,
          borderTopColor: color,
          margin: 0,
        }}
      />
    )
  },
}
