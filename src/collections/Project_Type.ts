import { admins, anyone } from '@/access/roles'
import { CollectionConfig } from 'payload'

export const ProjectTypes: CollectionConfig = {
  slug: 'project-types',
  admin: {
    useAsTitle: 'titre',
  },
  access: {
    read: anyone,
    create: admins,
    update: admins,
    delete: admins,
  },
  fields: [
    {
      name: 'titre',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
  ],
}
