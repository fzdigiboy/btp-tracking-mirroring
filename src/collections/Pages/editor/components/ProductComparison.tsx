import { ComponentConfig } from '@measured/puck'
import React from 'react'
import { Check, X } from 'lucide-react'

export interface ProductComparisonProps {
  products: {
    name: string
    features: { [key: string]: boolean | string }
  }[]
  featureLabels: string[]
}

const ProductComparisonComponent = ({ products, featureLabels }: ProductComparisonProps) => {
  if (!products || products.length === 0 || !featureLabels || featureLabels.length === 0) {
    return (
      <div style={{ padding: '64px', textAlign: 'center', color: '#9ca3af' }}>
        Add products and features to compare
      </div>
    )
  }

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ padding: '16px', textAlign: 'left', borderBottom: '2px solid #e5e7eb' }}>
              Feature
            </th>
            {products.map((product, index) => (
              <th
                key={index}
                style={{
                  padding: '16px',
                  textAlign: 'center',
                  borderBottom: '2px solid #e5e7eb',
                  fontWeight: '700',
                  fontSize: '16px',
                }}
              >
                {product.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {featureLabels.map((feature, fIndex) => (
            <tr key={fIndex} style={{ backgroundColor: fIndex % 2 === 0 ? '#f9fafb' : '#ffffff' }}>
              <td style={{ padding: '16px', fontWeight: '500' }}>{feature}</td>
              {products.map((product, pIndex) => {
                const value = product.features[feature]
                return (
                  <td key={pIndex} style={{ padding: '16px', textAlign: 'center' }}>
                    {typeof value === 'boolean' ? (
                      value ? (
                        <Check size={20} color="#10b981" style={{ margin: '0 auto' }} />
                      ) : (
                        <X size={20} color="#ef4444" style={{ margin: '0 auto' }} />
                      )
                    ) : (
                      <span>{value}</span>
                    )}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export const ProductComparison: ComponentConfig<ProductComparisonProps> = {
  label: 'Product Comparison',
  render: ProductComparisonComponent,
  fields: {
    products: {
      type: 'array',
      label: 'Products',
      arrayFields: {
        name: { type: 'text', label: 'Product Name' },
        features: { type: 'textarea', label: 'Features (JSON format)' },
      },
      getItemSummary: (item) => item.name,
    },
    featureLabels: {
      type: 'array',
      label: 'Feature Labels',
      arrayFields: {
        label: { type: 'text', label: 'Feature Name' },
      },
    },
  },
  defaultProps: {
    products: [
      {
        name: 'Basic',
        features: { Storage: '10GB', Users: '5', Support: false },
      },
      {
        name: 'Pro',
        features: { Storage: '100GB', Users: '25', Support: true },
      },
    ],
    featureLabels: ['Storage', 'Users', 'Support'],
  },
}
