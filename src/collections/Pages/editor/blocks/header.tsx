import type { ComponentConfig } from '@measured/puck'
import React from 'react'

export type NavigationItem = {
  label: string
  href: string
  isActive?: boolean
}

export type HeaderProps = {
  logoText: string
  logoIcon?: string
  navigationItems: NavigationItem[]
  ctaText?: string
  ctaLink?: string
  showCtaButton?: boolean
}

export const Header: React.FC<HeaderProps> = ({
  logoText,
  logoIcon,
  navigationItems,
  ctaText = 'Book a Consultation',
  ctaLink = '#',
  showCtaButton = true,
}) => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-center border-b border-subtle-light dark:border-subtle-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm px-4">
      <div className="flex h-16 w-full max-w-6xl items-center justify-between">
        {/* Logo Section */}
        <a className="flex items-center gap-3" href="/">
          <div className="size-6 text-primary dark:text-accent">
            {logoIcon ? (
              <div dangerouslySetInnerHTML={{ __html: logoIcon }} />
            ) : (
              <svg
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_6_535)">
                  <path
                    clipRule="evenodd"
                    d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6_535">
                    <rect fill="white" height="48" width="48" />
                  </clipPath>
                </defs>
              </svg>
            )}
          </div>
          <h2 className="font-serif text-xl font-bold text-text-light dark:text-text-dark">
            {logoText}
          </h2>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              className={`text-sm font-medium ${
                item.isActive
                  ? 'text-primary dark:text-accent'
                  : 'hover:text-primary dark:hover:text-accent'
              }`}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        {showCtaButton && (
          <div className="flex items-center gap-4">
            <a
              href={ctaLink}
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-accent text-primary text-sm font-bold tracking-wide transition-opacity hover:opacity-90"
            >
              <span className="truncate">{ctaText}</span>
            </a>
          </div>
        )}
      </div>
    </header>
  )
}

export const HeaderConfig: ComponentConfig<HeaderProps> = {
  fields: {
    logoText: {
      type: 'text',
      label: 'Logo Text',
    },
    logoIcon: {
      type: 'textarea',
      label: 'Logo Icon SVG (optional)',
    },
    navigationItems: {
      type: 'array',
      label: 'Navigation Items',
      arrayFields: {
        label: { type: 'text', label: 'Label' },
        href: { type: 'text', label: 'Link' },
        isActive: { type: 'radio', label: 'Active', options: [
          { label: 'Yes', value: true },
          { label: 'No', value: false },
        ]},
      },
      getItemSummary: (item) => item.label || 'Nav Item',
    },
    ctaText: {
      type: 'text',
      label: 'CTA Button Text',
    },
    ctaLink: {
      type: 'text',
      label: 'CTA Button Link',
    },
    showCtaButton: {
      type: 'radio',
      label: 'Show CTA Button',
      options: [
        { label: 'Yes', value: true },
        { label: 'No', value: false },
      ],
    },
  },
  defaultProps: {
    logoText: 'Dr. Eleanor Vance',
    navigationItems: [
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
    ctaText: 'Book a Consultation',
    ctaLink: '#',
    showCtaButton: true,
  },
  render: ({ logoText, logoIcon, navigationItems, ctaText, ctaLink, showCtaButton }) => {
    return (
      <Header
        logoText={logoText}
        logoIcon={logoIcon}
        navigationItems={navigationItems}
        ctaText={ctaText}
        ctaLink={ctaLink}
        showCtaButton={showCtaButton}
      />
    )
  },
}
