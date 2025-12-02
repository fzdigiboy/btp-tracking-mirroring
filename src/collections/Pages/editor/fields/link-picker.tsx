'use client'

import { ExternalField } from '@measured/puck'
import { useState } from 'react'

interface LinkPickerFieldProps {
  label?: string
  value: { url: string; type: string; target?: string }
  onChange: (value: { url: string; type: string; target?: string }) => void
}

export const LinkPickerField = ({ label, value, onChange }: LinkPickerFieldProps) => {
  const [linkType, setLinkType] = useState(value?.type || 'external')
  const [url, setUrl] = useState(value?.url || '')
  const [target, setTarget] = useState(value?.target || '_self')

  const handleTypeChange = (newType: string) => {
    setLinkType(newType)
    let newUrl = ''
    if (newType === 'email') newUrl = 'mailto:'
    if (newType === 'phone') newUrl = 'tel:'
    setUrl(newUrl)
    onChange({ url: newUrl, type: newType, target })
  }

  const handleUrlChange = (newUrl: string) => {
    setUrl(newUrl)
    onChange({ url: newUrl, type: linkType, target })
  }

  const handleTargetChange = (newTarget: string) => {
    setTarget(newTarget)
    onChange({ url, type: linkType, target: newTarget })
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

      {/* Link Type */}
      <div style={{ marginBottom: '12px' }}>
        <label
          style={{ display: 'block', fontSize: '13px', marginBottom: '4px', color: '#6b7280' }}
        >
          Link Type
        </label>
        <select
          value={linkType}
          onChange={(e) => handleTypeChange(e.target.value)}
          style={{
            width: '100%',
            padding: '8px 12px',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            fontSize: '14px',
            backgroundColor: '#ffffff',
          }}
        >
          <option value="external">External URL</option>
          <option value="internal">Internal Page</option>
          <option value="anchor">Anchor (#section)</option>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
        </select>
      </div>

      {/* URL Input */}
      <div style={{ marginBottom: '12px' }}>
        <label
          style={{ display: 'block', fontSize: '13px', marginBottom: '4px', color: '#6b7280' }}
        >
          {linkType === 'email' ? 'Email Address' : linkType === 'phone' ? 'Phone Number' : 'URL'}
        </label>
        <input
          type="text"
          value={url}
          onChange={(e) => handleUrlChange(e.target.value)}
          placeholder={
            linkType === 'external'
              ? 'https://example.com'
              : linkType === 'internal'
                ? '/about'
                : linkType === 'anchor'
                  ? '#section-name'
                  : linkType === 'email'
                    ? 'mailto:email@example.com'
                    : 'tel:+1234567890'
          }
          style={{
            width: '100%',
            padding: '8px 12px',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            fontSize: '14px',
          }}
        />
      </div>

      {/* Target (for external links only) */}
      {linkType === 'external' && (
        <div>
          <label
            style={{ display: 'block', fontSize: '13px', marginBottom: '4px', color: '#6b7280' }}
          >
            Open In
          </label>
          <select
            value={target}
            onChange={(e) => handleTargetChange(e.target.value)}
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '14px',
              backgroundColor: '#ffffff',
            }}
          >
            <option value="_self">Same Tab</option>
            <option value="_blank">New Tab</option>
          </select>
        </div>
      )}
    </div>
  )
}

export const linkPickerField: ExternalField<{ url: string; type: string; target?: string }> = {
  // @ts-ignore
  type: 'custom',
  render: ({ field, name, value, onChange }: any) => {
    return (
      <LinkPickerField
        label={field.label || name}
        value={value || { url: '', type: 'external', target: '_self' }}
        onChange={onChange}
      />
    )
  },
}
