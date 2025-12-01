import { ComponentConfig } from '@measured/puck'
import React from 'react'

export interface VideoBlockProps {
  url: string
  aspectRatio?: '16:9' | '4:3' | '1:1'
}

export const VideoBlock: ComponentConfig<VideoBlockProps> = {
  label: 'Video',
  fields: {
    url: { type: 'text', label: 'Video URL (YouTube/Vimeo)' },
    aspectRatio: {
      type: 'select',
      options: [
        { label: '16:9', value: '16:9' },
        { label: '4:3', value: '4:3' },
        { label: '1:1', value: '1:1' },
      ],
    },
  },
  defaultProps: {
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    aspectRatio: '16:9',
  },
  render: ({ url, aspectRatio }) => {
    let embedUrl = url
    // Simple check to convert youtube watch URL to embed
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1]?.split('&')[0]
      embedUrl = `https://www.youtube.com/embed/${videoId}`
    } else if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1]
      embedUrl = `https://www.youtube.com/embed/${videoId}`
    }

    const ratioClass =
      aspectRatio === '16:9'
        ? 'aspect-video'
        : aspectRatio === '4:3'
          ? 'aspect-[4/3]'
          : 'aspect-square'

    return (
      <div className={`w-full ${ratioClass} bg-muted rounded-lg overflow-hidden`}>
        <iframe
          src={embedUrl}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  },
}
