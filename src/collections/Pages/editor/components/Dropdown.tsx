'use client'

import { ComponentConfig, DropZone } from '@measured/puck'
import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export interface DropdownProps {
  title?: string
  defaultOpen?: boolean
}

const DropdownComponent = ({ title = 'Click to expand', defaultOpen = false }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: '16px',
          backgroundColor: '#f9fafb',
          border: 'none',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: '600',
          transition: 'background-color 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#f3f4f6'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#f9fafb'
        }}
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div style={{ padding: '16px', backgroundColor: '#ffffff' }}>
          <DropZone zone="dropdown-content" />
        </div>
      )}
    </div>
  )
}

export const Dropdown: ComponentConfig<DropdownProps> = {
  label: 'Dropdown',
  render: DropdownComponent,
  fields: {
    title: { type: 'text', label: 'Title' },
    defaultOpen: {
      type: 'radio',
      label: 'Default State',
      options: [
        { label: 'Open', value: true },
        { label: 'Closed', value: false },
      ],
    },
  },
  defaultProps: {
    title: 'Click to expand',
    defaultOpen: false,
  },
}
