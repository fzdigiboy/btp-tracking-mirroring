'use client'

import { ComponentConfig } from '@measured/puck'
import React, { useState } from 'react'
import { ShoppingCart, X, Minus, Plus } from 'lucide-react'

export interface CartPreviewProps {
  items: {
    name: string
    price: number
    quantity: number
    image?: string
  }[]
}

const CartPreviewComponent = ({ items }: CartPreviewProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const totalItems = items?.reduce((sum, item) => sum + item.quantity, 0) || 0
  const totalPrice = items?.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: 'relative',
          padding: '12px 20px',
          backgroundColor: '#3b82f6',
          color: '#ffffff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '14px',
          fontWeight: '600',
        }}
      >
        <ShoppingCart size={20} />
        Cart
        {totalItems > 0 && (
          <span
            style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              backgroundColor: '#ef4444',
              color: '#ffffff',
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: '700',
            }}
          >
            {totalItems}
          </span>
        )}
      </button>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '400px',
              maxWidth: '100%',
              backgroundColor: '#ffffff',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                padding: '24px',
                borderBottom: '1px solid #e5e7eb',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <h2 style={{ fontSize: '24px', fontWeight: '700', margin: 0 }}>Shopping Cart</h2>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px',
                }}
              >
                <X size={24} />
              </button>
            </div>

            <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
              {!items || items.length === 0 ? (
                <div style={{ textAlign: 'center', color: '#9ca3af', padding: '64px 0' }}>
                  Your cart is empty
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {items.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        gap: '16px',
                        padding: '16px',
                        backgroundColor: '#f9fafb',
                        borderRadius: '8px',
                      }}
                    >
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{
                            width: '80px',
                            height: '80px',
                            objectFit: 'cover',
                            borderRadius: '6px',
                          }}
                        />
                      )}
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: '600', marginBottom: '4px' }}>{item.name}</div>
                        <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '8px' }}>
                          ${item.price.toFixed(2)}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <button
                            style={{
                              width: '24px',
                              height: '24px',
                              border: '1px solid #d1d5db',
                              borderRadius: '4px',
                              backgroundColor: '#ffffff',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <Minus size={14} />
                          </button>
                          <span style={{ fontSize: '14px', fontWeight: '600' }}>
                            {item.quantity}
                          </span>
                          <button
                            style={{
                              width: '24px',
                              height: '24px',
                              border: '1px solid #d1d5db',
                              borderRadius: '4px',
                              backgroundColor: '#ffffff',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div
              style={{
                padding: '24px',
                borderTop: '1px solid #e5e7eb',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '16px',
                  fontSize: '18px',
                  fontWeight: '700',
                }}
              >
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <button
                style={{
                  width: '100%',
                  padding: '14px',
                  backgroundColor: '#3b82f6',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export const CartPreview: ComponentConfig<CartPreviewProps> = {
  label: 'Cart Preview',
  render: CartPreviewComponent,
  fields: {
    items: {
      type: 'array',
      label: 'Cart Items (for preview)',
      arrayFields: {
        name: { type: 'text', label: 'Product Name' },
        price: { type: 'number', label: 'Price' },
        quantity: { type: 'number', label: 'Quantity' },
        image: { type: 'text', label: 'Image URL' },
      },
      getItemSummary: (item) => `${item.name} (${item.quantity})`,
    },
  },
  defaultProps: {
    items: [],
  },
}
