import { ComponentConfig, DropZone } from '@measured/puck'
import React from 'react'

export interface GridProps {
  columns: number
  gap: number
}

export const Grid: ComponentConfig<GridProps> = {
  label: 'Grid Layout',
  fields: {
    columns: {
      type: 'number',
      min: 1,
      max: 4,
    },
    gap: {
      type: 'select',
      options: [
        { label: 'Small', value: 4 },
        { label: 'Medium', value: 8 },
        { label: 'Large', value: 12 },
      ],
    },
  },
  defaultProps: {
    columns: 2,
    gap: 8,
  },
  render: ({ columns, gap }) => {
    return (
      <div
        className="grid w-full"
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          gap: `${gap * 0.25}rem`, // Tailwind spacing scale approximation
        }}
      >
        {Array.from({ length: columns }).map((_, i) => (
          <div key={i} className="flex flex-col">
            <DropZone zone={`column-${i}`} />
          </div>
        ))}
      </div>
    )
  },
}
