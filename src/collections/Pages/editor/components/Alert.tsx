import { ComponentConfig, DropZone } from '@measured/puck'
import React from 'react'
import { Info, CheckCircle, AlertTriangle, XCircle } from 'lucide-react'

export interface AlertProps {
  title: string
  variant: 'info' | 'success' | 'warning' | 'error'
}

export const Alert: ComponentConfig<AlertProps> = {
  label: 'Alert',
  fields: {
    title: { type: 'text' },
    variant: {
      type: 'select',
      options: [
        { label: 'Info', value: 'info' },
        { label: 'Success', value: 'success' },
        { label: 'Warning', value: 'warning' },
        { label: 'Error', value: 'error' },
      ],
    },
  },
  defaultProps: {
    title: 'Note',
    variant: 'info',
  },
  render: ({ title, variant }) => {
    const styles = {
      info: {
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        text: 'text-blue-800 dark:text-blue-300',
        icon: Info,
      },
      success: {
        bg: 'bg-green-50 dark:bg-green-900/20',
        text: 'text-green-800 dark:text-green-300',
        icon: CheckCircle,
      },
      warning: {
        bg: 'bg-yellow-50 dark:bg-yellow-900/20',
        text: 'text-yellow-800 dark:text-yellow-300',
        icon: AlertTriangle,
      },
      error: {
        bg: 'bg-red-50 dark:bg-red-900/20',
        text: 'text-red-800 dark:text-red-300',
        icon: XCircle,
      },
    }

    const style = styles[variant]
    const Icon = style.icon

    return (
      <div className={`p-4 rounded-lg flex gap-3 ${style.bg} ${style.text}`}>
        <Icon className="shrink-0 mt-0.5" size={20} />
        <div className="w-full">
          <h5 className="font-medium mb-1">{title}</h5>
          <div className="text-sm opacity-90">
            <DropZone zone="content" />
          </div>
        </div>
      </div>
    )
  },
}
