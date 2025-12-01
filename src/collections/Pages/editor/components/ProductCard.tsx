import { ComponentConfig } from '@measured/puck'
import React from 'react'
import { ShoppingCart } from 'lucide-react'
import { imagePickerField } from '../fields/image-picker'

export interface ProductCardProps {
  image: string
  name: string
  price: string
  originalPrice?: string
  badge?: string
  badgeColor?: string
  description?: string
  buttonText?: string
}

const ProductCardComponent = ({
  image,
  name,
  price,
  originalPrice,
  badge,
  badgeColor = '#10b981',
  description,
  buttonText = 'Add to Cart',
}: ProductCardProps) => {
  return (
    <div
      style={{
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid #e5e7eb',
        backgroundColor: '#ffffff',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <div style={{ position: 'relative', aspectRatio: '1', overflow: 'hidden' }}>
        {image && (
          <img
            src={image}
            alt={name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        )}
        {badge && (
          <div
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              backgroundColor: badgeColor,
              color: '#ffffff',
              padding: '4px 12px',
              borderRadius: '12px',
              fontSize: '12px',
              fontWeight: '600',
            }}
          >
            {badge}
          </div>
        )}
      </div>
      <div style={{ padding: '20px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>{name}</h3>
        {description && (
          <p
            style={{ fontSize: '14px', color: '#6b7280', marginBottom: '12px', lineHeight: '1.5' }}
          >
            {description}
          </p>
        )}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '16px' }}>
          <span style={{ fontSize: '24px', fontWeight: '700' }}>{price}</span>
          {originalPrice && (
            <span style={{ fontSize: '16px', color: '#9ca3af', textDecoration: 'line-through' }}>
              {originalPrice}
            </span>
          )}
        </div>
        <button
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#3b82f6',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          <ShoppingCart size={18} />
          {buttonText}
        </button>
      </div>
    </div>
  )
}

export const ProductCard: ComponentConfig<ProductCardProps> = {
  label: 'Product Card',
  render: ProductCardComponent,
  fields: {
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

    name: { type: 'text', label: 'Product Name' },
    price: { type: 'text', label: 'Price' },
    originalPrice: { type: 'text', label: 'Original Price (optional)' },
    badge: { type: 'text', label: 'Badge Text (e.g., SALE, NEW)' },
    badgeColor: { type: 'text', label: 'Badge Color' },
    description: { type: 'textarea', label: 'Description' },
    buttonText: { type: 'text', label: 'Button Text' },
  },
  defaultProps: {
    image: '',
    name: 'Product Name',
    price: '$99',
    originalPrice: '',
    badge: '',
    badgeColor: '#10b981',
    description: '',
    buttonText: 'Add to Cart',
  },
}
