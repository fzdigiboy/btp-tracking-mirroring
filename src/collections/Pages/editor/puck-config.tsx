import { Config } from '@measured/puck'
import { ABBlock4 } from './btp_blocks/ab-block-4'
import { FooterBlocks } from './btp_blocks/footer'
import { ConstructionBlock } from './btp_blocks/hp-construction'
import { ServiceBlock4 } from './btp_blocks/service-block-4'
// import { HeroSectionBlock } from './btp_blocks/hp-hero'
import { NumberBlock } from './btp_blocks/hp-number'
import { PuckProps } from './puck-types'

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
      components: ['FooterBlocks',], // Header et Footer (les blocks)
    },

    // ===== HOMEPAGE =====
    homepage: {
      title: '🏠 Home',
      components: ['NumberBlock', 'ConstructionBlock',],
    },

    // ===== About Us =====
    about_us: {
      title: '📰 About Us',
      components: ['ABBlock4'],
    },

    // ===== Services =====
    services: {
      title: '📝 Services',
      components: ["ServiceBlock4"],
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
    // HeroSectionBlock,
    NumberBlock,
    ConstructionBlock,
    FooterBlocks,
    ABBlock4,
    ServiceBlock4,
    // ===== About Us =====
    // ===== Services =====
    // ===== Projects =====
    // ===== Project Details =====
    // ===== Testimonials =====
    // ===== Contact =====
  },
}
