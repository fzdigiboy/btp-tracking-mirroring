import { admins, anyone } from '@/access/roles'
import { CollectionConfig } from 'payload'

export const Testimonies: CollectionConfig = {
  slug: 'testimonies',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: anyone,
    create: admins,
    update: admins,
    delete: admins,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      label: 'Description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'country',
      label: 'Country',
      type: 'text',
      required: true,
    },
    {
      name: 'project',
      label: 'Project',
      type: 'relationship',
      relationTo: 'projects',
      required: true,
    },
  ],
}
