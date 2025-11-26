import { admins, anyone } from '@/access/roles'
import { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
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
      name: 'logo',
      type: 'select',
      required: true,
      options: [
        { label: 'Logo 1', value: 'logo1' },
        { label: 'Logo 2', value: 'logo2' },
        { label: 'Logo 3', value: 'logo3' },
        // Ajoutez vos options de logo ici
      ],
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'button',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          required: true,
          defaultValue: '/contacts',
        },
      ],
    },
    {
      name: 'imageRight',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: "Cochez pour afficher l'image à droite",
      },
    },
    {
      name: 'content',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
