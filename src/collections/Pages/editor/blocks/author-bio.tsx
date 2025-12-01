import type { ComponentConfig } from '@measured/puck'
import React from 'react'
import Image from 'next/image'
import { ImagePickerField } from '../components/ImagePickerField'

export type AuthorBioProps = {
  title: string
  name: string
  bio: string
  avatar?: {
    url: string
    alt: string
  }
  linkedinUrl?: string
  twitterUrl?: string
}

export const AuthorBio: React.FC<AuthorBioProps> = ({
  title,
  name,
  bio,
  avatar,
  linkedinUrl,
  twitterUrl,
}) => {
  return (
    <section className="py-12 my-12 border-t border-b border-gray-200 dark:border-gray-800">
      <div className="bg-blue-50 dark:bg-blue-900/10 rounded-2xl p-8 md:p-12">
        <p className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-wide mb-4">
          {title}
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Avatar */}
          {avatar?.url && (
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full overflow-hidden relative bg-gray-200 dark:bg-gray-800">
                <Image src={avatar.url} alt={avatar.alt || name} fill className="object-cover" />
              </div>
            </div>
          )}

          {/* Bio */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{name}</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{bio}</p>

            {/* Social Links */}
            {(linkedinUrl || twitterUrl) && (
              <div className="flex gap-3">
                {linkedinUrl && (
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    LinkedIn
                  </a>
                )}
                {twitterUrl && (
                  <a
                    href={twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Twitter
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export const AuthorBioConfig: ComponentConfig<AuthorBioProps> = {
  fields: {
    title: { type: 'text', label: 'Section Title' },
    name: { type: 'text', label: 'Author Name' },
    bio: { type: 'textarea', label: 'Bio' },
    avatar: {
      type: 'object',
      objectFields: {
        url: {
          type: 'custom',
          render: ({ onChange, value }) => (
            <ImagePickerField
              label="Avatar"
              value={value || ''}
              onChange={onChange}
              placeholder="Select avatar"
            />
          ),
        },
        alt: { type: 'text', label: 'Alt Text' },
      },
    },
    linkedinUrl: { type: 'text', label: 'LinkedIn URL' },
    twitterUrl: { type: 'text', label: 'Twitter URL' },
  },
  defaultProps: {
    title: 'About The Author',
    name: 'Dr. Evelyn Reed',
    bio: 'Dr. Evelyn Reed is a leading consultant in legal technology and digital strategy. With over 15 years of experience, she helps law firms navigate the complexities of modernization to enhance efficiency and client value.',
  },
  render: ({ title, name, bio, avatar, linkedinUrl, twitterUrl }) => {
    return (
      <AuthorBio
        title={title}
        name={name}
        bio={bio}
        avatar={avatar}
        linkedinUrl={linkedinUrl}
        twitterUrl={twitterUrl}
      />
    )
  },
}
