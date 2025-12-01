import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'article' | 'main' | 'aside'
  variant?: 'default' | 'section'
}

/**
 * Container component that uses Site Settings for max-width and padding
 *
 * Usage:
 * ```tsx
 * <Container>Your content</Container>
 * <Container variant="section">Section with vertical spacing</Container>
 * <Container as="section" className="bg-primary">Custom section</Container>
 * ```
 */
export async function Container({
  children,
  className = '',
  as: Component = 'div',
  variant = 'default',
}: ContainerProps) {
  const baseClasses = variant === 'section' ? 'site-section' : 'site-container'

  return <Component className={`${baseClasses} ${className}`}>{children}</Component>
}

/**
 * Client-side Container that uses CSS variables
 * Use this when you need a container in a client component
 */
export function ContainerClient({
  children,
  className = '',
  as: Component = 'div',
  variant = 'default',
}: ContainerProps) {
  const baseClasses = variant === 'section' ? 'site-section' : 'site-container'

  return <Component className={`${baseClasses} ${className}`}>{children}</Component>
}
