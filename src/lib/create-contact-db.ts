'use server'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Service } from '@/payload-types'

interface ContactProps {
  firstName: string
  lastName: string
  email: string
  phone: string
  service: number | Service
  message: string
}
// Form data comes from the client (firstname, lastname, email, phone, service, message)
// We need to create a new contact in the database
export async function createContact(formData: ContactProps) {
  const payload = await getPayload({ config })
  try {
    const newContact = await payload.create({
      collection: 'contacts',
      data: {
        firstname: formData.firstName,
        lastname: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        service: Number(formData.service),
        message: formData.message,
      },
    })
    // console.log('New contact created:', newContact)

    return { success: true, contact: newContact }
  } catch (error) {
    // console.error('Error creating contact:', error)
    return { success: false, error: 'Failed to create contact' }
  }
}
