import type { CollectionConfig } from 'payload'
import { admins } from '@/access/roles'

export const ContactSubmissions: CollectionConfig = {
  slug: 'contact-submissions',
  access: {
    create: () => true, // Anyone can create
    delete: admins,
    read: admins,
    update: admins,
  },
  admin: {
    group: 'User Content',
    useAsTitle: 'subject',
    defaultColumns: ['name', 'email', 'subject', 'status', 'createdAt'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Name',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email',
    },
    {
      name: 'subject',
      type: 'text',
      label: 'Subject',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
      label: 'Message',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Read', value: 'read' },
        { label: 'Replied', value: 'replied' },
      ],
      label: 'Status',
    },
  ],
}
