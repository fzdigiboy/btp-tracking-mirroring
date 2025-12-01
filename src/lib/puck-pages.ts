import { getPayloadClient } from './payload'
import { CACHE_TIMES } from './cache-config'
import { Page } from '@/payload-types'

export async function getPageByHandle({ handle }: { handle: string }): Promise<Page | null> {
  try {
    const payload = await getPayloadClient()
    const response = await payload.find({
      collection: 'pages',
      where: { handle: { equals: handle } },
      limit: 1,
    })

    return response.docs[0] || null
  } catch (error) {
    console.error('Failed to fetch puck pages:', error)
    return null
  }
}
