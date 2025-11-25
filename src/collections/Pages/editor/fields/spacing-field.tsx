'use client'

import { ExternalField } from '@measured/puck'
import { useState } from 'react'
import { Link2, Link2Off } from 'lucide-react'

interface SpacingValue {
  top?: string
  right?: string
  bottom?: string
  left?: string
}

interface SpacingFieldProps {
  label?: string
  value: SpacingValue
  onChange: (value: SpacingValue) => void
}

export const SpacingField = ({ label, value, onChange }: SpacingFieldProps) => {
  const [linked, setLinked] = useState(false)
  const [unit, setUnit] = useState('px')

  const handleChange = (side: keyof SpacingValue, newValue: string) => {
    if (linked) {
      onChange({
        top: newValue,
        right: newValue,
        bottom: newValue,
        left: newValue,
      })
    } else {
      onChange({
        ...value,
        [side]: newValue,
      })
    }
  }

  const handleUnitChange = (newUnit: string) => {
    setUnit(newUnit)
    // Convert existing values to new unit
    const convertedValue: SpacingValue = {}
    Object.entries(value).forEach(([key, val]) => {
      if (val) {
        const numericValue = parseFloat(val)
        if (!isNaN(numericValue)) {
          convertedValue[key as keyof SpacingValue] = `${numericValue}${newUnit}`
        }
      }
    })
    onChange(convertedValue)
  }

  const extractNumericValue = (val?: string) => {
    if (!val) return ''
    return val.replace(/[^0-9.-]/g, '')
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

      <div
        style={{
          border: '1px solid #d1d5db',
          borderRadius: '8px',
          padding: '16px',
          backgroundColor: '#f9fafb',
        }}
      >
        {/* Controls Row */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', alignItems: 'center' }}>
          {/* Link Button */}
          <button
            onClick={() => setLinked(!linked)}
            style={{
              padding: '6px',
              border: `1px solid ${linked ? '#3b82f6' : '#d1d5db'}`,
              borderRadius: '4px',
              backgroundColor: linked ? '#eff6ff' : '#ffffff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            title={linked ? 'Unlink sides' : 'Link all sides'}
          >
            {linked ? <Link2 size={16} color="#3b82f6" /> : <Link2Off size={16} color="#6b7280" />}
          </button>

          {/* Unit Selector */}
          <select
            value={unit}
            onChange={(e) => handleUnitChange(e.target.value)}
            style={{
              padding: '6px 8px',
              border: '1px solid #d1d5db',
              borderRadius: '4px',
              fontSize: '14px',
              backgroundColor: '#ffffff',
            }}
          >
            <option value="px">px</option>
            <option value="rem">rem</option>
            <option value="em">em</option>
            <option value="%">%</option>
          </select>
        </div>

        {/* Visual Spacing Editor */}
        <div style={{ position: 'relative' }}>
          {/* Top */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', color: '#6b7280', marginBottom: '4px' }}>Top</span>
              <input
                type="text"
                value={extractNumericValue(value.top)}
                onChange={(e) => handleChange('top', `${e.target.value}${unit}`)}
                placeholder="0"
                style={{
                  width: '60px',
                  padding: '4px 8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  textAlign: 'center',
                  fontSize: '13px',
                }}
              />
            </div>
          </div>

          {/* Middle Row: Left, Center Box, Right */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            {/* Left */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', color: '#6b7280', marginBottom: '4px' }}>Left</span>
              <input
                type="text"
                value={extractNumericValue(value.left)}
                onChange={(e) => handleChange('left', `${e.target.value}${unit}`)}
                placeholder="0"
                style={{
                  width: '60px',
                  padding: '4px 8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  textAlign: 'center',
                  fontSize: '13px',
                }}
              />
            </div>

            {/* Center Visual Box */}
            <div
              style={{
                flex: 1,
                height: '80px',
                border: '2px dashed #d1d5db',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#ffffff',
                fontSize: '12px',
                color: '#9ca3af',
              }}
            >
              Content
            </div>

            {/* Right */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', color: '#6b7280', marginBottom: '4px' }}>Right</span>
              <input
                type="text"
                value={extractNumericValue(value.right)}
                onChange={(e) => handleChange('right', `${e.target.value}${unit}`)}
                placeholder="0"
                style={{
                  width: '60px',
                  padding: '4px 8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  textAlign: 'center',
                  fontSize: '13px',
                }}
              />
            </div>
          </div>

          {/* Bottom */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', color: '#6b7280', marginBottom: '4px' }}>
                Bottom
              </span>
              <input
                type="text"
                value={extractNumericValue(value.bottom)}
                onChange={(e) => handleChange('bottom', `${e.target.value}${unit}`)}
                placeholder="0"
                style={{
                  width: '60px',
                  padding: '4px 8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  textAlign: 'center',
                  fontSize: '13px',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const spacingField: ExternalField<SpacingValue> = {
  type: 'custom',
  render: ({ field, name, value, onChange }: any) => {
    return (
      <SpacingField
        label={field.label || name}
        value={value || { top: '0px', right: '0px', bottom: '0px', left: '0px' }}
        onChange={onChange}
      />
    )
  },
}
