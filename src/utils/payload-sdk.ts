/**
 * Payload SDK Utility - Client-safe version
 *
 * This file only contains code that can run in the browser.
 * For server-side operations, use getPayload() directly in your API routes or server components.
 */

const isBrowser = typeof window !== 'undefined'

export const payloadSdk = {
  // For client-side API calls
  fetch: async (endpoint: string, options?: RequestInit) => {
    const baseURL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
    return fetch(`${baseURL}/api/${endpoint}`, options)
  },
}
