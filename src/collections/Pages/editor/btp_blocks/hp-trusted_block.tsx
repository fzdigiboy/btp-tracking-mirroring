import PartnersSectionAbout from '@/app/(storefront)/btp_components/About/component/PartnersSection'
import PartnersSection from '@/app/(storefront)/btp_components/Home/component/PartnersSection'
import { ComponentConfig } from '@measured/puck'
import ImagePickerField from '../components/ImagePickerField'

export interface PartnersProps {
  variant: 'simple' | 'detailed'
  // Simple
  simpleTitle?: string

  // Detailed
  headline?: string
  detailedTitle?: string
  description?: string

  partners: Array<{
    name: string
    logo: {
      url: string
      alt: string
    }
  }>
  isFullWidth?: string
}

export const PartnersBlock: ComponentConfig<PartnersProps> = {
  label: 'Partners Section',
  fields: {
    variant: {
      type: 'select',
      options: [
        { label: 'Simple', value: 'simple' },
        { label: 'Detailed / Premium', value: 'detailed' },
      ],
    },
    simpleTitle: { type: 'text' },
    headline: { type: 'text' },
    detailedTitle: { type: 'text' },
    description: { type: 'text' },
    partners: {
      type: 'array',
      arrayFields: {
        name: { type: 'text' },
        logo: {
          type: 'custom',
          label: 'Partner Logo',
          render: ({ value, onChange }) => (
            <ImagePickerField label="Logo" value={value} onChange={onChange} />
          ),
        },
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
    variant: 'simple',
    simpleTitle: 'Trusted by Industry Leaders',
    headline: 'Building Confidence',
    detailedTitle: 'Our Trusted Partners & Certifications',
    description:
      'We collaborate with industry-leading institutions and hold certifications guaranteeing quality.',
    partners: [
      {
        name: 'Caterpillar',
        logo: {
          url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGP-RVeSHe...',
          alt: 'Caterpillar',
        },
      },
      {
        name: 'Lafarge',
        logo: {
          url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbuqOT-ikX...',
          alt: 'Lafarge',
        },
      },
    ],
    isFullWidth: 'No',
  },
  render: ({
    variant,
    simpleTitle,
    headline,
    detailedTitle,
    description,
    partners,
    isFullWidth,
  }) => {
    if (variant === 'simple') {
      return <PartnersSection simpleTitle={simpleTitle} partners={partners} />
    } else {
      return (
        <PartnersSectionAbout
          headline={headline}
          title={detailedTitle}
          description={description}
          partners={partners}
        />
      )
    }
  },
}
