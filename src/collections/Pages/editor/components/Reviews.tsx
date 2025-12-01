import { ComponentConfig } from '@measured/puck'
import React from 'react'
import { Star } from 'lucide-react'

export interface ReviewsProps {
  reviews: {
    name: string
    rating: number
    comment: string
    date?: string
    avatar?: string
  }[]
  showAverage?: boolean
}

const ReviewsComponent = ({ reviews, showAverage = true }: ReviewsProps) => {
  if (!reviews || reviews.length === 0) {
    return (
      <div style={{ padding: '64px', textAlign: 'center', color: '#9ca3af' }}>
        Add reviews to get started
      </div>
    )
  }

  const averageRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length

  return (
    <div style={{ padding: '32px 0' }}>
      {showAverage && (
        <div style={{ marginBottom: '32px', textAlign: 'center' }}>
          <div style={{ fontSize: '48px', fontWeight: '700', marginBottom: '8px' }}>
            {averageRating.toFixed(1)}
          </div>
          <div
            style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '8px' }}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={24}
                fill={star <= averageRating ? '#f59e0b' : 'none'}
                color="#f59e0b"
              />
            ))}
          </div>
          <div style={{ color: '#6b7280', fontSize: '14px' }}>
            Based on {reviews.length} {reviews.length === 1 ? 'review' : 'reviews'}
          </div>
        </div>
      )}

      <div style={{ display: 'grid', gap: '24px' }}>
        {reviews.map((review, index) => (
          <div
            key={index}
            style={{
              padding: '24px',
              backgroundColor: '#f9fafb',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
            }}
          >
            <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
              {review.avatar && (
                <img
                  src={review.avatar}
                  alt={review.name}
                  style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
                />
              )}
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '600', marginBottom: '4px' }}>{review.name}</div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '4px' }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      fill={star <= review.rating ? '#f59e0b' : 'none'}
                      color="#f59e0b"
                    />
                  ))}
                </div>
                {review.date && (
                  <div style={{ fontSize: '12px', color: '#6b7280' }}>{review.date}</div>
                )}
              </div>
            </div>
            <p style={{ color: '#374151', lineHeight: '1.6', margin: 0 }}>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export const Reviews: ComponentConfig<ReviewsProps> = {
  label: 'Reviews',
  render: ReviewsComponent,
  fields: {
    reviews: {
      type: 'array',
      label: 'Reviews',
      arrayFields: {
        name: { type: 'text', label: 'Reviewer Name' },
        rating: {
          type: 'number',
          label: 'Rating (1-5)',
          min: 1,
          max: 5,
        },
        comment: { type: 'textarea', label: 'Review Comment' },
        date: { type: 'text', label: 'Date' },
        avatar: { type: 'text', label: 'Avatar URL' },
      },
      getItemSummary: (item) => `${item.name} - ${item.rating}★`,
    },
    showAverage: {
      type: 'radio',
      label: 'Show Average Rating',
      options: [
        { label: 'Yes', value: true },
        { label: 'No', value: false },
      ],
    },
  },
  defaultProps: {
    reviews: [
      {
        name: 'John Doe',
        rating: 5,
        comment: 'Excellent product! Highly recommended.',
        date: '2024-01-15',
      },
      {
        name: 'Jane Smith',
        rating: 4,
        comment: 'Very good, but could be improved in some areas.',
        date: '2024-01-10',
      },
    ],
    showAverage: true,
  },
}
