import { ComponentConfig } from '@measured/puck'
import React from 'react'
import { Facebook, Twitter, Linkedin, Mail, Link as LinkIcon } from 'lucide-react'

export interface SocialShareProps {
  url?: string
  title?: string
  platforms?: ('facebook' | 'twitter' | 'linkedin' | 'email' | 'copy')[]
  style?: 'buttons' | 'icons'
}

const SocialShareComponent = ({
  url = typeof window !== 'undefined' ? window.location.href : '',
  title = 'Check this out!',
  platforms = ['facebook', 'twitter', 'linkedin', 'email'],
  style = 'buttons',
}: SocialShareProps) => {
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
  }

  const icons = {
    facebook: <Facebook size={20} />,
    twitter: <Twitter size={20} />,
    linkedin: <Linkedin size={20} />,
    email: <Mail size={20} />,
    copy: <LinkIcon size={20} />,
  }

  const colors = {
    facebook: '#1877f2',
    twitter: '#1da1f2',
    linkedin: '#0a66c2',
    email: '#6b7280',
    copy: '#3b82f6',
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(url)
    alert('Link copied to clipboard!')
  }

  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      {platforms.map((platform) => (
        <button
          key={platform}
          onClick={() => {
            if (platform === 'copy') {
              handleCopy()
            } else {
              window.open(shareUrls[platform], '_blank', 'width=600,height=400')
            }
          }}
          style={{
            padding: style === 'buttons' ? '10px 20px' : '10px',
            backgroundColor: style === 'buttons' ? colors[platform] : '#f3f4f6',
            color: style === 'buttons' ? '#ffffff' : colors[platform],
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px',
            fontWeight: '600',
            textTransform: 'capitalize',
          }}
        >
          {icons[platform]}
          {style === 'buttons' && <span>{platform}</span>}
        </button>
      ))}
    </div>
  )
}

export const SocialShare: ComponentConfig<SocialShareProps> = {
  label: 'Social Share',
  render: SocialShareComponent,
  fields: {
    url: { type: 'text', label: 'URL to Share (leave empty for current page)' },
    title: { type: 'text', label: 'Share Title' },
    platforms: {
      type: 'array',
      label: 'Platforms',
      arrayFields: {
        platform: {
          type: 'select',
          options: [
            { label: 'Facebook', value: 'facebook' },
            { label: 'Twitter', value: 'twitter' },
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'Email', value: 'email' },
            { label: 'Copy Link', value: 'copy' },
          ],
        },
      },
    },
    style: {
      type: 'select',
      label: 'Style',
      options: [
        { label: 'Buttons', value: 'buttons' },
        { label: 'Icons Only', value: 'icons' },
      ],
    },
  },
  defaultProps: {
    url: '',
    title: 'Check this out!',
    platforms: ['facebook', 'twitter', 'linkedin', 'email'],
    style: 'buttons',
  },
}
