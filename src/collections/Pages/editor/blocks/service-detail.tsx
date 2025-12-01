import type { ComponentConfig } from '@measured/puck'
import React from 'react'
import Image from 'next/image'
import { ImagePickerField } from '../components/ImagePickerField'

export type ServiceDetailProps = {
  title: string
  description: string
  checklistItems: string[]
  ctaText?: string
  ctaLink?: string
  image?: {
    url: string
    alt: string
  }
  imagePosition: 'left' | 'right'
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({
  title,
  description,
  checklistItems,
  ctaText,
  ctaLink,
  image,
  imagePosition,
}) => {
  return (
    <section className="py-12 md:py-16">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
          imagePosition === 'right' ? '' : 'md:flex-row-reverse'
        }`}
      >
        {/* Image */}
        <div className={`${imagePosition === 'right' ? 'md:order-2' : 'md:order-1'}`}>
          {image?.url && (
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden relative bg-gray-200 dark:bg-gray-800">
              <Image src={image.url} alt={image.alt || title} fill className="object-cover" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className={`${imagePosition === 'right' ? 'md:order-1' : 'md:order-2'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {title}
          </h2>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">{description}</p>

          {/* Checklist */}
          {checklistItems && checklistItems.length > 0 && (
            <ul className="space-y-4 mb-8">
              {checklistItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          )}

          {/* CTA Button */}
          {ctaText && ctaLink && (
            <a
              href={ctaLink}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
            >
              {ctaText}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export const ServiceDetailConfig: ComponentConfig<ServiceDetailProps> = {
  fields: {
    title: { type: 'text', label: 'Title' },
    description: { type: 'textarea', label: 'Description' },
    checklistItems: {
      type: 'array',
      label: 'Checklist Items',
      arrayFields: {
        item: { type: 'text' },
      },
      getItemSummary: (item: any) => item.item || 'Item',
    },
    ctaText: { type: 'text', label: 'CTA Button Text (optional)' },
    ctaLink: { type: 'text', label: 'CTA Link (optional)' },
    image: {
      type: 'object',
      objectFields: {
        url: {
          type: 'custom',
          render: ({ onChange, value }) => (
            <ImagePickerField
              label="Image"
              value={value || ''}
              onChange={onChange}
              placeholder="Select image"
            />
          ),
        },
        alt: { type: 'text', label: 'Alt Text' },
      },
    },
    imagePosition: {
      type: 'radio',
      label: 'Image Position',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
      ],
    },
  },
  defaultProps: {
    title: 'Corporate Law',
    description:
      'We provide comprehensive legal services for businesses at every stage. From initial formation and structuring to complex mergers and acquisitions, our team ensures your corporate activities are legally sound and strategically aligned with your business objectives.',
    checklistItems: ['Contract Drafting & Review', 'Mergers & Acquisitions', 'Business Formation & Compliance'],
    ctaText: 'Learn More',
    ctaLink: '#',
    imagePosition: 'right',
  },
  render: ({ title, description, checklistItems, ctaText, ctaLink, image, imagePosition }) => {
    const items = checklistItems?.map((item: any) => item.item) || []

    return (
      <ServiceDetail
        title={title}
        description={description}
        checklistItems={items}
        ctaText={ctaText}
        ctaLink={ctaLink}
        image={image}
        imagePosition={imagePosition}
      />
    )
  },
}
