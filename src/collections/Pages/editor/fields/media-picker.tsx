import { ExternalField } from '@measured/puck'

// Simple media picker that uses Payload's relationship field
export const mediaPickerField = (
  accept: 'video' | 'audio' | 'image' | 'any' = 'any',
): ExternalField<string> => ({
  type: 'external',
  placeholder: `Select ${accept === 'any' ? 'media' : accept}`,
  fetchList: async () => {
    try {
      // Fetch media from Payload API
      const response = await fetch('/api/media?limit=100')
      const data = await response.json()

      // Filter by type if specified
      let filteredDocs = data.docs || []
      if (accept !== 'any') {
        filteredDocs = filteredDocs.filter((media: any) => {
          const mimeType = media.mimeType || ''
          return mimeType.startsWith(`${accept}/`)
        })
      }

      return filteredDocs.map((media: any) => ({
        id: media.id,
        title: media.filename || media.alt || 'Untitled',
      }))
    } catch (error) {
      console.error('Error fetching media:', error)
      return []
    }
  },
  fetchItem: async (id: string) => {
    try {
      const response = await fetch(`/api/media/${id}`)
      const media = await response.json()
      return {
        id: media.id,
        title: media.filename || media.alt || 'Untitled',
      }
    } catch (error) {
      console.error('Error fetching media item:', error)
      return null
    }
  },
  getItemSummary: (item: any) => item?.title || 'Media',
  mapProp: async (value: any) => {
    // If value is already a URL string, return it
    if (typeof value === 'string' && (value.startsWith('http') || value.startsWith('/'))) {
      return value
    }

    // If value is an ID, fetch the media URL
    if (typeof value === 'string') {
      try {
        const response = await fetch(`/api/media/${value}`)
        const media = await response.json()
        return media.url || ''
      } catch (error) {
        console.error('Error mapping media:', error)
        return ''
      }
    }

    return ''
  },
})
