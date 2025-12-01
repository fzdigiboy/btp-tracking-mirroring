import { getPayload } from 'payload'
import config from '@/payload.config'
import type { Config } from '@/payload-types'

/**
 * Get Payload client instance
 *
 * This is a simplified version that doesn't use @shopnex/payload-sdk.
 * For server-side operations, use getPayload() directly.
 * For client-side operations, use fetch to call your API endpoints.
 */

// Server-side: Get Payload instance
export const getPayloadClient = async () => {
  return await getPayload({ config })
}

// Client-side: Simple fetch wrapper for API calls
export const payloadAPI = {
  async find<T = any>(collection: keyof Config['collections'], params?: Record<string, any>) {
    const queryString = params ? '?' + new URLSearchParams(params).toString() : ''
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/${collection}${queryString}`,
    )
    if (!response.ok) throw new Error(`Failed to fetch ${String(collection)}`)
    return response.json() as Promise<T>
  },

  async findByID<T = any>(collection: keyof Config['collections'], id: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/${collection}/${id}`)
    if (!response.ok) throw new Error(`Failed to fetch ${String(collection)} with ID ${id}`)
    return response.json() as Promise<T>
  },
}

// Legacy export for backwards compatibility
export const sdk = payloadAPI
