'use client'

import { ExternalField } from '@measured/puck'
import { useState } from 'react'
import { Link2, Link2Off } from 'lucide-react'

interface BorderRadiusValue {
  topLeft?: string
  topRight?: string
  bottomRight?: string
  bottomLeft?: string
}

interface BorderRadiusFieldProps {
  label?: string
  value: BorderRadiusValue | string
  onChange: (value: BorderRadiusValue | string) => void
}

const RADIUS_PRESETS = [
  { name: 'None', value: '0' },
  { name: 'Small', value: '4px' },
  { name: 'Medium', value: '8px' },
  { name: 'Large', value: '16px' },
  { name: 'XL', value: '24px' },
  { name: 'Full', value: '9999px' },
]

export const BorderRadiusField = ({ label, value, onChange }: BorderRadiusFieldProps) => {
  const [linked, setLinked] = useState(true)
  const [showCustom, setShowCustom] = useState(false)

  // Parse value to object if it's a string
  const parseValue = (val: BorderRadiusValue | string): BorderRadiusValue => {
    if (typeof val === 'string') {
      return {
        topLeft: val,
        topRight: val,
        bottomRight: val,
        bottomLeft: val,
      }
    }
    return val
  }

  const currentValue = parseValue(value)

  const handlePresetSelect = (presetValue: string) => {
    onChange(presetValue)
    setShowCustom(false)
  }

  const handleCornerChange = (corner: keyof BorderRadiusValue, newValue: string) => {
    if (linked) {
      onChange(newValue)
    } else {
      onChange({
        ...currentValue,
        [corner]: newValue,
      })
    }
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

      {/* Presets */}
      <div style={{ marginBottom: '12px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '8px',
          }}
        >
          {RADIUS_PRESETS.map((preset) => (
            <button
              key={preset.name}
              onClick={() => handlePresetSelect(preset.value)}
              style={{
                padding: '12px',
                border: value === preset.value ? '2px solid #3b82f6' : '1px solid #d1d5db',
                borderRadius: '6px',
                backgroundColor: value === preset.value ? '#eff6ff' : '#ffffff',
                cursor: 'pointer',
                fontSize: '13px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '40px',
                  backgroundColor: '#f9fafb',
                  borderRadius: '4px',
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    width: '30px',
                    height: '30px',
                    backgroundColor: '#3b82f6',
                    borderRadius: preset.value,
                  }}
                />
              </div>
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      {/* Custom Radius Button */}
      <button
        onClick={() => setShowCustom(!showCustom)}
        style={{
          width: '100%',
          padding: '8px',
          backgroundColor: showCustom ? '#eff6ff' : '#f3f4f6',
          border: `1px solid ${showCustom ? '#3b82f6' : '#d1d5db'}`,
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px',
          marginBottom: showCustom ? '12px' : '0',
        }}
      >
        {showCustom ? 'Hide' : 'Show'} Custom Corners
      </button>

      {/* Custom Radius Editor */}
      {showCustom && (
        <div
          style={{
            padding: '16px',
            backgroundColor: '#f9fafb',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
          }}
        >
          {/* Link Button */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', alignItems: 'center' }}>
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
              title={linked ? 'Unlink corners' : 'Link all corners'}
            >
              {linked ? (
                <Link2 size={16} color="#3b82f6" />
              ) : (
                <Link2Off size={16} color="#6b7280" />
              )}
            </button>
            <span style={{ fontSize: '13px', color: '#6b7280' }}>
              {linked ? 'All corners linked' : 'Individual corners'}
            </span>
          </div>

          {/* Preview */}
          <div
            style={{
              marginBottom: '16px',
              padding: '32px',
              backgroundColor: '#ffffff',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '120px',
                height: '120px',
                backgroundColor: '#3b82f6',
                borderTopLeftRadius: currentValue.topLeft,
                borderTopRightRadius: currentValue.topRight,
                borderBottomRightRadius: currentValue.bottomRight,
                borderBottomLeftRadius: currentValue.bottomLeft,
              }}
            />
          </div>

          {/* Corner Inputs */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {/* Top Left */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '13px',
                  marginBottom: '4px',
                  color: '#6b7280',
                }}
              >
                Top Left
              </label>
              <input
                type="text"
                value={currentValue.topLeft || '0'}
                onChange={(e) => handleCornerChange('topLeft', e.target.value)}
                placeholder="0px"
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '14px',
                }}
              />
            </div>

            {/* Top Right */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '13px',
                  marginBottom: '4px',
                  color: '#6b7280',
                }}
              >
                Top Right
              </label>
              <input
                type="text"
                value={currentValue.topRight || '0'}
                onChange={(e) => handleCornerChange('topRight', e.target.value)}
                placeholder="0px"
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '14px',
                }}
              />
            </div>

            {/* Bottom Left */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '13px',
                  marginBottom: '4px',
                  color: '#6b7280',
                }}
              >
                Bottom Left
              </label>
              <input
                type="text"
                value={currentValue.bottomLeft || '0'}
                onChange={(e) => handleCornerChange('bottomLeft', e.target.value)}
                placeholder="0px"
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '14px',
                }}
              />
            </div>

            {/* Bottom Right */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '13px',
                  marginBottom: '4px',
                  color: '#6b7280',
                }}
              >
                Bottom Right
              </label>
              <input
                type="text"
                value={currentValue.bottomRight || '0'}
                onChange={(e) => handleCornerChange('bottomRight', e.target.value)}
                placeholder="0px"
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '14px',
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export const borderRadiusField: ExternalField<BorderRadiusValue | string> = {
  // @ts-ignore
  type: 'custom',
  render: ({ field, name, value, onChange }: any) => {
    return (
      <BorderRadiusField label={field.label || name} value={value || '0'} onChange={onChange} />
    )
  },
}
