import type { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logo',
      type: 'group',
      label: 'Logo',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Logo Text',
          defaultValue: 'TogoBuild',
        },
        {
          name: 'image',
          type: 'group',
          label: 'Logo Image',
          fields: [
            {
              name: 'url',
              type: 'upload',
              relationTo: 'media', // Assure-toi d'avoir une collection 'media'
              label: 'Image',
              required: false,
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Alt Text',
              defaultValue: 'TogoBuild',
            },
          ],
        },
      ],
    },
    {
      name: 'navLinks',
      type: 'array',
      label: 'Navigation Links',
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Label',
          required: true,
        },
        {
          name: 'linkType',
          type: 'select',
          label: 'Link Type',
          required: true,
          defaultValue: 'internal',
          options: [
            {
              label: 'Internal',
              value: 'internal',
            },
            {
              label: 'External',
              value: 'external',
            },
          ],
        },
        {
          name: 'internalPage',
          type: 'relationship',
          relationTo: 'pages', // Ajuste selon le nom de ta collection de pages
          label: 'Internal Page',
          admin: {
            condition: (data, siblingData) => siblingData?.linkType === 'internal',
          },
        },
        {
          name: 'externalUrl',
          type: 'text',
          label: 'External URL',
          admin: {
            condition: (data, siblingData) => siblingData?.linkType === 'external',
          },
        },
      ],
      defaultValue: [
        {
          label: 'Home',
          linkType: 'internal',
        },
        {
          label: 'About',
          linkType: 'internal',
        },
      ],
    },
    {
      name: 'raqButton',
      type: 'group',
      label: 'Request a Quote Button',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Button Text',
          defaultValue: 'Request a Quote',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          label: 'Button Link',
          defaultValue: '#',
        },
        {
          name: 'color',
          type: 'text',
          label: 'Button Color',
          defaultValue: '#003366',
          admin: {
            description: 'Couleur au format hexadécimal (ex: #003366)',
          },
        },
      ],
    },
  ],
}