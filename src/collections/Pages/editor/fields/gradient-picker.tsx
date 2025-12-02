'use client'

import { ExternalField } from '@measured/puck'
import { useState } from 'react'

interface GradientStop {
  color: string
  position: number
}

interface GradientPickerFieldProps {
  label?: string
  value: string
  onChange: (value: string) => void
}

const GRADIENT_PRESETS = [
  { name: 'Sunset', value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
  { name: 'Ocean', value: 'linear-gradient(135deg, #2E3192 0%, #1BFFFF 100%)' },
  { name: 'Fire', value: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
  { name: 'Forest', value: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
  { name: 'Purple', value: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)' },
  { name: 'Gold', value: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)' },
]

export const GradientPickerField = ({ label, value, onChange }: GradientPickerFieldProps) => {
  const [showCustom, setShowCustom] = useState(false)
  const [gradientType, setGradientType] = useState<'linear' | 'radial'>('linear')
  const [angle, setAngle] = useState(135)
  const [stops, setStops] = useState<GradientStop[]>([
    { color: '#667eea', position: 0 },
    { color: '#764ba2', position: 100 },
  ])

  const updateGradient = (type: 'linear' | 'radial', ang: number, gradStops: GradientStop[]) => {
    const sortedStops = [...gradStops].sort((a, b) => a.position - b.position)
    const stopsString = sortedStops.map((stop) => `${stop.color} ${stop.position}%`).join(', ')

    if (type === 'linear') {
      onChange(`linear-gradient(${ang}deg, ${stopsString})`)
    } else {
      onChange(`radial-gradient(circle, ${stopsString})`)
    }
  }

  const handlePresetSelect = (presetValue: string) => {
    onChange(presetValue)
    setShowCustom(false)
  }

  const handleAngleChange = (newAngle: number) => {
    setAngle(newAngle)
    updateGradient(gradientType, newAngle, stops)
  }

  const handleTypeChange = (newType: 'linear' | 'radial') => {
    setGradientType(newType)
    updateGradient(newType, angle, stops)
  }

  const handleStopColorChange = (index: number, newColor: string) => {
    const newStops = [...stops]
    newStops[index].color = newColor
    setStops(newStops)
    updateGradient(gradientType, angle, newStops)
  }

  const handleStopPositionChange = (index: number, newPosition: number) => {
    const newStops = [...stops]
    newStops[index].position = newPosition
    setStops(newStops)
    updateGradient(gradientType, angle, newStops)
  }

  const addStop = () => {
    const newStops = [...stops, { color: '#ffffff', position: 50 }]
    setStops(newStops)
    updateGradient(gradientType, angle, newStops)
  }

  const removeStop = (index: number) => {
    if (stops.length > 2) {
      const newStops = stops.filter((_, i) => i !== index)
      setStops(newStops)
      updateGradient(gradientType, angle, newStops)
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
          {GRADIENT_PRESETS.map((preset) => (
            <button
              key={preset.name}
              onClick={() => handlePresetSelect(preset.value)}
              style={{
                padding: '8px',
                border: value === preset.value ? '2px solid #3b82f6' : '1px solid #d1d5db',
                borderRadius: '6px',
                backgroundColor: '#ffffff',
                cursor: 'pointer',
                fontSize: '13px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '50px',
                  background: preset.value,
                  borderRadius: '4px',
                  marginBottom: '8px',
                }}
              />
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      {/* Custom Gradient Button */}
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
        {showCustom ? 'Hide' : 'Show'} Custom Gradient Editor
      </button>

      {/* Custom Gradient Editor */}
      {showCustom && (
        <div
          style={{
            padding: '16px',
            backgroundColor: '#f9fafb',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
          }}
        >
          {/* Preview */}
          <div
            style={{
              marginBottom: '16px',
              height: '120px',
              background: value,
              borderRadius: '8px',
              border: '1px solid #d1d5db',
            }}
          />

          {/* Gradient Type */}
          <div style={{ marginBottom: '12px' }}>
            <label
              style={{ display: 'block', fontSize: '13px', marginBottom: '8px', color: '#6b7280' }}
            >
              Type
            </label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => handleTypeChange('linear')}
                style={{
                  flex: 1,
                  padding: '8px',
                  border: `1px solid ${gradientType === 'linear' ? '#3b82f6' : '#d1d5db'}`,
                  borderRadius: '6px',
                  backgroundColor: gradientType === 'linear' ? '#eff6ff' : '#ffffff',
                  cursor: 'pointer',
                  fontSize: '14px',
                }}
              >
                Linear
              </button>
              <button
                onClick={() => handleTypeChange('radial')}
                style={{
                  flex: 1,
                  padding: '8px',
                  border: `1px solid ${gradientType === 'radial' ? '#3b82f6' : '#d1d5db'}`,
                  borderRadius: '6px',
                  backgroundColor: gradientType === 'radial' ? '#eff6ff' : '#ffffff',
                  cursor: 'pointer',
                  fontSize: '14px',
                }}
              >
                Radial
              </button>
            </div>
          </div>

          {/* Angle (Linear only) */}
          {gradientType === 'linear' && (
            <div style={{ marginBottom: '12px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '13px',
                  marginBottom: '4px',
                  color: '#6b7280',
                }}
              >
                Angle: {angle}°
              </label>
              <input
                type="range"
                min="0"
                max="360"
                value={angle}
                onChange={(e) => handleAngleChange(parseInt(e.target.value))}
                style={{ width: '100%' }}
              />
            </div>
          )}

          {/* Color Stops */}
          <div style={{ marginBottom: '12px' }}>
            <label
              style={{ display: 'block', fontSize: '13px', marginBottom: '8px', color: '#6b7280' }}
            >
              Color Stops
            </label>
            {stops.map((stop, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  gap: '8px',
                  marginBottom: '8px',
                  alignItems: 'center',
                }}
              >
                <input
                  type="color"
                  value={stop.color}
                  onChange={(e) => handleStopColorChange(index, e.target.value)}
                  style={{
                    width: '40px',
                    height: '40px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                />
                <input
                  type="text"
                  value={stop.color}
                  onChange={(e) => handleStopColorChange(index, e.target.value)}
                  style={{
                    flex: 1,
                    padding: '8px',
                    border: '1px solid #d1d5db',
                    borderRadius: '4px',
                    fontSize: '13px',
                    fontFamily: 'monospace',
                  }}
                />
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={stop.position}
                  onChange={(e) => handleStopPositionChange(index, parseInt(e.target.value))}
                  style={{
                    width: '60px',
                    padding: '8px',
                    border: '1px solid #d1d5db',
                    borderRadius: '4px',
                    fontSize: '13px',
                  }}
                />
                <span style={{ fontSize: '13px', color: '#6b7280' }}>%</span>
                {stops.length > 2 && (
                  <button
                    onClick={() => removeStop(index)}
                    style={{
                      padding: '8px',
                      border: '1px solid #ef4444',
                      borderRadius: '4px',
                      backgroundColor: '#fee2e2',
                      color: '#ef4444',
                      cursor: 'pointer',
                      fontSize: '13px',
                    }}
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={addStop}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                backgroundColor: '#ffffff',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              + Add Color Stop
            </button>
          </div>

          {/* CSS Output */}
          <div>
            <label
              style={{ display: 'block', fontSize: '13px', marginBottom: '4px', color: '#6b7280' }}
            >
              CSS Value
            </label>
            <input
              type="text"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '12px',
                fontFamily: 'monospace',
                backgroundColor: '#ffffff',
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export const gradientPickerField: ExternalField<string> = {
  // @ts-ignore
  type: 'custom',
  render: ({ field, name, value, onChange }: any) => {
    return (
      <GradientPickerField
        label={field.label || name}
        value={value || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}
        onChange={onChange}
      />
    )
  },
}
