'use client'

import { ComponentConfig } from '@measured/puck'
import React, { useState } from 'react'
import { X } from 'lucide-react'
import { imagePickerField } from '../fields/image-picker'

export interface ImageGalleryProps {
  images: { url: string; caption?: string; alt?: string }[]
  columns?: 2 | 3 | 4
  rows?: number
  gap?: string
  enableLightbox?: boolean
}

const ImageGalleryComponent = ({
  images,
  columns = 3,
  rows,
  gap = '16px',
  enableLightbox = true,
}: ImageGalleryProps) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  if (!images || images.length === 0) {
    return (
      <div
        style={{
          padding: '64px',
          textAlign: 'center',
          color: '#9ca3af',
          backgroundColor: '#f9fafb',
          borderRadius: '8px',
        }}
      >
        Add images to create a gallery
      </div>
    )
  }

  // Limit images based on rows if specified
  const maxImages = rows ? columns * rows : images.length
  const displayImages = images.slice(0, maxImages)

  const openLightbox = (index: number) => {
    if (enableLightbox) {
      setLightboxIndex(index)
    }
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
  }

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + images.length) % images.length)
    }
  }

  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap,
        }}
      >
        {displayImages.map((image, index) => (
          <div
            key={index}
            onClick={() => openLightbox(index)}
            style={{
              position: 'relative',
              aspectRatio: '1',
              overflow: 'hidden',
              borderRadius: '8px',
              cursor: enableLightbox ? 'pointer' : 'default',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => {
              if (enableLightbox) {
                e.currentTarget.style.transform = 'scale(1.05)'
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            <img
              src={image.url}
              alt={image.alt || image.caption || `Image ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            {image.caption && (
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '12px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                  color: '#ffffff',
                  fontSize: '14px',
                }}
              >
                {image.caption}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {enableLightbox && lightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#ffffff',
            }}
          >
            <X size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            style={{
              position: 'absolute',
              left: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              borderRadius: '4px',
              padding: '12px 16px',
              color: '#ffffff',
              cursor: 'pointer',
              fontSize: '18px',
            }}
          >
            ←
          </button>

          <img
            src={images[lightboxIndex].url}
            alt={images[lightboxIndex].alt || images[lightboxIndex].caption || ''}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              objectFit: 'contain',
            }}
          />

          <button
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            style={{
              position: 'absolute',
              right: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              borderRadius: '4px',
              padding: '12px 16px',
              color: '#ffffff',
              cursor: 'pointer',
              fontSize: '18px',
            }}
          >
            →
          </button>

          {images[lightboxIndex].caption && (
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                color: '#ffffff',
                fontSize: '16px',
                textAlign: 'center',
              }}
            >
              {images[lightboxIndex].caption}
            </div>
          )}
        </div>
      )}
    </>
  )
}

export const ImageGallery: ComponentConfig<ImageGalleryProps> = {
  label: 'Image Gallery',
  render: ImageGalleryComponent,
  fields: {
    images: {
      type: 'array',
      label: 'Images',
      arrayFields: {
        url: {
          // @ts-ignore
          type: 'custom',
          render: ({ field, name, value, onChange }: any) => {
            const ImagePickerField = require('../components/ImagePickerField').ImagePickerField
            return (
              <ImagePickerField
                label={field.label || name}
                value={value || ''}
                onChange={onChange}
                placeholder="Choose an image from your media library"
              />
            )
          },
        },

        caption: { type: 'text', label: 'Caption (optional)' },
        alt: { type: 'text', label: 'Alt Text' },
      },
      getItemSummary: (item, index) => item.caption || `Image ${index ?? 0 + 1}`,
    },
    columns: {
      type: 'select',
      label: 'Columns',
      options: [
        { label: '2 Columns', value: 2 },
        { label: '3 Columns', value: 3 },
        { label: '4 Columns', value: 4 },
      ],
    },
    rows: {
      type: 'number',
      label: 'Rows (leave empty for unlimited)',
    },
    gap: {
      type: 'text',
      label: 'Gap between images',
    },
    enableLightbox: {
      type: 'radio',
      label: 'Enable Lightbox',
      options: [
        { label: 'Yes', value: true },
        { label: 'No', value: false },
      ],
    },
  },
  defaultProps: {
    images: [],
    columns: 3,
    rows: undefined,
    gap: '16px',
    enableLightbox: true,
  },
}
