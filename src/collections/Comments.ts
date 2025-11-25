import type { CollectionConfig } from 'payload'
import { admins, anyone } from '@/access/roles'

export const Comments: CollectionConfig = {
  slug: 'comments',
  access: {
    create: anyone,
    delete: admins,
    read: anyone,
    update: admins,
  },
  admin: {
    group: 'User Content',
    useAsTitle: 'content',
    defaultColumns: ['content', 'author', 'name', 'status', 'publishedDate'],
  },
  fields: [
    {
      name: 'post',
      type: 'relationship',
      relationTo: 'posts',
      required: true,
      label: 'Post',
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      label: 'Author (User)',
      admin: {
        condition: (data) => !data.name,
      },
    },
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      admin: {
        condition: (data) => !data.author,
      },
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      admin: {
        condition: (data) => !data.author,
      },
    },
    {
      name: 'content',
      type: 'textarea',
      required: true,
      label: 'Comment',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'pending',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Approved', value: 'approved' },
        { label: 'Spam', value: 'spam' },
      ],
      label: 'Status',
    },
    {
      name: 'publishedDate',
      type: 'date',
      defaultValue: () => new Date().toISOString(),
      label: 'Published Date',
    },
  ],
}
