'use client'

import { ExternalField } from '@measured/puck'
import { useState, useRef, useEffect } from 'react'

interface ColorPickerFieldProps {
  label?: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

// Convert HSL to Hex
const hslToHex = (h: number, s: number, l: number): string => {
  l /= 100
  const a = (s * Math.min(l, 1 - l)) / 100
  const f = (n: number) => {
    const k = (n + h / 30) % 12
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0')
  }
  return `#${f(0)}${f(8)}${f(4)}`
}

// Convert Hex to HSL
const hexToHsl = (hex: string): { h: number; s: number; l: number } => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return { h: 0, s: 0, l: 0 }

  const r = parseInt(result[1], 16) / 255
  const g = parseInt(result[2], 16) / 255
  const b = parseInt(result[3], 16) / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6
        break
      case g:
        h = ((b - r) / d + 2) / 6
        break
      case b:
        h = ((r - g) / d + 4) / 6
        break
    }
  }

  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) }
}

export const ColorPickerField = ({
  label,
  value,
  onChange,
  placeholder,
}: ColorPickerFieldProps) => {
  const [showPicker, setShowPicker] = useState(false)
  const [customColor, setCustomColor] = useState(value || '#3b82f6')
  const [hue, setHue] = useState(220)
  const [saturation, setSaturation] = useState(100)
  const [lightness, setLightness] = useState(60)

  const satLightRef = useRef<HTMLDivElement>(null)
  const hueRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (customColor && customColor.startsWith('#')) {
      const hsl = hexToHsl(customColor)
      setHue(hsl.h)
      setSaturation(hsl.s)
      setLightness(hsl.l)
    }
  }, [])

  const updateColor = (h: number, s: number, l: number) => {
    const hex = hslToHex(h, s, l)
    setCustomColor(hex)
    onChange(hex)
  }

  const handleSatLightClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!satLightRef.current) return
    const rect = satLightRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const newSat = Math.round((x / rect.width) * 100)
    const newLight = Math.round(100 - (y / rect.height) * 100)
    setSaturation(newSat)
    setLightness(newLight)
    updateColor(hue, newSat, newLight)
  }

  const handleHueClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hueRef.current) return
    const rect = hueRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const newHue = Math.round((x / rect.width) * 360)
    setHue(newHue)
    updateColor(newHue, saturation, lightness)
  }

  const handleCustomColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value
    setCustomColor(newColor)
    onChange(newColor)
    if (newColor.startsWith('#') && newColor.length === 7) {
      const hsl = hexToHsl(newColor)
      setHue(hsl.h)
      setSaturation(hsl.s)
      setLightness(hsl.l)
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

      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        {/* Color Preview */}
        <div
          onClick={() => setShowPicker(!showPicker)}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '6px',
            border: '2px solid #d1d5db',
            backgroundColor: customColor || '#ffffff',
            cursor: 'pointer',
            flexShrink: 0,
          }}
          title="Click to open color picker"
        />

        {/* Custom Color Input */}
        <input
          type="text"
          value={customColor}
          onChange={handleCustomColorChange}
          placeholder={placeholder || 'Enter color (e.g., #000000)'}
          style={{
            flex: 1,
            padding: '8px 12px',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            fontSize: '14px',
            fontFamily: 'monospace',
          }}
        />
      </div>

      {/* Color Picker Palette */}
      {showPicker && (
        <div
          style={{
            marginTop: '12px',
            padding: '16px',
            backgroundColor: '#ffffff',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* Saturation & Lightness Picker */}
          <div
            ref={satLightRef}
            onClick={handleSatLightClick}
            style={{
              width: '100%',
              height: '200px',
              borderRadius: '6px',
              marginBottom: '12px',
              cursor: 'crosshair',
              position: 'relative',
              background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, hsl(${hue}, 100%, 50%))`,
            }}
          >
            {/* Selector */}
            <div
              style={{
                position: 'absolute',
                left: `${saturation}%`,
                top: `${100 - lightness}%`,
                width: '16px',
                height: '16px',
                border: '2px solid #fff',
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)',
                boxShadow: '0 0 0 1px rgba(0,0,0,0.3)',
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* Hue Slider */}
          <div
            ref={hueRef}
            onClick={handleHueClick}
            style={{
              width: '100%',
              height: '20px',
              borderRadius: '6px',
              marginBottom: '12px',
              cursor: 'pointer',
              position: 'relative',
              background:
                'linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #00f 83%, #f00 100%)',
            }}
          >
            {/* Hue Selector */}
            <div
              style={{
                position: 'absolute',
                left: `${(hue / 360) * 100}%`,
                top: '50%',
                width: '4px',
                height: '24px',
                backgroundColor: '#fff',
                border: '1px solid #000',
                borderRadius: '2px',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* Color Info */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              fontSize: '12px',
              color: '#6b7280',
              marginBottom: '12px',
            }}
          >
            <span>H: {hue}°</span>
            <span>S: {saturation}%</span>
            <span>L: {lightness}%</span>
          </div>

          <button
            onClick={() => setShowPicker(false)}
            style={{
              width: '100%',
              padding: '8px',
              backgroundColor: '#f3f4f6',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            Close Picker
          </button>
        </div>
      )}
    </div>
  )
}

export const colorPickerField: ExternalField<string> = {
  // @ts-ignore
  type: 'custom',
  render: ({ name, value, onChange }: any) => {
    return (
      <ColorPickerField
        label={name}
        value={value || ''}
        onChange={onChange}
        placeholder="Choose or enter a color"
      />
    )
  },
}
