import type { ComponentConfig } from '@measured/puck'
import Link from 'next/link'
import React from 'react'

export type FooterLink = {
  label: string
  href: string
}

export type FooterSection = {
  title: string
  links: FooterLink[]
}

export type SocialLink = {
  platform: 'facebook' | 'twitter' | 'linkedin' | 'instagram'
  href: string
}

export type FooterProps = {
  logoText: string
  logoIcon?: string
  description?: string
  sections?: FooterSection[]
  contactInfo?: {
    address?: string[]
    email?: string
    phone?: string
  }
  socialLinks?: SocialLink[]
  copyrightText?: string
  showSocialLinks?: boolean
  layout?: 'full' | 'simple'
}

const SocialIcon: React.FC<{ platform: string }> = ({ platform }) => {
  switch (platform) {
    case 'facebook':
      return (
        <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            clipRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            fillRule="evenodd"
          />
        </svg>
      )
    case 'twitter':
      return (
        <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            clipRule="evenodd"
            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H6.328C3.965 1 2 2.985 2 5.332v13.335C2 21.015 3.965 23 6.328 23h11.34c2.363 0 4.328-1.985 4.328-4.332V5.332C22 2.985 20.031 1 17.668 1z"
            fillRule="evenodd"
          />
        </svg>
      )
    case 'instagram':
      return (
        <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      )
    default:
      return null
  }
}

