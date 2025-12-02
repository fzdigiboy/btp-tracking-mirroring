'use client'

import { ExternalField } from '@measured/puck'
import { useState } from 'react'
import * as Icons from 'lucide-react'
import { Search, X } from 'lucide-react'

interface IconPickerFieldProps {
  label?: string
  value: string
  onChange: (value: string) => void
}

// Popular Lucide icons
const POPULAR_ICONS = [
  'Home',
  'User',
  'Settings',
  'Search',
  'Mail',
  'Phone',
  'Calendar',
  'Clock',
  'MapPin',
  'Star',
  'Heart',
  'ShoppingCart',
  'CreditCard',
  'DollarSign',
  'TrendingUp',
  'BarChart',
  'PieChart',
  'Activity',
  'Award',
  'Target',
  'Zap',
  'Cpu',
  'Database',
  'Server',
  'Cloud',
  'Download',
  'Upload',
  'File',
  'Folder',
  'Image',
  'Video',
  'Music',
  'Mic',
  'Camera',
  'Printer',
  'Monitor',
  'Smartphone',
  'Tablet',
  'Watch',
  'Wifi',
  'Bluetooth',
  'Battery',
  'Lock',
  'Unlock',
  'Key',
  'Shield',
  'Eye',
  'EyeOff',
  'Bell',
  'MessageCircle',
  'MessageSquare',
  'Send',
  'Inbox',
  'Archive',
  'Trash',
  'Edit',
  'Copy',
  'Clipboard',
  'Check',
  'CheckCircle',
  'X',
  'XCircle',
  'AlertCircle',
  'AlertTriangle',
  'Info',
  'HelpCircle',
  'Plus',
  'Minus',
  'ChevronUp',
  'ChevronDown',
  'ChevronLeft',
  'ChevronRight',
  'ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'Menu',
  'MoreVertical',
  'MoreHorizontal',
  'Grid',
  'List',
  'Layout',
  'Columns',
  'Layers',
  'Package',
  'Box',
  'Briefcase',
  'BookOpen',
  'Book',
  'Bookmark',
  'Tag',
  'Globe',
  'Map',
  'Navigation',
  'Compass',
  'Anchor',
  'Umbrella',
  'Sun',
  'Moon',
  'CloudRain',
  'CloudSnow',
  'Wind',
  'Thermometer',
]

export const IconPickerField = ({ label, value, onChange }: IconPickerFieldProps) => {
  const [showPicker, setShowPicker] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredIcons = POPULAR_ICONS.filter((icon) =>
    icon.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getIconComponent = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName]
    return IconComponent ? <IconComponent size={24} /> : null
  }

  const handleIconSelect = (iconName: string) => {
    onChange(iconName)
    setShowPicker(false)
    setSearchQuery('')
  }

  return (
    <div style={{ marginBottom: '16px' }}>
      {label && (
        <label
          style={{
            display: 'block',
            marginBottom: '8px',
            fontSize: '14px',
            fontWeight: '500',
            color: '#374151',
          }}
        >
          {label}
        </label>
      )}

      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        {/* Icon Preview */}
        <div
          onClick={() => setShowPicker(!showPicker)}
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '6px',
            border: '2px solid #d1d5db',
            backgroundColor: '#f9fafb',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
          title="Click to select icon"
        >
          {value ? getIconComponent(value) : <Search size={24} color="#9ca3af" />}
        </div>

        {/* Icon Name Input */}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Icon name (e.g., Home)"
          style={{
            flex: 1,
            padding: '8px 12px',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            fontSize: '14px',
          }}
        />

        {/* Clear Button */}
        {value && (
          <button
            onClick={() => onChange('')}
            style={{
              padding: '8px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              backgroundColor: '#ffffff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Icon Picker Grid */}
      {showPicker && (
        <div
          style={{
            marginTop: '12px',
            padding: '16px',
            backgroundColor: '#ffffff',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            maxHeight: '400px',
            overflow: 'auto',
          }}
        >
          {/* Search */}
          <div style={{ marginBottom: '12px', position: 'relative' }}>
            <Search
              size={16}
              style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
              }}
              color="#9ca3af"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search icons..."
              style={{
                width: '100%',
                padding: '8px 12px 8px 36px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '14px',
              }}
            />
          </div>

          {/* Icons Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(48px, 1fr))',
              gap: '8px',
            }}
          >
            {filteredIcons.map((iconName) => (
              <div
                key={iconName}
                onClick={() => handleIconSelect(iconName)}
                style={{
                  padding: '12px',
                  border: value === iconName ? '2px solid #3b82f6' : '1px solid #e5e7eb',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: value === iconName ? '#eff6ff' : '#ffffff',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  if (value !== iconName) {
                    e.currentTarget.style.backgroundColor = '#f9fafb'
                    e.currentTarget.style.borderColor = '#d1d5db'
                  }
                }}
                onMouseLeave={(e) => {
                  if (value !== iconName) {
                    e.currentTarget.style.backgroundColor = '#ffffff'
                    e.currentTarget.style.borderColor = '#e5e7eb'
                  }
                }}
                title={iconName}
              >
                {getIconComponent(iconName)}
              </div>
            ))}
          </div>

          {filteredIcons.length === 0 && (
            <div
              style={{
                textAlign: 'center',
                padding: '32px',
                color: '#9ca3af',
                fontSize: '14px',
              }}
            >
              No icons found
            </div>
          )}

          <button
            onClick={() => {
              setShowPicker(false)
              setSearchQuery('')
            }}
            style={{
              marginTop: '12px',
              width: '100%',
              padding: '8px',
              backgroundColor: '#f3f4f6',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  )
}

export const iconPickerField: ExternalField<string> = {
  // @ts-ignore
  type: 'custom',
  render: ({ field, name, value, onChange }: any) => {
    return <IconPickerField label={field.label || name} value={value || ''} onChange={onChange} />
  },
}
