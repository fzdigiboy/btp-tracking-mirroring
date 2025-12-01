'use client'

import { ComponentConfig } from '@measured/puck'
import React, { useState, useRef } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import { mediaSelectField } from '../fields/media-select'

export interface AudioPlayerProps {
  audioUrl: string
  title?: string
  artist?: string
}

const AudioPlayerComponent = ({ audioUrl, title = 'Audio Track', artist }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div
      style={{
        padding: '24px',
        backgroundColor: '#f9fafb',
        borderRadius: '12px',
        border: '1px solid #e5e7eb',
      }}
    >
      <audio
        ref={audioRef}
        src={audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />

      <div style={{ marginBottom: '16px' }}>
        <div style={{ fontSize: '18px', fontWeight: '600', marginBottom: '4px' }}>{title}</div>
        {artist && <div style={{ fontSize: '14px', color: '#6b7280' }}>{artist}</div>}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button
          onClick={togglePlay}
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: '#3b82f6',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>

        <div style={{ flex: 1 }}>
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={(e) => {
              if (audioRef.current) {
                audioRef.current.currentTime = Number(e.target.value)
              }
            }}
            style={{ width: '100%' }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '12px',
              color: '#6b7280',
            }}
          >
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <button
          onClick={toggleMute}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: '#f3f4f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>
    </div>
  )
}

export const AudioPlayer: ComponentConfig<AudioPlayerProps> = {
  label: 'Audio Player',
  render: AudioPlayerComponent,
  fields: {
    audioUrl: {
      // @ts-ignore
      type: 'custom',
      render: ({ field, name, value, onChange }: any) => {
        const MediaSelectField = require('../fields/media-select').MediaSelectField
        return (
          <MediaSelectField
            label={field.label || name}
            value={value || ''}
            onChange={onChange}
            accept="audio"
          />
        )
      },
    },
    title: { type: 'text', label: 'Track Title' },
    artist: { type: 'text', label: 'Artist Name' },
  },
  defaultProps: {
    audioUrl: '',
    title: 'Audio Track',
    artist: '',
  },
}
