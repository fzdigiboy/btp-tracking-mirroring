import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logoText',
      type: 'text',
      label: 'Logo Text',
      defaultValue: 'TogoBuild',
      required: true,
    },
    {
      name: 'logo',
      type: 'group',
      label: 'Logo Image',
      fields: [
        {
          name: 'url',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo Image',
          required: false,
        },
        {
          name: 'alt',
          type: 'text',
          label: 'Alt Text',
          defaultValue: 'TogoBuild Logo',
        },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      defaultValue:
        'Building dreams in Togo for the global diaspora. Your trusted partner for seamless, remote construction projects.',
    },
    {
      name: 'sections',
      type: 'array',
      label: 'Footer Sections',
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Section Title',
          required: true,
        },
        {
          name: 'links',
          type: 'array',
          label: 'Links',
          minRows: 1,
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'Link Label',
              required: true,
            },
            {
              name: 'href',
              type: 'text',
              label: 'Link URL',
            },
            {
              name: 'linkType',
              type: "select",
              label: 'Link Type',
              options: [
                { label: 'Internal', value: 'internal' },
                { label: 'External', value: 'external' },
              ],
              defaultValue: 'external',
            },
            {
              name: 'icons',
              type: 'text',
              label: 'Icon Name',
              admin: {
                description:
                  'Nom de l\'icône Lucide (ex: MapPin, Phone, Mail, Facebook, Twitter)',
              },
            },
          ],
        },
      ],
      defaultValue: [
        {
          title: 'Quick Links',
          links: [
            { label: 'Services', href: '#' },
            { label: 'Blog', href: '#' },
            { label: 'About', href: '#' },
            { label: 'Contact', href: '#' },
          ],
        },
        {
          title: 'Contact',
          links: [
            {
              label: '123 Rue de la Paix, Lomé, Togo',
              href: '',
              icons: 'MapPin',
            },
            { label: '+228 90 00 00 00', href: '', icons: 'Phone' },
            { label: 'contact@togobuild.com', href: '', icons: 'Mail' },
          ],
        },
      ],
    },
    {
      name: 'copyrightText',
      type: 'text',
      label: 'Copyright Text',
      defaultValue: '© 2024 TogoBuild. All rights reserved.',
    },
  ],
}