import { ComponentConfig } from '@measured/puck'
import TestimonialsSection from '@/app/(storefront)/btp_components/Home/component/TestimonialsSection'
import StoryMissionSection from '@/app/(storefront)/btp_components/About/component/StoryMissionSection'

export interface StoryMissionSectionProps {
  title: string
  subtitle: string
  description: string
  infos: Array<{
    title: string
    content: string
  }>
  // TODO: A mettre dans chaque bloc
  isFullWidth: string
}

// The block structure
export const StoryMissionSectionBlock: ComponentConfig<StoryMissionSectionProps> = {
  label: 'Stories & Missions Section',
  fields: {
    title: { type: 'text' },
    subtitle: { type: 'text' },
    description: { type: 'textarea' },
    infos: {
      type: 'array',
      label: 'Infos',
      max: 3,
      arrayFields: {
        title: { type: 'text' },
        content: { type: 'textarea' },
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
    title: 'What Our International Clients Say',
    subtitle: 'Our Purpose',
    description: 'Founded to bridge the gap for foreign investors, we simplify the process of building in Togo, ensuring every project is a seamless success.',
    infos: [
      {
        title: 'Our Story',
        content: 'Our journey began with a simple goal: to make investing in Togolese real estate accessible, secure, and profitable for clients abroad. Witnessing the challenges faced by the diaspora, we built a company founded on trust and local expertise, combined with international standards of quality and communication.',
      },
      {
        title: 'Our Mission & Vision',
        content: 'Our mission is to empower overseas investors by providing transparent, end-to-end construction and project management services in Togo. We envision a future where anyone, from anywhere, can confidently invest in and contribute to the growth of our nation, building a legacy of shared prosperity.',
      },
    ],
    isFullWidth: 'No',
  },

  render: ({ title, subtitle, description, infos, isFullWidth }) => {
    return (
      <StoryMissionSection
        title={title}
        subtitle={subtitle}
        description={description}
        infos={infos}
        isFullWidth={isFullWidth}
      />
    )
  },
}
