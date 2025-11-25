'use client'

import { ComponentConfig } from '@measured/puck'
import React, { useState } from 'react'

export interface FormBuilderProps {
  formTitle?: string
  fields: {
    label: string
    type: 'text' | 'email' | 'textarea' | 'select' | 'checkbox'
    placeholder?: string
    required?: boolean
    options?: string[]
  }[]
  submitText?: string
  successMessage?: string
}

const FormBuilderComponent = ({
  formTitle = 'Contact Form',
  fields,
  submitText = 'Submit',
  successMessage = 'Thank you for your submission!',
}: FormBuilderProps) => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  if (!fields || fields.length === 0) {
    return (
      <div style={{ padding: '64px', textAlign: 'center', color: '#9ca3af' }}>
        Add form fields to get started
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '32px 0' }}>
      {formTitle && (
        <h2
          style={{ fontSize: '32px', fontWeight: '700', marginBottom: '24px', textAlign: 'center' }}
        >
          {formTitle}
        </h2>
      )}

      {submitted && (
        <div
          style={{
            padding: '16px',
            backgroundColor: '#d1fae5',
            color: '#065f46',
            borderRadius: '8px',
            marginBottom: '24px',
            textAlign: 'center',
          }}
        >
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <label
              style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
              }}
            >
              {field.label}
              {field.required && <span style={{ color: '#ef4444' }}> *</span>}
            </label>

            {field.type === 'textarea' ? (
              <textarea
                placeholder={field.placeholder}
                required={field.required}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '14px',
                  minHeight: '120px',
                  fontFamily: 'inherit',
                }}
              />
            ) : field.type === 'select' ? (
              <select
                required={field.required}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '14px',
                  backgroundColor: '#ffffff',
                }}
              >
                <option value="">Select an option</option>
                {field.options?.map((option, optIndex) => (
                  <option key={optIndex} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : field.type === 'checkbox' ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input
                  type="checkbox"
                  required={field.required}
                  style={{ width: '18px', height: '18px' }}
                />
                <span style={{ fontSize: '14px' }}>{field.placeholder || 'I agree'}</span>
              </div>
            ) : (
              <input
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '14px',
                }}
              />
            )}
          </div>
        ))}

        <button
          type="submit"
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
            marginTop: '8px',
          }}
        >
          {submitText}
        </button>
      </form>
    </div>
  )
}

export const FormBuilder: ComponentConfig<FormBuilderProps> = {
  label: 'Form Builder',
  render: FormBuilderComponent,
  fields: {
    formTitle: { type: 'text', label: 'Form Title' },
    fields: {
      type: 'array',
      label: 'Form Fields',
      arrayFields: {
        label: { type: 'text', label: 'Field Label' },
        type: {
          type: 'select',
          label: 'Field Type',
          options: [
            { label: 'Text', value: 'text' },
            { label: 'Email', value: 'email' },
            { label: 'Textarea', value: 'textarea' },
            { label: 'Select', value: 'select' },
            { label: 'Checkbox', value: 'checkbox' },
          ],
        },
        placeholder: { type: 'text', label: 'Placeholder' },
        required: {
          type: 'radio',
          label: 'Required',
          options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ],
        },
        options: {
          type: 'textarea',
          label: 'Options (for select, one per line)',
        },
      },
      getItemSummary: (item) => item.label || 'Field',
    },
    submitText: { type: 'text', label: 'Submit Button Text' },
    successMessage: { type: 'text', label: 'Success Message' },
  },
  defaultProps: {
    formTitle: 'Contact Us',
    fields: [
      { label: 'Name', type: 'text', placeholder: 'Your name', required: true },
      { label: 'Email', type: 'email', placeholder: 'your@email.com', required: true },
      { label: 'Message', type: 'textarea', placeholder: 'Your message', required: true },
    ],
    submitText: 'Send Message',
    successMessage: 'Thank you! We will get back to you soon.',
  },
}
