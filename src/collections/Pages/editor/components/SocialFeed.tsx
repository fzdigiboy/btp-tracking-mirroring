import { ComponentConfig } from '@measured/puck'
import React from 'react'
import { Instagram, Twitter, Facebook } from 'lucide-react'

export interface SocialFeedProps {
  platform?: 'instagram' | 'twitter' | 'facebook'
  posts: {
    image?: string
    text?: string
    author?: string
    date?: string
  }[]
  columns?: 2 | 3 | 4
}

const SocialFeedComponent = ({ platform = 'instagram', posts, columns = 3 }: SocialFeedProps) => {
  if (!posts || posts.length === 0) {
    return (
      <div style={{ padding: '64px', textAlign: 'center', color: '#9ca3af' }}>
        Add social posts to get started
      </div>
    )
  }

  const icons = {
    instagram: <Instagram size={20} />,
    twitter: <Twitter size={20} />,
    facebook: <Facebook size={20} />,
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
        {icons[platform]}
        <h3 style={{ fontSize: '24px', fontWeight: '700', margin: 0, textTransform: 'capitalize' }}>
          {platform} Feed
        </h3>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: '16px',
        }}
      >
        {posts.map((post, index) => (
          <div
            key={index}
            style={{
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid #e5e7eb',
              backgroundColor: '#ffffff',
            }}
          >
            {post.image && (
              <img
                src={post.image}
                alt=""
                style={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }}
              />
            )}
            <div style={{ padding: '16px' }}>
              {post.author && (
                <div style={{ fontWeight: '600', marginBottom: '8px' }}>{post.author}</div>
              )}
              {post.text && (
                <p
                  style={{
                    fontSize: '14px',
                    color: '#374151',
                    lineHeight: '1.5',
                    marginBottom: '8px',
                  }}
                >
                  {post.text}
                </p>
              )}
              {post.date && <div style={{ fontSize: '12px', color: '#9ca3af' }}>{post.date}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export const SocialFeed: ComponentConfig<SocialFeedProps> = {
  label: 'Social Feed',
  render: SocialFeedComponent,
  fields: {
    platform: {
      type: 'select',
      label: 'Platform',
      options: [
        { label: 'Instagram', value: 'instagram' },
        { label: 'Twitter', value: 'twitter' },
        { label: 'Facebook', value: 'facebook' },
      ],
    },
    posts: {
      type: 'array',
      label: 'Posts',
      arrayFields: {
        image: { type: 'text', label: 'Image URL' },
        text: { type: 'textarea', label: 'Post Text' },
        author: { type: 'text', label: 'Author' },
        date: { type: 'text', label: 'Date' },
      },
      getItemSummary: (item, index) => item.author || `Post ${(index || 0) + 1}`,
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
  },
  defaultProps: {
    platform: 'instagram',
    posts: [],
    columns: 3,
  },
}
