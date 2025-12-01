'use client'
import { ComponentConfig, DropZone } from '@measured/puck'
import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export interface AccordionProps {
  items: { title: string }[]
}

export const Accordion: ComponentConfig<AccordionProps> = {
  label: 'Accordion',
  fields: {
    items: {
      type: 'array',
      getItemSummary: (item) => item.title || 'Accordion Item',
      arrayFields: {
        title: { type: 'text' },
      },
    },
  },
  defaultProps: {
    items: [
      {
        title: 'What is your return policy?',
      },
      {
        title: 'Do you ship internationally?',
      },
    ],
  },
  render: ({ items }) => {
    return (
      <div className="w-full space-y-2">
        {items.map((item, index) => (
          <AccordionItem key={index} title={item.title} index={index} />
        ))}
      </div>
    )
  },
}

const AccordionItem = ({ title, index }: { title: string; index: number }) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        className="w-full px-4 py-3 flex justify-between items-center bg-muted/50 hover:bg-muted transition-colors text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{title}</span>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {isOpen && (
        <div className="px-4 py-3 bg-background border-t">
          <DropZone zone={`item-${index}`} />
        </div>
      )}
    </div>
  )
}
