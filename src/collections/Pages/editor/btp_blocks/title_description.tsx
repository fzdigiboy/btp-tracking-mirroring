import ContactHeader from '@/app/(storefront)/btp_components/Contact/component/ContactHeader'
import { ComponentConfig } from '@measured/puck'
import { ColorPickerField } from '../components/CustomColorPicker'

export interface TitleDescriptionProps {
  title: string
  description: string
  textColor?: string
  backgroundColor?: string
  isFullWidth: string
}

export const TitleDescriptionBlock: ComponentConfig<TitleDescriptionProps> = {
  label: 'Titre et Description',
  fields: {
    title: { type: 'text', label: 'Titre' },
    description: { type: 'textarea', label: 'Description' },
    textColor: {
      ...(ColorPickerField as any),
      label: 'Couleur du texte',
    },
    backgroundColor: {
      ...(ColorPickerField as any),
      label: 'Couleur de fond',
    },
    isFullWidth: {
      type: 'radio',
      options: [
        { label: 'Yes', value: 'Yes' },
        { label: 'No', value: 'No' },
      ],
    },
  },

  defaultProps: {
    title: 'Contact Our Team in Togo',
    description: 'We are here to help you get started with your investment journey.',
    isFullWidth: 'No',
  },

  render: ({ title, description, textColor, backgroundColor, isFullWidth }) => {
    return (
      <ContactHeader
        title={title}
        description={description}
        textColor={textColor}
        backgroundColor={backgroundColor}
        isFullWidth={isFullWidth}
      />
    )
  },
}
