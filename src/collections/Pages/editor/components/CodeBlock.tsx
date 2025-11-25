import { ComponentConfig } from '@measured/puck'
import React from 'react'

export interface CodeBlockProps {
  code: string
  language: string
}

export const CodeBlock: ComponentConfig<CodeBlockProps> = {
  label: 'Code Block',
  fields: {
    code: { type: 'textarea' },
    language: {
      type: 'select',
      options: [
        { label: 'JavaScript', value: 'javascript' },
        { label: 'TypeScript', value: 'typescript' },
        { label: 'HTML', value: 'html' },
        { label: 'CSS', value: 'css' },
        { label: 'JSON', value: 'json' },
        { label: 'Bash', value: 'bash' },
      ],
    },
  },
  defaultProps: {
    code: "console.log('Hello, World!');",
    language: 'javascript',
  },
  render: ({ code, language }) => {
    return (
      <div className="w-full rounded-lg overflow-hidden bg-slate-900 text-slate-50 p-4 font-mono text-sm">
        <div className="flex justify-between items-center mb-2 opacity-50 text-xs uppercase tracking-wider">
          <span>{language}</span>
          <span>Copy</span>
        </div>
        <pre className="overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
    )
  },
}
