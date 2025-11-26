import { ComponentConfig } from '@measured/puck'

// Ces types restent dans le frontend
export type HeaderLink = {
  label: string
  href: string
}

export type HeaderProps = {
  title: string
  links: HeaderLink[]

  cta: {
    text: string
    link: string
    paddingX: string
    paddingY: string
    bgColor: string
    textColor: string
    borderRadius: string
    hoverOpacity: string
  }
}

export const HeaderBlock: ComponentConfig<HeaderProps> = {
  fields: {
    title: { type: 'text', label: 'Logo Title' },

    links: {
      type: 'array',
      label: 'Navigation Links',
      arrayFields: {
        label: { type: 'text' },
        href: { type: 'text' },
      },
    },

    cta: {
      type: 'object',
      label: 'CTA Button',
      objectFields: {
        text: { type: 'text', label: 'Text' },
        link: { type: 'text', label: 'Link' },

        paddingX: { type: 'text', label: 'Padding X (ex: px-6)' },
        paddingY: { type: 'text', label: 'Padding Y (ex: h-10)' },

        bgColor: { type: 'text', label: 'Background Color class' },
        textColor: { type: 'text', label: 'Text Color class' },

        borderRadius: { type: 'text', label: 'Border Radius class' },

        hoverOpacity: {
          type: 'text',
          label: 'Hover class (ex: hover:bg-opacity-80)',
        },
      },
    },
  },

  defaultProps: {
    title: 'TogoBuild',
    links: [
      { label: 'Services', href: '#' },
      { label: 'Projects', href: '#' },
      { label: 'About', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    cta: {
      text: 'Request a Quote',
      link: '#',
      paddingX: 'px-6',
      paddingY: 'h-10',
      bgColor: 'bg-primary',
      textColor: 'text-white',
      borderRadius: 'rounded-full',
      hoverOpacity: 'hover:bg-opacity-90',
    },
  },

  // render: (props) => <Header {...props} />,
  // render: (props) => <Header/>;
}
