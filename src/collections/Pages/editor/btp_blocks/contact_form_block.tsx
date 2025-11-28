import ContactForm from '@/app/(storefront)/btp_components/Contact/component/ContactForm'
import { ComponentConfig } from '@measured/puck'

export interface ContactFormProps {
  title: string
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
    title: { type: 'text', label: 'Titre' },
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
    title: 'Envoyez-nous un message',
    button: {
      text: 'Envoyer un message',
      href: '#',
    },
  },
  render: ({ title, button }) => {
    return <ContactForm title={title} button={button} />
  },
}
