import ContactForm from '@/app/(storefront)/btp_components/Contact/component/ContactForm'
import { ComponentConfig } from '@measured/puck'

export interface ContactFormProps {
  formTitle?: string
  button: {
    text: string
    href: string
    color?: string
    backgroundColor?: string
  }
}

export const ContactFormBlock: ComponentConfig<ContactFormProps> = {
  label: 'Formulaire de contact',
  fields: {
    formTitle: { type: 'text', label: 'Titre' },
    button: {
      type: 'object',
      label: 'Button',
      objectFields: {
        text: { type: 'text' },
        href: { type: 'text' },
        color: { type: 'text' },
        backgroundColor: { type: 'text' },
      },
    },
  },
  defaultProps: {
    formTitle: 'Envoyez-nous un message',
    button: {
      text: 'Envoyer un message',
      href: '#',
    },
  },
  render: ({ formTitle, button }) => {
    return <ContactForm formTitle={formTitle} button={button} />
  },
}
