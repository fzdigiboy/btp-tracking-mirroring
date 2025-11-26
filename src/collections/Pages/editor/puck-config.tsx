import { Config } from '@measured/puck'
import { PuckProps } from './puck-types'
import { HeroSectionBlock } from './btp_blocks/hp-hero'

// ========================================
// PORTFOLIO DESIGN BLOCKS (blo_portfolio)
// ========================================
import { AuthProvider } from '../../../contexts/auth-context'

export const config: Config<PuckProps> = {
  root: {
    fields: {
      title: { type: 'text' },
      description: { type: 'textarea' },
      handle: { type: 'text' },
    },
    defaultProps: {
      useGlobalContainer: 'no',
    },
    render: ({ children, useGlobalContainer }) => {
      const content =
        useGlobalContainer === 'yes' ? <div className="site-container">{children}</div> : children

      return (
        <div className="twp">
          <AuthProvider>{content}</AuthProvider>
        </div>
      )
    },
  },
  // Ici, mettre tous les composants qui seront dans l'accordéon ex : Services, About, Contact
  categories: {
    // ===== LAYOUT =====
    layout: {
      title: '🏗️ Layout & Structure',
      components: [], // Header et Footer (les blocks)
    },

    // ===== HOMEPAGE =====
    homepage: {
      title: '🏠 Home',
      components: ['HeroSectionBlock'],
    },

    // ===== About Us =====
    about_us: {
      title: '📰 About Us',
      components: [],
    },

    // ===== Services =====
    services: {
      title: '📝 Services',
      components: [],
    },

    // ===== Projects =====²
    projects: {
      title: '👤 Projects',
      components: [],
    },

    // ===== Project Details =====
    project_details: {
      title: '💼 Project Details',
      components: [],
    },

    // ===== Testimonials =====
    testimonials: {
      title: '📄 Testimonials',
      components: [],
    },

    // ===== Contact =====
    contact: {
      title: '📄 Contact',
      components: [],
    },
  },

  components: {
    // Tous les blocs créés
    // ===== LAYOUT =====
    // ===== HOMEPAGE =====
    HeroSectionBlock,
    // ===== About Us =====
    // ===== Services =====
    // ===== Projects =====
    // ===== Project Details =====
    // ===== Testimonials =====
    // ===== Contact =====
  },
}
