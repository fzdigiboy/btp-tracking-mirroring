'use client'

import type { ComponentConfig } from '@measured/puck'
import React, { useState } from 'react'

export type ContactFormProps = {
  title?: string
  submitButtonText: string
}

export const ContactForm: React.FC<ContactFormProps> = ({ title, submitButtonText }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 border border-gray-200 dark:border-gray-700">
      {title && (
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{title}</h3>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Row 1: Full Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            placeholder="Consultation Inquiry"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={6}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Your message here..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base transition-colors"
        >
          {submitButtonText}
        </button>
      </form>
    </div>
  )
}

export const ContactFormConfig: ComponentConfig<ContactFormProps> = {
  fields: {
    title: { type: 'text', label: 'Form Title (optional)' },
    submitButtonText: { type: 'text', label: 'Submit Button Text' },
  },
  defaultProps: {
    submitButtonText: 'Send Message',
  },
  render: ({ title, submitButtonText }) => {
    return <ContactForm title={title} submitButtonText={submitButtonText} />
  },
}
