import ContactInfo from '@/app/(storefront)/btp_components/Contact/component/ContactInfo'
import { ComponentConfig } from '@measured/puck'
import ImagePickerField from '../components/ImagePickerField'

export interface ContactInfoProps {
  address: string
  phones: Array<{
    value: string
  }>
  email: string
  mapUrl: string
  socials: Array<{
    name: string
    url: string
    icon: {
      url: string
      alt: string
    }
  }>
}

export const ContactInfoBlock: ComponentConfig<ContactInfoProps> = {
  label: 'Informations sur le contact',
  fields: {
    address: { type: 'text', label: 'Adresse' },

    phones: {
      type: 'array',
      label: 'Téléphones',
      arrayFields: {
        value: { type: 'text', label: 'Numéro' },
      },
    },

    email: { type: 'text', label: 'Email' },

    mapUrl: { type: 'text', label: 'Map URL (Google Maps Embed)' },

    socials: {
      type: 'array',
      label: 'Réseaux sociaux',
      arrayFields: {
        name: { type: 'text', label: 'Nom (ex: LinkedIn)' },
        url: { type: 'text', label: 'URL du profil' },
        icon: {
          type: 'custom',
          label: 'Image',
          render: ({ onChange, value }: any) => (
            <ImagePickerField label="Image" value={value} onChange={onChange} />
          ),
        },
      },
    },
  },

  defaultProps: {
    address: '123 Avenue de la République, Lomé, Togo',
    phones: [{ value: '+228 90 12 34 56' }, { value: '+228 98 76 54 32' }],
    email: 'invest@build-in-togo.com',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63467.04233765487!2d1.1718335492341957!3d6.173238122394539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e1c152220f57%3A0x46b7352817293532!2sLom%C3%A9%2C%20Togo!5e0!3m2!1sen!2sus!4v1684321098765!5m2!1sen!2sus',

    socials: [],
  },

  render: ({ address, phones, email, mapUrl, socials }) => (
    <ContactInfo
      address={address}
      phones={phones}
      email={email}
      mapUrl={mapUrl}
      socials={socials}
    />
  ),
}
