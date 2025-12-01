import { ComponentConfig } from '@measured/puck'
import React from 'react'
import { mediaSelectField } from '../fields/media-select'

export interface VideoPlayerProps {
  videoUrl: any // Can be string URL or Payload media ID/object
  videoType?: 'youtube' | 'vimeo' | 'direct'
  autoplay?: boolean
  controls?: boolean
  aspectRatio?: '16/9' | '4/3' | '1/1'
}

const VideoPlayerComponent = ({
  videoUrl,
  videoType = 'direct',
  autoplay = false,
  controls = true,
  aspectRatio = '16/9',
}: VideoPlayerProps) => {
  // Convert videoUrl to string - handle multiple formats
  let urlString = ''

  if (typeof videoUrl === 'string') {
    urlString = videoUrl
  } else if (videoUrl && typeof videoUrl === 'object') {
    // If it's a Payload media object, it might have url, filename, or other properties
    urlString = videoUrl.url || videoUrl.filename || ''
  }

  // console.log('VideoPlayer - videoUrl:', videoUrl)
  // console.log('VideoPlayer - urlString:', urlString)

  // Auto-detect video type if not explicitly set or if set to wrong type
  const detectVideoType = (): 'youtube' | 'vimeo' | 'direct' => {
    if (!urlString) return videoType

    if (urlString.includes('youtube.com') || urlString.includes('youtu.be')) {
      return 'youtube'
    } else if (urlString.includes('vimeo.com')) {
      return 'vimeo'
    } else {
      return 'direct'
    }
  }

  const actualVideoType = detectVideoType()

  const getEmbedUrl = () => {
    if (!urlString) return ''

    if (actualVideoType === 'youtube') {
      const videoId = urlString.split('v=')[1] || urlString.split('/').pop()
      return `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? 1 : 0}&controls=${controls ? 1 : 0}`
    } else if (actualVideoType === 'vimeo') {
      const videoId = urlString.split('/').pop()
      return `https://player.vimeo.com/video/${videoId}?autoplay=${autoplay ? 1 : 0}`
    }
    return urlString
  }

  if (!urlString) {
    return (
      <div
        style={{
          padding: '64px',
          textAlign: 'center',
          color: '#9ca3af',
          backgroundColor: '#f9fafb',
          borderRadius: '8px',
        }}
      >
        No video selected
      </div>
    )
  }

  return (
    <div style={{ width: '100%', aspectRatio, borderRadius: '8px', overflow: 'hidden' }}>
      {actualVideoType === 'direct' ? (
        <video
          src={urlString}
          controls={controls}
          autoPlay={autoplay}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <iframe
          src={getEmbedUrl()}
          style={{ width: '100%', height: '100%', border: 'none' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  )
}

export const VideoPlayer: ComponentConfig<VideoPlayerProps> = {
  label: 'Video Player',
  render: VideoPlayerComponent,
  fields: {
    videoUrl: {
      // @ts-ignore
      type: 'custom',
      render: ({ field, name, value, onChange }: any) => {
        const MediaSelectField = require('../fields/media-select').MediaSelectField
        return (
          <MediaSelectField
            label={field.label || name}
            value={value || ''}
            onChange={onChange}
            accept="video"
          />
        )
      },
    },
    videoType: {
      type: 'select',
      label: 'Video Type',
      options: [
        { label: 'YouTube', value: 'youtube' },
        { label: 'Vimeo', value: 'vimeo' },
        { label: 'Direct URL', value: 'direct' },
      ],
    },
    autoplay: {
      type: 'radio',
      label: 'Autoplay',
      options: [
        { label: 'Yes', value: true },
        { label: 'No', value: false },
      ],
    },
    controls: {
      type: 'radio',
      label: 'Show Controls',
      options: [
        { label: 'Yes', value: true },
        { label: 'No', value: false },
      ],
    },
    aspectRatio: {
      type: 'select',
      label: 'Aspect Ratio',
      options: [
        { label: '16:9', value: '16/9' },
        { label: '4:3', value: '4/3' },
        { label: '1:1', value: '1/1' },
      ],
    },
  },
  defaultProps: {
    videoUrl: '',
    videoType: 'direct',
    autoplay: false,
    controls: true,
    aspectRatio: '16/9',
  },
}
