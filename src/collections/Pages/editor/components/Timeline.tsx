import { ComponentConfig } from '@measured/puck'
import React from 'react'
import { Check } from 'lucide-react'

export interface TimelineProps {
  events: {
    title: string
    date: string
    description?: string
  }[]
  orientation?: 'vertical' | 'horizontal'
}

const TimelineComponent = ({ events, orientation = 'vertical' }: TimelineProps) => {
  if (!events || events.length === 0) {
    return (
      <div style={{ padding: '64px', textAlign: 'center', color: '#9ca3af' }}>
        Add timeline events to get started
      </div>
    )
  }

  if (orientation === 'horizontal') {
    return (
      <div style={{ padding: '48px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              top: '20px',
              left: '0',
              right: '0',
              height: '2px',
              backgroundColor: '#e5e7eb',
            }}
          />
          {events.map((event, index) => (
            <div key={index} style={{ flex: 1, textAlign: 'center', position: 'relative' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#3b82f6',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <Check size={20} />
              </div>
              <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '8px' }}>
                {event.date}
              </div>
              <div style={{ fontWeight: '600', marginBottom: '4px' }}>{event.title}</div>
              {event.description && (
                <div style={{ fontSize: '14px', color: '#6b7280' }}>{event.description}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div style={{ padding: '48px 0' }}>
      {events.map((event, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            gap: '24px',
            marginBottom: index < events.length - 1 ? '32px' : '0',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#3b82f6',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Check size={20} />
            </div>
            {index < events.length - 1 && (
              <div
                style={{ width: '2px', flex: 1, backgroundColor: '#e5e7eb', marginTop: '8px' }}
              />
            )}
          </div>
          <div style={{ flex: 1, paddingBottom: '24px' }}>
            <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '8px' }}>
              {event.date}
            </div>
            <div style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
              {event.title}
            </div>
            {event.description && (
              <div style={{ color: '#6b7280', lineHeight: '1.6' }}>{event.description}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export const Timeline: ComponentConfig<TimelineProps> = {
  label: 'Timeline',
  render: TimelineComponent,
  fields: {
    events: {
      type: 'array',
      label: 'Timeline Events',
      arrayFields: {
        title: { type: 'text', label: 'Event Title' },
        date: { type: 'text', label: 'Date' },
        description: { type: 'textarea', label: 'Description' },
      },
      getItemSummary: (item) => `${item.date} - ${item.title}`,
    },
    orientation: {
      type: 'select',
      label: 'Orientation',
      options: [
        { label: 'Vertical', value: 'vertical' },
        { label: 'Horizontal', value: 'horizontal' },
      ],
    },
  },
  defaultProps: {
    events: [
      { title: 'Company Founded', date: '2020', description: 'Started our journey' },
      { title: 'First Product Launch', date: '2021', description: 'Launched our flagship product' },
      { title: 'Reached 10K Users', date: '2023', description: 'Growing community' },
    ],
    orientation: 'vertical',
  },
}