export const Footer: React.FC<FooterProps> = ({
  logoText,
  logoIcon,
  description,
  sections = [],
  contactInfo,
  socialLinks = [],
  copyrightText,
  showSocialLinks = true,
  layout = 'full',
}) => {
  if (layout === 'simple') {
    return (
      <footer className="flex justify-center border-t border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark px-4">
        <div className="w-full max-w-6xl py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="size-4 text-text-light dark:text-text-dark">
                {logoIcon ? (
                  <div dangerouslySetInnerHTML={{ __html: logoIcon }} />
                ) : (
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z"
                      fill="currentColor"
                    />
                  </svg>
                )}
              </div>
              <p className="font-bold text-base text-text-light dark:text-text-dark">{logoText}</p>
            </div>
            <p className="text-sm text-text-light/60 dark:text-text-dark/60 text-center md:text-left">
              {copyrightText || `© ${new Date().getFullYear()} ${logoText}. All Rights Reserved.`}
            </p>
            {sections && sections.length > 0 && (
              <div className="flex gap-4">
                {sections.map((section, index) => (
                  <React.Fragment key={index}>
                    {section.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        className="text-sm text-text-light/60 dark:text-text-dark/60 hover:text-primary"
                        href={link.href}
                      >
                        {link.label}
                      </a>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className="flex justify-center border-t border-subtle-light dark:border-subtle-dark bg-background-light dark:bg-background-dark px-4">
      <div className="w-full max-w-6xl py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link className="flex items-center gap-3" href="/">
              <div className="size-6 text-primary dark:text-accent">
                {logoIcon ? (
                  <div dangerouslySetInnerHTML={{ __html: logoIcon }} />
                ) : (
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_6_535)">
                      <path
                        clipRule="evenodd"
                        d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                        fill="currentColor"
                        fillRule="evenodd"
                      />
                    </g>
                  </svg>
                )}
              </div>
              <h2 className="font-serif text-xl font-bold text-text-light dark:text-text-dark">
                {logoText}
              </h2>
            </Link>
            {description && (
              <p className="mt-4 text-sm text-subtext-light dark:text-subtext-dark">
                {description}
              </p>
            )}
          </div>

          {/* Footer Sections */}
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-bold uppercase tracking-wider">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      className="text-sm hover:text-primary dark:hover:text-accent"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          {contactInfo && (
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider">Contact</h3>
              <ul className="mt-4 space-y-2">
                {contactInfo.address?.map((line, index) => (
                  <li key={index} className="text-sm">
                    {line}
                  </li>
                ))}
                {contactInfo.email && <li className="text-sm">{contactInfo.email}</li>}
                {contactInfo.phone && <li className="text-sm">{contactInfo.phone}</li>}
              </ul>
            </div>
          )}
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-subtle-light dark:border-subtle-dark pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-subtext-light dark:text-subtext-dark">
            {copyrightText || `© ${new Date().getFullYear()} ${logoText}. All rights reserved.`}
          </p>
          {showSocialLinks && socialLinks.length > 0 && (
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  className="text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-accent"
                  href={social.href}
                  aria-label={social.platform}
                >
                  <SocialIcon platform={social.platform} />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}

export const FooterConfig: ComponentConfig<FooterProps> = {
  fields: {
    logoText: {
      type: 'text',
      label: 'Logo Text',
    },
    logoIcon: {
      type: 'textarea',
      label: 'Logo Icon SVG (optional)',
    },
    description: {
      type: 'textarea',
      label: 'Description',
    },
    layout: {
      type: 'radio',
      label: 'Layout Style',
      options: [
        { label: 'Full', value: 'full' },
        { label: 'Simple', value: 'simple' },
      ],
    },
    sections: {
      type: 'array',
      label: 'Footer Sections',
      arrayFields: {
        title: { type: 'text', label: 'Section Title' },
        links: {
          type: 'array',
          label: 'Links',
          arrayFields: {
            label: { type: 'text', label: 'Link Label' },
            href: { type: 'text', label: 'Link URL' },
          },
          getItemSummary: (item) => item.label || 'Link',
        },
      },
      getItemSummary: (item) => item.title || 'Section',
    },
    contactInfo: {
      type: 'object',
      label: 'Contact Information',
      objectFields: {
        address: {
          type: 'array',
          label: 'Address Lines',
          arrayFields: {
            line: { type: 'text' },
          },
        },
        email: { type: 'text', label: 'Email' },
        phone: { type: 'text', label: 'Phone' },
      },
    },
    socialLinks: {
      type: 'array',
      label: 'Social Links',
      arrayFields: {
        platform: {
          type: 'select',
          label: 'Platform',
          options: [
            { label: 'Facebook', value: 'facebook' },
            { label: 'Twitter', value: 'twitter' },
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'Instagram', value: 'instagram' },
          ],
        },
        href: { type: 'text', label: 'URL' },
      },
      getItemSummary: (item) => item.platform || 'Social Link',
    },
    showSocialLinks: {
      type: 'radio',
      label: 'Show Social Links',
      options: [
        { label: 'Yes', value: true },
        { label: 'No', value: false },
      ],
    },
    copyrightText: {
      type: 'text',
      label: 'Copyright Text (optional)',
    },
  },
  defaultProps: {
    logoText: 'Dr. Eleanor Vance',
    description: 'Expert legal and strategic counsel for modern businesses.',
    layout: 'full',
    sections: [
      {
        title: 'Navigation',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Services', href: '/services' },
          { label: 'Blog', href: '/blog' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    contactInfo: {
      address: ['123 Legal Ave, Suite 400', 'New York, NY 10001'],
      email: 'contact@evance.com',
    },
    socialLinks: [
      { platform: 'facebook', href: '#' },
      { platform: 'twitter', href: '#' },
      { platform: 'linkedin', href: '#' },
    ],
    showSocialLinks: true,
  },
  render: ({
    logoText,
    logoIcon,
    description,
    sections,
    contactInfo,
    socialLinks,
    copyrightText,
    showSocialLinks,
    layout,
  }) => {
    return (
      <Footer
        logoText={logoText}
        logoIcon={logoIcon}
        description={description}
        sections={sections}
        contactInfo={contactInfo}
        socialLinks={socialLinks}
        copyrightText={copyrightText}
        showSocialLinks={showSocialLinks}
        layout={layout}
      />
    )
  },
}
