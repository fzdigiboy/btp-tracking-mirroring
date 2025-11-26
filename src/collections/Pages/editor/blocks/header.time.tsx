// components/Header.tsx
import React from 'react'

// Ces types restent dans le frontend
export type HeaderLink = {
  label: string
  href: string
}

export type HeaderProps = {
  title: string
  links: HeaderLink[]
  ctaText: string
  ctaLink: string
}

export const Header: React.FC<HeaderProps> = ({ title, links, ctaText, ctaLink }) => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-center whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="flex items-center justify-between w-full max-w-6xl px-4 py-3">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <div className="size-6 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </div>
          <h2 className="text-xl font-bold tracking-[-0.015em] text-text-light dark:text-text-dark">
            {title}
          </h2>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-8">
          <div className="flex items-center gap-6">
            {links.map((l, index) => (
              <a
                key={index}
                href={l.href}
                className="text-sm font-medium hover:text-primary dark:hover:text-secondary"
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href={ctaLink}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary text-white text-sm font-bold tracking-wide hover:bg-opacity-90 transition-colors"
          >
            <span className="truncate">{ctaText}</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
            <span className="material-symbols-outlined text-text-light dark:text-text-dark">
              menu
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
