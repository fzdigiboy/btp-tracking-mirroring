import { ComponentConfig } from '@measured/puck'
import React from 'react'
import * as Icons from 'lucide-react'
import { iconPickerField } from '../fields/icon-picker'
import { colorPickerField } from '../fields/color-picker'

export interface IconBlockProps {
  icon: string
  size?: number
  color?: string
  alignment?: 'left' | 'center' | 'right'
}

const IconBlockComponent = ({
  icon,
  size = 24,
  color = '#000000',
  alignment = 'center',
}: IconBlockProps) => {
  const IconComponent = (Icons as any)[icon]

  if (!IconComponent) {
    return (
      <div style={{ textAlign: alignment, padding: '16px', color: '#9ca3af' }}>
        Icon &quot;{icon}&quot; not found
      </div>
    )
  }

  return (
    <div style={{ textAlign: alignment, padding: '16px' }}>
      <IconComponent size={size} color={color} />
    </div>
  )
}

export const IconBlock: ComponentConfig<IconBlockProps> = {
  label: 'Icon',
  render: IconBlockComponent,
  fields: {
    icon: iconPickerField,
    size: {
      type: 'number',
      label: 'Size (px)',
    },
    color: colorPickerField,
    alignment: {
      type: 'radio',
      label: 'Alignment',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' },
      ],
    },
  },
  defaultProps: {
    icon: 'Star',
    size: 24,
    color: '#3b82f6',
    alignment: 'center',
  },
}
