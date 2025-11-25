import type { CollectionConfig } from 'payload'
import { admins, anyone } from '@/access/roles'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  access: {
    create: admins,
    delete: admins,
    read: anyone,
    update: admins,
  },
  admin: {
    group: 'Content',
    useAsTitle: 'authorName',
    defaultColumns: ['authorName', 'company', 'authorRole'],
  },
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      required: true,
      label: 'Quote',
    },
    {
      name: 'authorName',
      type: 'text',
      required: true,
      label: 'Author Name',
    },
    {
      name: 'authorRole',
      type: 'text',
      required: true,
      label: 'Author Role',
    },
    {
      name: 'company',
      type: 'text',
      label: 'Company',
    },
    {
      name: 'authorImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Author Image',
    },
  ],
}
