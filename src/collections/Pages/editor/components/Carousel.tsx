'use client'

import { ComponentConfig } from '@measured/puck'
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { imagePickerField } from '../fields/image-picker'

export interface CarouselProps {
  slides: { image: string; caption?: string }[]
  autoPlay?: boolean
  interval?: number
  showControls?: boolean
  showIndicators?: boolean
}

const CarouselComponent = ({
  slides,
  autoPlay = false,
  interval = 5000,
  showControls = true,
  showIndicators = true,
}: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  React.useEffect(() => {
    if (!autoPlay || !slides || slides.length === 0) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, slides])

  if (!slides || slides.length === 0) {
    return (
      <div
        style={{
          padding: '64px',
          textAlign: 'center',
          backgroundColor: '#f9fafb',
          borderRadius: '8px',
          color: '#9ca3af',
        }}
      >
        Add slides to get started
      </div>
    )
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden', borderRadius: '8px' }}>
      {/* Slides */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: currentSlide === index ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
            }}
          >
            {slide.image && (
              <img
                src={slide.image}
                alt={slide.caption || `Slide ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            )}
            {slide.caption && (
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '16px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                  color: '#ffffff',
                  fontSize: '18px',
                }}
              >
                {slide.caption}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Controls */}
      {showControls && slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            }}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            style={{
              position: 'absolute',
              right: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            }}
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && slides.length > 1 && (
        <div
          style={{
            position: 'absolute',
            bottom: '16px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '8px',
          }}
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: currentSlide === index ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: currentSlide === index ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export const Carousel: ComponentConfig<CarouselProps> = {
  label: 'Carousel',
  render: CarouselComponent,
  fields: {
    slides: {
      type: 'array',
      label: 'Slides',
      arrayFields: {
        image: {
          // @ts-ignore
          type: 'custom',
          render: ({ field, name, value, onChange }: any) => {
            // eslint-disable-next-line @typescript-eslint/no-require-imports
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
      },
      getItemSummary: (item, index) => item.caption || `Slide ${(index || 0) + 1}`,
    },
    autoPlay: {
      type: 'radio',
      label: 'Auto Play',
      options: [
        { label: 'Yes', value: true },
        { label: 'No', value: false },
      ],
    },
    interval: {
      type: 'number',
      label: 'Auto Play Interval (ms)',
    },
    showControls: {
      type: 'radio',
      label: 'Show Controls',
      options: [
        { label: 'Yes', value: true },
        { label: 'No', value: false },
      ],
    },
    showIndicators: {
      type: 'radio',
      label: 'Show Indicators',
      options: [
        { label: 'Yes', value: true },
        { label: 'No', value: false },
      ],
    },
  },
  defaultProps: {
    slides: [],
    autoPlay: false,
    interval: 5000,
    showControls: true,
    showIndicators: true,
  },
}
