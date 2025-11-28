import { ComponentConfig } from '@measured/puck'
import ImagePickerField from '../components/ImagePickerField'
import { colorPickerField } from '../fields/color-picker'
import Header from '@/app/(storefront)/btp_components/common_component/header'
import { PageSelectorField } from '../components/PageSelectorField'

export interface HeaderProps {
  logo?: {
    text?: string
    image?: {
      url: string
      alt: string
    }
  }
  navLinks?: Array<{
    label: string
    linkType: 'internal' | 'external'
    internalPage?: any
    externalUrl?: string
  }>
  raqButton?: {
    text: string
    href: string
    color: string
  }
}

export const HeaderBlock: ComponentConfig<HeaderProps> = {
  label: 'Header',
  resolveFields: (data, { fields }) => {
    // Champs de base qui sont toujours présents
    const baseFields = {
      logo: {
        type: 'object',
        label: 'Logo',
        objectFields: {
          text: { type: 'text' },
          image: {
            type: 'custom',
            label: 'Image',
            render: ({ onChange, value }: any) => (
              <ImagePickerField label="Image" value={value} onChange={onChange} />
            ),
          },
        },
      },

      navLinks: {
        type: 'array',
        label: 'Navigation Links',
        arrayFields: {
          label: { type: 'text', label: 'Label' },
          linkType: {
            type: 'select',
            label: 'Link Type',
            options: [
              { label: 'Internal', value: 'internal' },
              { label: 'External', value: 'external' },
            ],
          },
        },
      },

      raqButton: {
        type: 'object',
        label: 'Request a Quote',
        objectFields: {
          text: { type: 'text' },
          href: { type: 'text' },
          color: colorPickerField,
        },
      },
    } as any

    // Pour chaque lien, ajoutez le champ conditionnel
    const navLinksFields = { ...baseFields.navLinks }

    // Vérifiez si on a des navLinks et ajoutez les champs conditionnels
    if (data.props.navLinks && data.props.navLinks.length > 0) {
      data.props.navLinks.forEach((link, index) => {
        if (link.linkType === 'internal') {
          navLinksFields.arrayFields = {
            ...navLinksFields.arrayFields,
            internalPage: {
              type: 'custom',
              label: 'Internal Page',
              render: ({ onChange, value }: any) => (
                <PageSelectorField value={value} onChange={onChange} />
              ),
            },
          }
        } else if (link.linkType === 'external') {
          navLinksFields.arrayFields = {
            ...navLinksFields.arrayFields,
            externalUrl: {
              type: 'text',
              label: 'External URL',
            },
          }
        }
      })
    }

    return {
      ...baseFields,
      navLinks: navLinksFields,
    }
  },

  defaultProps: {
    logo: {
      text: 'TogoBuild',
      image: {
        url: 'https://placehold.co/200x200',
        alt: 'TogoBuild',
      },
    },
    navLinks: [
      {
        label: 'Home',
        linkType: 'internal',
        internalPage: { slug: '/Home', title: 'Home' },
      },
      {
        label: 'About',
        linkType: 'internal',
        internalPage: { slug: '/About', title: 'About Us' },
      },
    ],
    raqButton: {
      text: 'Request a Quote',
      href: '#',
      color: '#003366',
    },
  },

  render: ({ logo, navLinks, raqButton }) => {
    return (
      <div style={{ background: 'white', color: 'black' }}>
        <Header logo={logo} navLinks={navLinks} raqButton={raqButton} />
      </div>
    )
  },
}
