'use client'

import { ExternalField } from '@measured/puck'
import { useState } from 'react'
import { Monitor, Tablet, Smartphone } from 'lucide-react'

interface ResponsiveValue {
  mobile?: string
  tablet?: string
  desktop?: string
}

interface ResponsiveFieldProps {
  label?: string
  value: ResponsiveValue
  onChange: (value: ResponsiveValue) => void
  placeholder?: string
}

export const ResponsiveField = ({ label, value, onChange, placeholder }: ResponsiveFieldProps) => {
  const [activeBreakpoint, setActiveBreakpoint] = useState<'mobile' | 'tablet' | 'desktop'>(
    'desktop',
  )

  const handleValueChange = (breakpoint: 'mobile' | 'tablet' | 'desktop', newValue: string) => {
    onChange({
      ...value,
      [breakpoint]: newValue,
    })
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

      {/* Breakpoint Tabs */}
      <div
        style={{
          display: 'flex',
          gap: '4px',
          marginBottom: '12px',
          border: '1px solid #d1d5db',
          borderRadius: '6px',
          padding: '4px',
          backgroundColor: '#f9fafb',
        }}
      >
        <button
          onClick={() => setActiveBreakpoint('mobile')}
          style={{
            flex: 1,
            padding: '8px',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: activeBreakpoint === 'mobile' ? '#ffffff' : 'transparent',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            fontSize: '13px',
            fontWeight: activeBreakpoint === 'mobile' ? '500' : '400',
            color: activeBreakpoint === 'mobile' ? '#3b82f6' : '#6b7280',
            boxShadow: activeBreakpoint === 'mobile' ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
          }}
        >
          <Smartphone size={16} />
          Mobile
        </button>
        <button
          onClick={() => setActiveBreakpoint('tablet')}
          style={{
            flex: 1,
            padding: '8px',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: activeBreakpoint === 'tablet' ? '#ffffff' : 'transparent',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            fontSize: '13px',
            fontWeight: activeBreakpoint === 'tablet' ? '500' : '400',
            color: activeBreakpoint === 'tablet' ? '#3b82f6' : '#6b7280',
            boxShadow: activeBreakpoint === 'tablet' ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
          }}
        >
          <Tablet size={16} />
          Tablet
        </button>
        <button
          onClick={() => setActiveBreakpoint('desktop')}
          style={{
            flex: 1,
            padding: '8px',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: activeBreakpoint === 'desktop' ? '#ffffff' : 'transparent',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            fontSize: '13px',
            fontWeight: activeBreakpoint === 'desktop' ? '500' : '400',
            color: activeBreakpoint === 'desktop' ? '#3b82f6' : '#6b7280',
            boxShadow: activeBreakpoint === 'desktop' ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
          }}
        >
          <Monitor size={16} />
          Desktop
        </button>
      </div>

      {/* Value Input */}
      <input
        type="text"
        value={value[activeBreakpoint] || ''}
        onChange={(e) => handleValueChange(activeBreakpoint, e.target.value)}
        placeholder={placeholder || `Value for ${activeBreakpoint}`}
        style={{
          width: '100%',
          padding: '8px 12px',
          border: '1px solid #d1d5db',
          borderRadius: '6px',
          fontSize: '14px',
        }}
      />

      {/* Info */}
      <div
        style={{
          marginTop: '8px',
          fontSize: '12px',
          color: '#6b7280',
          display: 'flex',
          gap: '12px',
        }}
      >
        <span>📱 Mobile: {value.mobile || 'inherit'}</span>
        <span>📱 Tablet: {value.tablet || 'inherit'}</span>
        <span>🖥️ Desktop: {value.desktop || 'inherit'}</span>
      </div>
    </div>
  )
}

export const responsiveField: ExternalField<ResponsiveValue> = {
  // @ts-ignore
  type: 'custom',
  render: ({ field, name, value, onChange }: any) => {
    return (
      <ResponsiveField
        label={field.label || name}
        value={value || { mobile: '', tablet: '', desktop: '' }}
        onChange={onChange}
        placeholder={field.placeholder}
      />
    )
  },
}
