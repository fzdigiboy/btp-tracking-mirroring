"use server";
import { getPayloadClient } from "../payload";


export async function getServices({limit}: { limit: number }): Promise<any[]> {
  try {
    const payload = await getPayloadClient()
    const response = await payload.find({
      collection: 'services',
      limit: limit || 60,
    })
    return response?.docs || []
  } catch (error) {
    console.error('Failed to fetch services:', error)
    return []
  }
}

export async function getProjects({limit}: { limit: number }): Promise<any[]> {
  try {
    const payload = await getPayloadClient()
    const response = await payload.find({
      collection: 'project-types',
      limit: limit || 25,
    })
    return response?.docs || []
  } catch (error) {
    console.error('Failed to fetch projects:', error)
    return []
  }
}