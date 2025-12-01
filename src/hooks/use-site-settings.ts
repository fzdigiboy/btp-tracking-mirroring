'use client'

import { useState, useEffect } from 'react'
import type { SiteSettings } from '@/payload-types'

/**
 * Client-side hook to fetch and use site settings
 *
 * Usage:
 * ```tsx
 * 'use client'
 * function MyComponent() {
 *   const settings = useSiteSettings()
 *   return <div style={{ color: settings?.primaryColor }}>Content</div>
 * }
 * ```
 */
export function useSiteSettings() {
  const [settings, setSettings] = useState<SiteSettings | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    fetch('/api/globals/site-settings')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch settings')
        return res.json()
      })
      .then((data) => {
        setSettings(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
      })
  }, [])

  return { settings, loading, error }
}

/**
 * Hook to get a specific setting value
 *
 * Usage:
 * ```tsx
 * const primaryColor = useSetting('primaryColor', '#1152d4')
 * ```
 */
export function useSetting<K extends keyof SiteSettings>(
  key: K,
  defaultValue: SiteSettings[K],
): SiteSettings[K] {
  const { settings } = useSiteSettings()
  return settings?.[key] ?? defaultValue
}
