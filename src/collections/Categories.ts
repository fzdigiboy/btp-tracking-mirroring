import type { CollectionConfig } from 'payload'
import { admins, anyone } from '@/access/roles'

export const Categories: CollectionConfig = {
  slug: 'categories',
  access: {
    create: admins,
    delete: admins,
    read: anyone,
    update: admins,
  },
  admin: {
    group: 'Content',
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'color'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Category Name',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Slug',
      admin: {
        description: 'URL-friendly version of the name',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data?.name) {
              return data.name
                .toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-')
            }
            return value
          },
        ],
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'color',
      type: 'text',
      label: 'Badge Color',
      admin: {
        components: {
          Field: '@/components/payload/PayloadColorPicker#PayloadColorPicker',
        },
        description: 'Hex color code for category badge (e.g., #1152d4)',
      },
      defaultValue: '#1152d4',
    },
    {
      name: 'icon',
      type: 'text',
      label: 'Material Symbol Icon',
      admin: {
        description: 'Icon name from Material Symbols (e.g., "corporate_fare")',
      },
    },
    {
      name: 'iconSvg',
      type: 'text',
      label: 'SVG Icon',
      admin: {
        components: {
          Field: '@/components/payload/IconField#IconField',
        },
        description: 'Paste raw SVG code here',
      },
    },
  ],
}
