import Footer from "@/app/(storefront)/btp_components/common_component/footer"
import { ComponentConfig } from "@measured/puck"
import ImagePickerField from "../components/ImagePickerField"
import { ModernEmojiIconPickerField } from "../fields/modernIconPicker"

export interface FooterProps {
    logoText: string
    logo?: {
    url: string
    alt: string
  }
    description?: string
    sections: Array<{
        title: string
        links: Array<{
            label: string
            href: string
            icons?:string
        }>
    }>
    copyrightText?: string
}

export const FooterBlocks: ComponentConfig<FooterProps> = {
  label: 'Footer',
  fields: {
    logoText: { type: 'text' ,label:'Logo Text'},
    logo: {
      type: 'custom',
      label: 'Logo',
      render: ({ onChange, value }) => (
        <ImagePickerField
          label="Logo"
          value={value as any}
          onChange={onChange as any}
          placeholder="Select a logo from your media library"
        />
      ),
    },
    description: { type: 'textarea' },
    sections: {
      type: 'array',
      label: 'Footer Sections',
      arrayFields: {
        title: { type: 'text' },
        links: {
          type: 'array',
          label: 'Links',
          arrayFields: {
            label: { type: 'text' },
            href: { type: 'text' },
            icons:ModernEmojiIconPickerField,
          },
          getItemSummary: (item) => item.label || 'Link',
        },
      },
      getItemSummary: (item) => item.title || 'Section',
    },
   
    copyrightText: { type: 'text' },
  },
  defaultProps: {
    logoText: 'TogoBuild',
    description: 'Building dreams in Togo for the global diaspora. Your trusted partner for seamless, remote construction projects.',
    sections: [
      {
        title: 'Quick Links',
        links: [
          { label: 'Services', href: '#' },
          { label: 'Blog', href: '#' },
          { label: 'About', href: '#' },
          { label: 'Contact', href: '#' },
        ],
      },
      {
        title: 'Contact',
        links: [
          { label: '123 Rue de la Paix, Lomé, Togo', href: '',icons:"MapPin" },
          { label: '+228 90 00 00 00', href: '',icons:"Phone" },
          { label: 'contact@togobuild.com', href: '',icons:"Mail" },
        ],
      },
    ],
    copyrightText: '© 2024 TogoBuild. All rights reserved.',
  },
  render: ({
    logoText,
    logo,
    description,
    sections,
    copyrightText,
  }) => {
    return (
      <Footer
        logoText={logoText}
        logo={logo}
        description={description || ''}
        sections={sections}
        copyrightText={copyrightText || ''}
      />
    )
  },
}