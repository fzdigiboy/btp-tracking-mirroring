import { admins, anyone } from '@/access/roles'
import { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: anyone,
    create: admins,
    update: admins,
    delete: admins,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      hasMany: true,
      maxRows: 8,
    },
    {
      name: 'location',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures],
      }),
    },
    {
      name: 'projectInfo',
      type: 'group',
      fields: [
        {
          name: 'duration',
          type: 'text',
          required: true,
        },
        {
          name: 'size',
          type: 'group',
          fields: [
            {
              name: 'value',
              type: 'number',
              required: true,
            },
            {
              name: 'unit',
              type: 'select',
              required: true,
              defaultValue: 'm2',
              options: [
                {
                  label: 'm²',
                  value: 'm2',
                },
                {
                  label: 'Hectare',
                  value: 'hectare',
                },
              ],
            },
          ],
        },
        {
          name: 'services',
          type: 'relationship',
          relationTo: 'services',
          hasMany: true,
          required: true,
        },
      ],
    },
    {
      name: 'projectType',
      type: 'relationship',
      relationTo: 'project-types',
      required: true,
    },
    {
      name: 'testimonies',
      type: 'relationship',
      relationTo: 'testimonies',
      hasMany: true,
    },
  ],
}
