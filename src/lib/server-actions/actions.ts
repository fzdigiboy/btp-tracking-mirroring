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



export async function getProjectsType( { limit }: { limit: number }): Promise<any[]> {
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






// Types
type ProjectFilters = {
  projectType?: string
  service?: string
  search?: string
}

type ProjectQueryParams = {
  filters?: ProjectFilters
  limit?: number
  page?: number
  sort?: string
}

type ProjectResponse = {
  docs: any[]
  totalDocs: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: number | null
  nextPage: number | null
}

/**
 * Récupère les projets avec filtres, pagination et tri
 */
export async function getProjects({
  filters = {},
  limit = 25,
  page = 1,
  sort = '-createdAt',
}: ProjectQueryParams = {}): Promise<ProjectResponse> {
  try {
    const payload = await getPayloadClient()

    // Construction des conditions de filtrage
    const where: any = {}

    // Filtre par type de projet
    if (filters.projectType) {
      where.projectType = {
        equals: filters.projectType,
      }
    }

    // Filtre par service
    if (filters.service) {
        where['projectInfo.services'] = { 
          in: [filters.service], 
        }
      }


    // Recherche textuelle (titre, description, etc.)
    if (filters.search) {
      where.or = [
        {
          title: {
            contains: filters.search,
          },
        },
        {
          location: {
            contains: filters.search,
          },
        },
      ]
    }

    // Exécution de la requête
    const response = await payload.find({
      collection: 'projects',
      where: Object.keys(where).length > 0 ? where : undefined,
      limit,
      page,
      sort,
    })

    return {
      docs: response.docs || [],
      totalDocs: response.totalDocs,
      limit: response.limit,
      totalPages: response.totalPages,
      page: response.page || 1,
      pagingCounter: response.pagingCounter,
      hasPrevPage: response.hasPrevPage,
      hasNextPage: response.hasNextPage,
      prevPage: response.prevPage || null,
      nextPage: response.nextPage || null,
    }
  } catch (error) {
    console.error('Failed to fetch projects:', error)
    return {
      docs: [],
      totalDocs: 0,
      limit,
      totalPages: 0,
      page: 1,
      pagingCounter: 1,
      hasPrevPage: false,
      hasNextPage: false,
      prevPage: null,
      nextPage: null,
    }
  }
}

/**
 * Récupère un projet par son ID
 */
export async function getProjectById(id: string): Promise<any | null> {
  try {
    const payload = await getPayloadClient()
    const project = await payload.findByID({
      collection: 'projects',
      id,
    })
    return project
  } catch (error) {
    console.error(`Failed to fetch project ${id}:`, error)
    return null
  }
}
