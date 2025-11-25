import type { Plugin } from 'payload'

import { seoPlugin } from '@payloadcms/plugin-seo'

/**
 * Plugins Configuration
 *
 * This file exports the plugins used in your Payload CMS instance.
 * Add or remove plugins as needed for your project.
 *
 * Popular plugins to consider:
 * - @payloadcms/plugin-cloud-storage (for S3, GCS, etc.)
 * - @payloadcms/plugin-stripe (for payment processing)
 * - @payloadcms/plugin-form-builder (for building forms)
 *
 * See: https://payloadcms.com/docs/plugins/overview
 */

export const plugins: Plugin[] = [
  // SEO Plugin - Adds SEO fields to collections
  seoPlugin({
    // Customize the URL generation based on your routing
    generateURL: ({ doc }) => {
      // Example: Generate URL based on slug or handle
      return `${process.env.NEXT_PUBLIC_SERVER_URL}/${doc.slug || doc.handle || ''}`
    },
    uploadsCollection: 'media',
    // Customize title and description generators
    generateTitle: ({ doc }) => `${process.env.SITE_NAME || 'My Site'} — ${doc.title}`,
    generateDescription: ({ doc }) => {
      // You can extract text from rich text fields or use a dedicated description field
      return doc.description || doc.excerpt || ''
    },
  }),

  // Add your custom plugins here
  // Example:
  // customPlugin({
  //   enabled: true,
  // }),
]
