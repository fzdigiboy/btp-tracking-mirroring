'use client'

import { ComponentConfig } from '@measured/puck'
import React, { useState, useEffect } from 'react'
import { iconPickerField } from '../fields/icon-picker'
import { colorPickerField } from '../fields/color-picker'
import * as Icons from 'lucide-react'

export interface StatsCounterProps {
  stats: {
    value: string
    label: string
    icon?: string
    color?: string
    suffix?: string
  }[]
  columns?: 2 | 3 | 4
}

const StatsCounterComponent = ({ stats, columns = 4 }: StatsCounterProps) => {
  if (!stats || stats.length === 0) {
    return (
      <div style={{ padding: '64px', textAlign: 'center', color: '#9ca3af' }}>
        Add statistics to get started
      </div>
    )
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: '32px',
        padding: '48px 0',
      }}
    >
      {stats.map((stat, index) => {
        const IconComponent = stat.icon ? (Icons as any)[stat.icon] : null

        return (
          <div
            key={index}
            style={{
              textAlign: 'center',
              padding: '24px',
              borderRadius: '12px',
              backgroundColor: '#f9fafb',
            }}
          >
            {IconComponent && (
              <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
                <IconComponent size={40} color={stat.color || '#3b82f6'} />
              </div>
            )}
            <div
              style={{
                fontSize: '48px',
                fontWeight: '700',
                color: stat.color || '#111827',
                marginBottom: '8px',
              }}
            >
              {stat.value}
              {stat.suffix && <span style={{ fontSize: '32px' }}>{stat.suffix}</span>}
            </div>
            <div style={{ fontSize: '16px', color: '#6b7280', fontWeight: '500' }}>
              {stat.label}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export const StatsCounter: ComponentConfig<StatsCounterProps> = {
  label: 'Stats Counter',
  render: StatsCounterComponent,
  fields: {
    stats: {
      type: 'array',
      label: 'Statistics',
      arrayFields: {
        value: { type: 'text', label: 'Value (e.g., 1000, 99)' },
        suffix: { type: 'text', label: 'Suffix (e.g., +, %, K)' },
        label: { type: 'text', label: 'Label' },
        icon: iconPickerField,
        color: colorPickerField,
      },
      getItemSummary: (item) => item.label || 'Stat',
    },
    columns: {
      type: 'select',
      label: 'Columns',
      options: [
        { label: '2 Columns', value: 2 },
        { label: '3 Columns', value: 3 },
        { label: '4 Columns', value: 4 },
      ],
    },
  },
  defaultProps: {
    stats: [
      { value: '10K', suffix: '+', label: 'Happy Customers', icon: 'Users', color: '#3b82f6' },
      { value: '99', suffix: '%', label: 'Satisfaction Rate', icon: 'Star', color: '#f59e0b' },
      { value: '24', suffix: '/7', label: 'Support Available', icon: 'Clock', color: '#10b981' },
      { value: '50', suffix: '+', label: 'Countries Served', icon: 'Globe', color: '#8b5cf6' },
    ],
    columns: 4,
  },
}
