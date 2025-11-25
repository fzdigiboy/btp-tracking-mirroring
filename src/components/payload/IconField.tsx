'use client'

import React, { useState, useEffect } from 'react'
import { useField } from '@payloadcms/ui'
import { TextFieldClientProps } from 'payload'

export const IconField: React.FC<TextFieldClientProps> = ({ field, path, readOnly }) => {
  const { value, setValue } = useField<string>({ path })
  const [preview, setPreview] = useState<string>('')
  const [mediaList, setMediaList] = useState<any[]>([])
  const [loadingMedia, setLoadingMedia] = useState(false)
  const [mode, setMode] = useState<'select' | 'paste' | null>(null)

  useEffect(() => {
    if (value) {
      setPreview(value)
      // If there's a value but no mode set yet, default to paste so they can see/edit it
      if (!mode) setMode('paste')
    } else {
      setPreview('')
    }
  }, [value])

  useEffect(() => {
    const fetchMedia = async () => {
      setLoadingMedia(true)
      try {
        const response = await fetch('/api/media?limit=50&where[mimeType][equals]=image/svg+xml')
        if (response.ok) {
          const data = await response.json()
          setMediaList(data.docs || [])
        }
      } catch (error) {
        console.error('Error fetching media:', error)
      } finally {
        setLoadingMedia(false)
      }
    }
    fetchMedia()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }

  const handleMediaSelect = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const url = e.target.value
    if (!url) return

    try {
      const response = await fetch(url)
      if (response.ok) {
        const svgText = await response.text()
        // Basic cleanup if needed, but usually raw SVG is fine
        setValue(svgText)
      }
    } catch (error) {
      console.error('Error fetching SVG content:', error)
    }
  }

  return (
    <div className="field-type">
      <label className="field-label">{field.label as string}</label>

      <div style={{ marginBottom: '16px', display: 'flex', gap: '12px' }}>
        <button
          type="button"
          onClick={() => setMode('select')}
          style={{
            padding: '8px 16px',
            borderRadius: '4px',
            border: '1px solid var(--theme-elevation-150)',
            background: mode === 'select' ? 'var(--theme-elevation-150)' : 'transparent',
            cursor: 'pointer',
            fontSize: '13px',
            fontWeight: 500,
          }}
        >
          Select from Media
        </button>
        <button
          type="button"
          onClick={() => setMode('paste')}
          style={{
            padding: '8px 16px',
            borderRadius: '4px',
            border: '1px solid var(--theme-elevation-150)',
            background: mode === 'paste' ? 'var(--theme-elevation-150)' : 'transparent',
            cursor: 'pointer',
            fontSize: '13px',
            fontWeight: 500,
          }}
        >
          Paste Code
        </button>
      </div>

      {mode === 'select' && (
        <div style={{ marginBottom: '12px' }}>
          <select
            onChange={handleMediaSelect}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid var(--theme-elevation-150)',
              borderRadius: '4px',
              background: 'var(--theme-elevation-50)',
              color: 'var(--theme-elevation-800)',
            }}
          >
            <option value="">-- Select an SVG --</option>
            {mediaList.map((media) => (
              <option key={media.id} value={media.url}>
                {media.filename}
              </option>
            ))}
          </select>
        </div>
      )}

      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
        {mode === 'paste' && (
          <div style={{ flex: 1 }}>
            <textarea
              className="field-input"
              value={value || ''}
              onChange={handleChange}
              disabled={readOnly}
              placeholder="Paste your SVG code here..."
              style={{
                width: '100%',
                minHeight: '150px',
                padding: '12px',
                fontFamily: 'monospace',
                fontSize: '14px',
                border: '1px solid var(--theme-elevation-150)',
                borderRadius: '4px',
                background: 'var(--theme-elevation-50)',
                color: 'var(--theme-elevation-800)',
              }}
            />
            <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>
              Paste raw SVG code (starting with &lt;svg&gt;).
            </div>
          </div>
        )}

        {preview && (
          <div
            style={{
              width: '150px',
              height: '150px',
              border: '1px solid var(--theme-elevation-150)',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--theme-elevation-50)',
              padding: '10px',
              overflow: 'hidden',
              marginLeft: mode === 'select' ? '0' : 'auto',
            }}
          >
            <div
              dangerouslySetInnerHTML={{ __html: preview }}
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              className="svg-preview"
            />
          </div>
        )}
      </div>
      <style jsx global>{`
        .svg-preview svg {
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
        }
      `}</style>
    </div>
  )
}
