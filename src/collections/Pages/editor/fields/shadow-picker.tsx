'use client'

import { ExternalField } from '@measured/puck'
import { useState } from 'react'
import { colorPickerField } from './color-picker'

interface ShadowPickerFieldProps {
  label?: string
  value: string
  onChange: (value: string) => void
}

const SHADOW_PRESETS = [
  { name: 'None', value: 'none' },
  { name: 'Small', value: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' },
  {
    name: 'Medium',
    value: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
  {
    name: 'Large',
    value: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
  {
    name: 'XL',
    value: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  { name: 'Inner', value: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)' },
]

export const ShadowPickerField = ({ label, value, onChange }: ShadowPickerFieldProps) => {
  const [showCustom, setShowCustom] = useState(false)
  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(4)
  const [blur, setBlur] = useState(6)
  const [spread, setSpread] = useState(0)
  const [color, setColor] = useState('rgba(0, 0, 0, 0.1)')
  const [inset, setInset] = useState(false)

  const updateShadow = (x: number, y: number, b: number, s: number, c: string, i: boolean) => {
    const shadowValue = `${i ? 'inset ' : ''}${x}px ${y}px ${b}px ${s}px ${c}`
    onChange(shadowValue)
  }

  const handlePresetSelect = (presetValue: string) => {
    onChange(presetValue)
    setShowCustom(false)
  }

  const handleSliderChange = (type: 'x' | 'y' | 'blur' | 'spread', newValue: number) => {
    let newX = offsetX
    let newY = offsetY
    let newBlur = blur
    let newSpread = spread

    switch (type) {
      case 'x':
        newX = newValue
        setOffsetX(newValue)
        break
      case 'y':
        newY = newValue
        setOffsetY(newValue)
        break
      case 'blur':
        newBlur = newValue
        setBlur(newValue)
        break
      case 'spread':
        newSpread = newValue
        setSpread(newValue)
        break
    }

    updateShadow(newX, newY, newBlur, newSpread, color, inset)
  }

  const handleColorChange = (newColor: string) => {
    setColor(newColor)
    updateShadow(offsetX, offsetY, blur, spread, newColor, inset)
  }

  const handleInsetChange = (newInset: boolean) => {
    setInset(newInset)
    updateShadow(offsetX, offsetY, blur, spread, color, newInset)
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
          {SHADOW_PRESETS.map((preset) => (
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
                    backgroundColor: '#ffffff',
                    borderRadius: '4px',
                    boxShadow: preset.value,
                  }}
                />
              </div>
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      {/* Custom Shadow Button */}
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
        {showCustom ? 'Hide' : 'Show'} Custom Shadow Editor
      </button>

      {/* Custom Shadow Editor */}
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
                width: '80px',
                height: '80px',
                backgroundColor: '#3b82f6',
                borderRadius: '8px',
                boxShadow: value,
              }}
            />
          </div>

          {/* Inset Checkbox */}
          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '12px',
              fontSize: '14px',
            }}
          >
            <input
              type="checkbox"
              checked={inset}
              onChange={(e) => handleInsetChange(e.target.checked)}
              style={{ width: '16px', height: '16px' }}
            />
            Inset Shadow
          </label>

          {/* Offset X */}
          <div style={{ marginBottom: '12px' }}>
            <label
              style={{ display: 'block', fontSize: '13px', marginBottom: '4px', color: '#6b7280' }}
            >
              Offset X: {offsetX}px
            </label>
            <input
              type="range"
              min="-50"
              max="50"
              value={offsetX}
              onChange={(e) => handleSliderChange('x', parseInt(e.target.value))}
              style={{ width: '100%' }}
            />
          </div>

          {/* Offset Y */}
          <div style={{ marginBottom: '12px' }}>
            <label
              style={{ display: 'block', fontSize: '13px', marginBottom: '4px', color: '#6b7280' }}
            >
              Offset Y: {offsetY}px
            </label>
            <input
              type="range"
              min="-50"
              max="50"
              value={offsetY}
              onChange={(e) => handleSliderChange('y', parseInt(e.target.value))}
              style={{ width: '100%' }}
            />
          </div>

          {/* Blur */}
          <div style={{ marginBottom: '12px' }}>
            <label
              style={{ display: 'block', fontSize: '13px', marginBottom: '4px', color: '#6b7280' }}
            >
              Blur: {blur}px
            </label>
            <input
              type="range"
              min="0"
              max="50"
              value={blur}
              onChange={(e) => handleSliderChange('blur', parseInt(e.target.value))}
              style={{ width: '100%' }}
            />
          </div>

          {/* Spread */}
          <div style={{ marginBottom: '12px' }}>
            <label
              style={{ display: 'block', fontSize: '13px', marginBottom: '4px', color: '#6b7280' }}
            >
              Spread: {spread}px
            </label>
            <input
              type="range"
              min="-20"
              max="20"
              value={spread}
              onChange={(e) => handleSliderChange('spread', parseInt(e.target.value))}
              style={{ width: '100%' }}
            />
          </div>

          {/* Color - Using text input for now, could integrate ColorPickerField */}
          <div style={{ marginBottom: '12px' }}>
            <label
              style={{ display: 'block', fontSize: '13px', marginBottom: '4px', color: '#6b7280' }}
            >
              Color
            </label>
            <input
              type="text"
              value={color}
              onChange={(e) => handleColorChange(e.target.value)}
              placeholder="rgba(0, 0, 0, 0.1)"
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '14px',
                fontFamily: 'monospace',
              }}
            />
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

export const shadowPickerField: ExternalField<string> = {
  // @ts-ignore
  type: 'custom',
  render: ({ field, name, value, onChange }: any) => {
    return (
      <ShadowPickerField label={field.label || name} value={value || 'none'} onChange={onChange} />
    )
  },
}
