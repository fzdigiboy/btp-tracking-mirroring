import ServicesSection from "@/app/(storefront)/btp_components/Home/component/ServicesSection"
import { ComponentConfig } from "@measured/puck"
import { ModernEmojiIconPickerField } from "../fields/modernIconPicker"

export interface ConstructionProps {
    title: string
    description: string
    constructions: Array<{
        title: string
        description: string
        icon: string
    }>
    isFullWidth: string
}


// The block structure
export const ConstructionBlock:ComponentConfig<ConstructionProps> = {
  label: 'Construction',
  fields: {
    title: { type: 'text' },
    description: { type: 'text' },
    constructions: {
      type: 'array',
      label: 'Constructions',
      arrayFields: {
        title: { type: 'text' },
        description: { type: 'text' },
                icon: ModernEmojiIconPickerField, // Utilise le custom field ici
      },
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
    title: 'Our End-to-End Construction Services',
    description: 'We handle every detail of your project, so you don\'t have to.',
    constructions:[
      {
         title: 'Land Acquisition & Legal',
    description: 'Securely acquire property and navigate all legal requirements with our expert guidance.',
          icon: '⚖️',
      },
      {
          title: 'Architectural & Engineering',
          description: 'From initial sketches to detailed blueprints, we bring your vision to life with precision.',
          icon: '✏️',
      },
      {
          title: 'Turnkey Construction',
          description: 'We manage every phase of construction, ensuring quality and timely delivery of your project.',
          icon: '🏗️',
      },
  ],
    isFullWidth: 'No',
},
  render: ({ title, description, constructions, isFullWidth }) => {
    return (
       <ServicesSection title={title} services={constructions} isFullWidth={isFullWidth}  description={description} />
    )
  },
}