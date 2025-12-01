import type { ComponentConfig } from '@measured/puck'
import React from 'react'

export type ContactInfoCard = {
  icon: string
  title: string
  value: string
  additionalInfo?: string
}

export type ContactInfoCardsProps = {
  cards: ContactInfoCard[]
}

export const ContactInfoCards: React.FC<ContactInfoCardsProps> = ({ cards }) => {
  return (
    <div className="space-y-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex gap-4 p-6 rounded-xl bg-blue-50 dark:bg-blue-900/10"
        >
          {/* Icon */}
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
            <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-2xl">
              {card.icon}
            </span>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 dark:text-white mb-1">{card.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{card.value}</p>
            {card.additionalInfo && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{card.additionalInfo}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export const ContactInfoCardsConfig: ComponentConfig<ContactInfoCardsProps> = {
  fields: {
    cards: {
      type: 'array',
      label: 'Contact Info Cards',
      arrayFields: {
        icon: { type: 'text', label: 'Material Icon Name' },
        title: { type: 'text', label: 'Title' },
        value: { type: 'text', label: 'Value' },
        additionalInfo: { type: 'text', label: 'Additional Info (optional)' },
      },
      getItemSummary: (item: any) => item.title || 'Contact Info',
    },
  },
  defaultProps: {
    cards: [
      {
        icon: 'call',
        title: 'Phone',
        value: '+1 (555) 123-4567',
      },
      {
        icon: 'mail',
        title: 'Email',
        value: 'contact@eleanorvance.com',
      },
      {
        icon: 'location_on',
        title: 'Address',
        value: '123 Professional Way, Suite 400,',
        additionalInfo: 'Metropolis, ST 54321',
      },
      {
        icon: 'schedule',
        title: 'Business Hours',
        value: 'Mon-Fri: 9:00 AM - 5:00 PM',
      },
    ],
  },
  render: ({ cards }) => {
    return <ContactInfoCards cards={cards} />
  },
}
