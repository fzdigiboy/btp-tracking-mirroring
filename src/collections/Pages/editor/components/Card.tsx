import { ComponentConfig, DropZone } from '@measured/puck'
import React from 'react'
import Image from 'next/image'
import { ImagePickerField } from './ImagePickerField' // Assuming relative path is correct or adjust

export interface CardProps {
  image?: string
  title: string
  buttonText?: string
  buttonLink?: string
}

export const Card: ComponentConfig<CardProps> = {
  label: 'Card',
  fields: {
    image: {
      type: 'custom',
      render: ({ onChange, value }) => (
        <ImagePickerField label="Card Image" value={value} onChange={onChange} />
      ),
    },
    title: { type: 'text' },
    buttonText: { type: 'text' },
    buttonLink: { type: 'text' },
  },
  defaultProps: {
    title: 'Card Title',
    buttonText: 'Learn More',
    buttonLink: '#',
  },
  render: ({ image, title, buttonText, buttonLink }) => {
    return (
      <div className="border rounded-xl overflow-hidden bg-card text-card-foreground shadow-sm flex flex-col h-full">
        {image && image && (
          <div className="relative aspect-video w-full shrink-0">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
        )}
        <div className="p-6 flex flex-col grow">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <div className="text-muted-foreground mb-4 grow">
            <DropZone zone="content" />
          </div>
          {buttonText && (
            <div className="mt-auto pt-4">
              <a
                href={buttonLink}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                {buttonText}
              </a>
            </div>
          )}
        </div>
      </div>
    )
  },
}
