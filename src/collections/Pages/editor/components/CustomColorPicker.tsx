import { CustomField } from '@measured/puck'
import { useState } from 'react'

export interface ColorPickerFieldProps {
  field: {
    label?: string
  }
  name: string
  value: string
  onChange: (value: string) => void
}

function ColorPickerFieldRender({ field, name, value, onChange }: ColorPickerFieldProps) {
    const [showPicker, setShowPicker] = useState(false)
    const [tempColor, setTempColor] = useState(value || '#000000')

    return (
      <div style={{ marginBottom: '16px' }}>
        <label
          style={{
            display: 'block',
            marginBottom: '8px',
            fontSize: '14px',
            fontWeight: '500',
          }}
        >
          {field.label || name}
        </label>
        
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {/* Preview box */}
          <div
            onClick={() => setShowPicker(!showPicker)}
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: value || '#000000',
              border: '2px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          />
          
          {/* Text input */}
          <input
            type="text"
            value={value || '#000000'}
            onChange={(e) => {
              const newValue = e.target.value
              setTempColor(newValue)
              onChange(newValue)
            }}
            style={{
              flex: 1,
              padding: '8px 12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '14px',
              fontFamily: 'monospace',
            }}
            placeholder="#000000"
          />
        </div>

        {/* Color picker popup */}
        {showPicker && (
          <div
            style={{
              position: 'absolute',
              zIndex: 1000,
              marginTop: '8px',
              padding: '16px',
              backgroundColor: 'white',
              border: '1px solid #ddd',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            }}
          >
            <input
              type="color"
              value={value || '#000000'}
              onChange={(e) => {
                const newValue = e.target.value
                setTempColor(newValue)
                onChange(newValue)
              }}
              style={{
                width: '200px',
                height: '150px',
                border: 'none',
                cursor: 'pointer',
              }}
            />
            
            <div style={{ marginTop: '12px', display: 'flex', gap: '8px' }}>
              <button
                onClick={() => setShowPicker(false)}
                style={{
                  flex: 1,
                  padding: '8px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px',
                }}
              >
                Done
              </button>
              <button
                onClick={() => {
                  setShowPicker(false)
                  onChange('#000000')
                }}
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px',
                }}
              >
                Reset
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }

export const ColorPickerField: CustomField<string> = {
  type: 'custom',
  render: ColorPickerFieldRender,
}