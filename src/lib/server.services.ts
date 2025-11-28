'use server'

import { getPayloadClient } from './payload'

export async function getAllServices({ limit }: { limit: number }): Promise<any[]> {
  try {
    const payload = await getPayloadClient()
    const response = await payload.find({
      collection: 'services',
      limit: limit || 6,
    })
    return response?.docs || []
  } catch (error) {
    console.error('Failed to fetch services:', error)
    return []
  }
}
