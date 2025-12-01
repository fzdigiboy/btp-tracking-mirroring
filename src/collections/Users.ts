import type { CollectionConfig } from 'payload'
import { admins, adminsOrSelf } from '@/access/roles'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    create: admins,
    delete: admins,
    read: adminsOrSelf,
    update: adminsOrSelf,
  },
  admin: {
    group: 'Admin',
    useAsTitle: 'email',
    defaultColumns: ['email', 'firstName', 'lastName', 'roles'],
  },
  auth: true,
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'firstName',
          type: 'text',
          label: 'First Name',
        },
        {
          name: 'lastName',
          type: 'text',
          label: 'Last Name',
        },
      ],
    },
    {
      name: 'roles',
      type: 'select',
      access: {
        create: ({ req: { user } }) => {
          return user?.roles?.includes('admin') ?? false
        },
        update: ({ req: { user } }) => {
          return user?.roles?.includes('admin') ?? false
        },
      },
      defaultValue: ['user'],
      hasMany: true,
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
        { label: 'Author', value: 'author' },
      ],
      saveToJWT: true,
      required: true,
    },
    // Author-specific fields (optional)
    {
      name: 'title',
      type: 'text',
      label: 'Professional Title',
      admin: {
        description: 'E.g., "Dr.", "PhD", "CEO", etc.',
        condition: (data) => data.roles?.includes('author'),
      },
    },
    {
      name: 'bio',
      type: 'textarea',
      label: 'Biography',
      admin: {
        description: 'Author bio for article bylines',
        condition: (data) => data.roles?.includes('author'),
      },
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
      label: 'Avatar',
      admin: {
        description: 'Profile picture for author pages',
        condition: (data) => data.roles?.includes('author'),
      },
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Links',
      admin: {
        condition: (data) => data.roles?.includes('author'),
      },
      fields: [
        {
          name: 'platform',
          type: 'select',
          required: true,
          options: [
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'Twitter', value: 'twitter' },
            { label: 'Email', value: 'email' },
            { label: 'Website', value: 'website' },
          ],
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          label: 'URL',
        },
      ],
    },
  ],
}
