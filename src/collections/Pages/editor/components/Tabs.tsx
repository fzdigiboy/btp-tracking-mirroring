'use client'

import { ComponentConfig, DropZone } from '@measured/puck'
import React, { useState } from 'react'

export interface TabsProps {
  tabs: { title: string; id: string }[]
  defaultTab?: number
}

const TabsComponent = ({ tabs, defaultTab = 0, puck }: TabsProps & { puck?: any }) => {
  const [activeTab, setActiveTab] = useState(defaultTab)
  const isEditMode = !!puck?.isEdit

  if (!tabs || tabs.length === 0) {
    return (
      <div style={{ padding: '32px', textAlign: 'center', color: '#9ca3af' }}>
        Add tabs to get started
      </div>
    )
  }

  return (
    <div style={{ width: '100%' }}>
      {/* Tab Headers */}
      <div
        style={{
          display: 'flex',
          borderBottom: '2px solid #e5e7eb',
          gap: '4px',
        }}
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(index)}
            style={{
              padding: '12px 24px',
              border: 'none',
              borderBottom: activeTab === index ? '2px solid #3b82f6' : '2px solid transparent',
              backgroundColor: activeTab === index ? '#eff6ff' : 'transparent',
              color: activeTab === index ? '#3b82f6' : '#6b7280',
              fontWeight: activeTab === index ? '600' : '400',
              cursor: 'pointer',
              fontSize: '14px',
              transition: 'all 0.2s',
              marginBottom: '-2px',
            }}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {isEditMode ? (
        // Edit mode: Show all tabs with labels for easy editing
        <div style={{ padding: '24px 0' }}>
          {tabs.map((tab, index) => (
            <div
              key={tab.id}
              style={{
                marginBottom: '24px',
                padding: '16px',
                border: '2px dashed #d1d5db',
                borderRadius: '8px',
                backgroundColor: '#f9fafb',
              }}
            >
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span
                  style={{
                    backgroundColor: '#3b82f6',
                    color: '#ffffff',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                  }}
                >
                  Tab {index + 1}
                </span>
                {tab.title}
              </div>
              <DropZone zone={`tab-${tab.id}`} />
            </div>
          ))}
        </div>
      ) : (
        // Preview mode: Show only active tab
        <div style={{ padding: '24px 0' }}>
          {tabs.map((tab, index) => (
            <div
              key={tab.id}
              style={{
                display: activeTab === index ? 'block' : 'none',
              }}
            >
              <DropZone zone={`tab-${tab.id}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export const Tabs: ComponentConfig<TabsProps> = {
  label: 'Tabs',
  render: TabsComponent,
  fields: {
    tabs: {
      type: 'array',
      label: 'Tabs',
      arrayFields: {
        title: { type: 'text', label: 'Tab Title' },
        id: { type: 'text', label: 'Tab ID (unique)' },
      },
      defaultItemProps: {
        title: 'New Tab',
        id: 'tab-1',
      },
      getItemSummary: (item) => item.title || 'Tab',
    },
    defaultTab: {
      type: 'number',
      label: 'Default Active Tab (0-based index)',
    },
  },
  defaultProps: {
    tabs: [
      { title: 'Tab 1', id: 'tab-1' },
      { title: 'Tab 2', id: 'tab-2' },
      { title: 'Tab 3', id: 'tab-3' },
    ],
    defaultTab: 0,
  },
}
