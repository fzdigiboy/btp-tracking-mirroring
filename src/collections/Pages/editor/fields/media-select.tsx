'use client'

import { ExternalField } from '@measured/puck'
import { useEffect, useState } from 'react'

interface MediaSelectFieldProps {
  label?: string
  value: string
  onChange: (value: string) => void
  accept?: 'video' | 'audio' | 'image' | 'any'
}

interface MediaItem {
  id: string
  filename: string
  url: string
  mimeType: string
}

export const MediaSelectField = ({
  label,
  value,
  onChange,
  accept = 'any',
}: MediaSelectFieldProps) => {
  const [mediaList, setMediaList] = useState<MediaItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await fetch('/api/media?limit=100')

        if (!response.ok) {
          console.warn('Failed to fetch media list')
          setMediaList([])
          setLoading(false)
          return
        }

        const data = await response.json()

        let filteredDocs = data.docs || []

        // Filter by type if specified
        if (accept !== 'any') {
          filteredDocs = filteredDocs.filter((media: MediaItem) => {
            const mimeType = media.mimeType || ''
            return mimeType.startsWith(`${accept}/`)
          })
        }

        setMediaList(filteredDocs)
      } catch (error) {
        console.error('Error fetching media:', error)
        setMediaList([])
      } finally {
        setLoading(false)
      }
    }

    fetchMedia()
  }, [accept])

  const selectedMedia = mediaList.find((m) => m.url === value)

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

      {loading ? (
        <div style={{ padding: '12px', color: '#6b7280', fontSize: '14px' }}>Loading media...</div>
      ) : (
        <>
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 12px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '14px',
              backgroundColor: '#ffffff',
              color: '#1f2937',
              cursor: 'pointer',
            }}
          >
            <option value="" style={{ color: '#6b7280' }}>
              Select {accept === 'any' ? 'media' : accept}
            </option>
            {mediaList.map((media) => (
              <option key={media.id} value={media.url} style={{ color: '#1f2937' }}>
                {media.filename}
              </option>
            ))}
          </select>

          {/* Preview */}
          {value && selectedMedia && (
            <div
              style={{
                marginTop: '12px',
                padding: '12px',
                backgroundColor: '#f9fafb',
                borderRadius: '6px',
                border: '1px solid #e5e7eb',
              }}
            >
              {accept === 'video' && (
                <video
                  src={value}
                  controls
                  style={{ width: '100%', maxHeight: '200px', borderRadius: '4px' }}
                />
              )}
              {accept === 'audio' && <audio src={value} controls style={{ width: '100%' }} />}
              {accept === 'image' && (
                <img
                  src={value}
                  alt={selectedMedia.filename}
                  style={{
                    width: '100%',
                    maxHeight: '200px',
                    objectFit: 'contain',
                    borderRadius: '4px',
                  }}
                />
              )}
              <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '8px' }}>
                {selectedMedia.filename}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export const mediaSelectField = (
  accept: 'video' | 'audio' | 'image' | 'any' = 'any',
): ExternalField<string> => ({
  // @ts-ignore - Puck types are not perfect
  type: 'custom',
  render: ({ field, name, value, onChange }: any) => {
    return (
      <MediaSelectField
        label={field.label || name}
        value={value || ''}
        onChange={onChange}
        accept={accept}
      />
    )
  },
})
