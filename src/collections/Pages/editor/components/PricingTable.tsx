import { ComponentConfig } from '@measured/puck'
import React from 'react'
import { Check } from 'lucide-react'
import { colorPickerField } from '../fields/color-picker'

export interface PricingTableProps {
  plans: {
    name: string
    price: string
    period?: string
    description?: string
    features: string[]
    highlighted?: boolean
    buttonText?: string
    buttonLink?: string
  }[]
}

const PricingTableComponent = ({ plans }: PricingTableProps) => {
  if (!plans || plans.length === 0) {
    return (
      <div style={{ padding: '64px', textAlign: 'center', color: '#9ca3af' }}>
        Add pricing plans to get started
      </div>
    )
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${Math.min(plans.length, 3)}, 1fr)`,
        gap: '24px',
        padding: '32px 0',
      }}
    >
      {plans.map((plan, index) => (
        <div
          key={index}
          style={{
            padding: '32px',
            borderRadius: '12px',
            border: plan.highlighted ? '2px solid #3b82f6' : '1px solid #e5e7eb',
            backgroundColor: plan.highlighted ? '#eff6ff' : '#ffffff',
            position: 'relative',
            boxShadow: plan.highlighted
              ? '0 10px 25px -5px rgba(59, 130, 246, 0.2)'
              : '0 1px 3px rgba(0,0,0,0.1)',
            transform: plan.highlighted ? 'scale(1.05)' : 'scale(1)',
            transition: 'all 0.3s',
          }}
        >
          {plan.highlighted && (
            <div
              style={{
                position: 'absolute',
                top: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#3b82f6',
                color: '#ffffff',
                padding: '4px 16px',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: '600',
              }}
            >
              POPULAR
            </div>
          )}

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>
              {plan.name}
            </h3>
            {plan.description && (
              <p style={{ color: '#6b7280', fontSize: '14px' }}>{plan.description}</p>
            )}
          </div>

          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
              <span style={{ fontSize: '48px', fontWeight: '700' }}>{plan.price}</span>
              {plan.period && (
                <span style={{ color: '#6b7280', fontSize: '16px' }}>/{plan.period}</span>
              )}
            </div>
          </div>

          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px' }}>
            {plan?.features?.map((feature, fIndex) => (
              <li
                key={fIndex}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '12px',
                  fontSize: '14px',
                }}
              >
                <Check size={20} color="#10b981" style={{ flexShrink: 0 }} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <button
            style={{
              width: '100%',
              padding: '12px 24px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: plan.highlighted ? '#3b82f6' : '#f3f4f6',
              color: plan.highlighted ? '#ffffff' : '#374151',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            {plan.buttonText || 'Get Started'}
          </button>
        </div>
      ))}
    </div>
  )
}

export const PricingTable: ComponentConfig<PricingTableProps> = {
  label: 'Pricing Table',
  render: PricingTableComponent,
  fields: {
    plans: {
      type: 'array',
      label: 'Pricing Plans',
      arrayFields: {
        name: { type: 'text', label: 'Plan Name' },
        price: { type: 'text', label: 'Price' },
        period: { type: 'text', label: 'Period (e.g., month, year)' },
        description: { type: 'textarea', label: 'Description' },
        features: {
          type: 'array',
          label: 'Features',
          arrayFields: {
            feature: { type: 'text', label: 'Feature' },
          },
        },
        highlighted: {
          type: 'radio',
          label: 'Highlight this plan',
          options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ],
        },
        buttonText: { type: 'text', label: 'Button Text' },
        buttonLink: { type: 'text', label: 'Button Link' },
      },
      getItemSummary: (item) => item.name || 'Plan',
    },
  },
  defaultProps: {
    plans: [
      {
        name: 'Starter',
        price: '$9',
        period: 'month',
        description: 'Perfect for individuals',
        features: ['Feature 1', 'Feature 2', 'Feature 3'],
        highlighted: false,
        buttonText: 'Get Started',
        buttonLink: '#',
      },
      {
        name: 'Pro',
        price: '$29',
        period: 'month',
        description: 'Best for professionals',
        features: ['All Starter features', 'Feature 4', 'Feature 5', 'Feature 6'],
        highlighted: true,
        buttonText: 'Get Started',
        buttonLink: '#',
      },
      {
        name: 'Enterprise',
        price: '$99',
        period: 'month',
        description: 'For large teams',
        features: ['All Pro features', 'Feature 7', 'Feature 8', 'Priority support'],
        highlighted: false,
        buttonText: 'Contact Sales',
        buttonLink: '#',
      },
    ],
  },
}
