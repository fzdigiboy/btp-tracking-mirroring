'use client'

import { ComponentConfig, DropZone } from '@measured/puck'
import React, { useState } from 'react'
import { X } from 'lucide-react'

export interface ModalProps {
  triggerText?: string
  triggerStyle?: 'primary' | 'secondary' | 'outline'
  modalTitle?: string
  modalSize?: 'small' | 'medium' | 'large'
}

const ModalComponent = ({
  triggerText = 'Open Modal',
  triggerStyle = 'primary',
  modalTitle = 'Modal Title',
  modalSize = 'medium',
}: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const sizeStyles = {
    small: { maxWidth: '400px' },
    medium: { maxWidth: '600px' },
    large: { maxWidth: '800px' },
  }

  const buttonStyles = {
    primary: { backgroundColor: '#3b82f6', color: '#ffffff' },
    secondary: { backgroundColor: '#6b7280', color: '#ffffff' },
    outline: { backgroundColor: 'transparent', color: '#3b82f6', border: '2px solid #3b82f6' },
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: '12px 24px',
          borderRadius: '8px',
          border: 'none',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
          ...buttonStyles[triggerStyle],
        }}
      >
        {triggerText}
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
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              width: '100%',
              ...sizeStyles[modalSize],
              maxHeight: '90vh',
              overflow: 'auto',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
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
              <h2 style={{ fontSize: '24px', fontWeight: '700', margin: 0 }}>{modalTitle}</h2>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px',
                }}
              >
                <X size={24} color="#6b7280" />
              </button>
            </div>
            <div style={{ padding: '24px' }}>
              <DropZone zone="modal-content" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export const Modal: ComponentConfig<ModalProps> = {
  label: 'Modal',
  render: ModalComponent,
  fields: {
    triggerText: { type: 'text', label: 'Button Text' },
    triggerStyle: {
      type: 'select',
      label: 'Button Style',
      options: [
        { label: 'Primary', value: 'primary' },
        { label: 'Secondary', value: 'secondary' },
        { label: 'Outline', value: 'outline' },
      ],
    },
    modalTitle: { type: 'text', label: 'Modal Title' },
    modalSize: {
      type: 'select',
      label: 'Modal Size',
      options: [
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' },
      ],
    },
  },
  defaultProps: {
    triggerText: 'Open Modal',
    triggerStyle: 'primary',
    modalTitle: 'Modal Title',
    modalSize: 'medium',
  },
}
