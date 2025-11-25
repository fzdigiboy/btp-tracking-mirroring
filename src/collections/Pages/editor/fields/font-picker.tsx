'use client'

import { ExternalField } from '@measured/puck'
import { useState } from 'react'

interface FontPickerFieldProps {
  label?: string
  value: string
  onChange: (value: string) => void
}

const GOOGLE_FONTS = [
  'Inter',
  'Roboto',
  'Open Sans',
  'Lato',
  'Montserrat',
  'Poppins',
  'Raleway',
  'Nunito',
  'Playfair Display',
  'Merriweather',
  'Source Sans Pro',
  'Ubuntu',
  'Oswald',
  'Quicksand',
  'Rubik',
  'Work Sans',
  'Fira Sans',
  'Noto Sans',
  'Mukta',
  'Barlow',
]

export const FontPickerField = ({ label, value, onChange }: FontPickerFieldProps) => {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredFonts = GOOGLE_FONTS.filter((font) =>
    font.toLowerCase().includes(searchQuery.toLowerCase()),
  )

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

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: '100%',
          padding: '8px 12px',
          border: '1px solid #d1d5db',
          borderRadius: '6px',
          fontSize: '14px',
          backgroundColor: '#ffffff',
          fontFamily: value || 'inherit',
        }}
      >
        <option value="">Default</option>
        {GOOGLE_FONTS.map((font) => (
          <option key={font} value={font} style={{ fontFamily: font }}>
            {font}
          </option>
        ))}
      </select>

      {value && (
        <div
          style={{
            marginTop: '12px',
            padding: '16px',
            backgroundColor: '#f9fafb',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            fontFamily: value,
            fontSize: '18px',
          }}
        >
          The quick brown fox jumps over the lazy dog
        </div>
      )}
    </div>
  )
}

export const fontPickerField: ExternalField<string> = {
  type: 'custom',
  render: ({ field, name, value, onChange }: any) => {
    return <FontPickerField label={field.label || name} value={value || ''} onChange={onChange} />
  },
}
