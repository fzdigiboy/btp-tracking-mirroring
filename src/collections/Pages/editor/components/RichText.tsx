import { ComponentConfig } from '@measured/puck'
import React from 'react'

export interface RichTextProps {
  content: string
}

export const RichText: ComponentConfig<RichTextProps> = {
  label: 'Rich Text (HTML)',
  fields: {
    content: { type: 'textarea' },
  },
  defaultProps: {
    content: '<p>Add your <strong>HTML</strong> content here...</p>',
  },
  render: ({ content }) => (
    <div
      className="prose dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  ),
}
