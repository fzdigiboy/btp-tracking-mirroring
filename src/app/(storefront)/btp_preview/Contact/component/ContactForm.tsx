'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    salutation: '',
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+228',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="lg:col-span-3 bg-card p-8 rounded-xl shadow-md border border-border">
      <h3 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Salutation */}
          <div>
            <label className="block text-sm font-medium text-foreground pb-2" htmlFor="salutation">
              Salutation
            </label>
            <select
              className="block w-full rounded-lg border-border bg-background focus:border-primary focus:ring-primary text-foreground px-3 py-2"
              id="salutation"
              name="salutation"
              value={formData.salutation}
              onChange={handleChange}
              required
            >
              <option value="">Select...</option>
              <option value="Mr.">Mr.</option>
              <option value="Ms.">Ms.</option>
              <option value="Mrs.">Mrs.</option>
            </select>
          </div>
          <div className="hidden sm:block"></div>

          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-foreground pb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              className="block w-full rounded-lg border-border bg-background focus:border-primary focus:ring-primary text-foreground placeholder:text-text-muted px-3 py-2"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              required
              type="text"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-foreground pb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="block w-full rounded-lg border-border bg-background focus:border-primary focus:ring-primary text-foreground placeholder:text-text-muted px-3 py-2"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              required
              type="text"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-foreground pb-2" htmlFor="email">
            Email
          </label>
          <input
            className="block w-full rounded-lg border-border bg-background focus:border-primary focus:ring-primary text-foreground placeholder:text-text-muted px-3 py-2"
            id="email"
            name="email"
            placeholder="you@company.com"
            value={formData.email}
            onChange={handleChange}
            required
            type="email"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-foreground pb-2" htmlFor="phone">
            Phone
          </label>
          <div className="flex">
            <select
              className="rounded-l-lg border-r-0 border-border bg-background focus:border-primary focus:ring-primary text-foreground px-3 py-2"
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
            >
              <option value="+228">+228</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+33">+33</option>
            </select>
            <input
              className="block w-full rounded-r-lg border-border bg-background focus:border-primary focus:ring-primary text-foreground placeholder:text-text-muted px-3 py-2"
              id="phone"
              name="phone"
              placeholder="90 00 00 00"
              value={formData.phone}
              onChange={handleChange}
              required
              type="tel"
            />
          </div>
        </div>

        {/* Service */}
        <div>
          <label className="block text-sm font-medium text-foreground pb-2" htmlFor="service">
            Concerned Service
          </label>
          <select
            className="block w-full rounded-lg border-border bg-background focus:border-primary focus:ring-primary text-foreground px-3 py-2"
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a service...</option>
            <option value="investment">Investment Inquiry</option>
            <option value="legal">Legal Consultation</option>
            <option value="partnership">Project Partnership</option>
            <option value="general">General Question</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-foreground pb-2" htmlFor="message">
            Your Message
          </label>
          <textarea
            className="block w-full rounded-lg border-border bg-background focus:border-primary focus:ring-primary text-foreground placeholder:text-text-muted px-3 py-2"
            id="message"
            name="message"
            placeholder="Enter your message here..."
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>

      {/* Thank You Message */}
      {submitted && (
        <div className="mt-6 p-4 rounded-lg bg-green-100 border border-green-300">
          <p className="text-green-800 text-center font-medium">
            Thank you for your inquiry! Our team will get back to you within 2 business days.
          </p>
        </div>
      )}
    </div>
  )
}
