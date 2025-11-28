import { Config } from '@measured/puck'
import { ABBlock4 } from './btp_blocks/ab-block-4'
import { FooterBlocks } from './btp_blocks/footer'
import { ConstructionBlock } from './btp_blocks/hp-construction'
import { ServiceBlock4 } from './btp_blocks/service-block-4'
import { NumberBlock } from './btp_blocks/hp-number'
import { PuckProps } from './puck-types'
import { HeaderBlock } from './btp_blocks/header_block'
import { PartnersBlock } from './btp_blocks/hp-trusted_block'
import { AboutBlock1 } from './btp_blocks/about-block1'

// ========================================
// PORTFOLIO DESIGN BLOCKS (blo_portfolio)
// ========================================
import { AuthProvider } from '../../../contexts/auth-context'
import { ServicesBlock1 } from './btp_blocks/services-block1'
import { RecentProjectSectionBlock } from './btp_blocks/hp-recent-projects'
import { TestimonialsSectionBlock } from './btp_blocks/hp-testimonials'
import { StoryMissionSectionBlock } from './btp_blocks/about-story'
import { TeamSectionBlock } from './btp_blocks/about-team'
import { HeroSectionBlock } from './btp_blocks/hp-hero'
import { Custom4Blocks } from './btp_blocks/4custom-blocks'
import { TitleDescriptionBlock } from './btp_blocks/title_description'
import { ContactFormBlock } from './btp_blocks/contact_form_block'
import { TestimoniesSectionBlock } from './btp_blocks/testimonials'

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
      components: ['FooterBlocks', 'HeaderBlock'], // Header et Footer (les blocks)
    },

    // ===== HOMEPAGE =====
    homepage: {
      title: '🏠 Home',
      components: [
        'HeroSectionBlock',
        'RecentProjectSectionBlock',
        'TestimonialsSectionBlock',
        'NumberBlock',
        'ConstructionBlock',
        'PartnersBlock',
      ],
    },

    // ===== About Us =====
    about_us: {
      title: '📰 About Us',
      components: [
        'AboutBlock1',
        'StoryMissionSectionBlock',
        'TeamSectionBlock',
        'ABBlock4',
        'Custom4Blocks',
      ],
    },

    // ===== Services =====
    services: {
      title: '📝 Services',
      components: ['ServiceBlock4'],
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
      components: ['TestimoniesSectionBlock'],
    },

    // ===== Contact =====
    contact: {
      title: '📄 Contact',
      components: ['TitleDescriptionBlock', 'ContactFormBlock'],
    },
  },

  components: {
    // Tous les blocs créés
    // ===== HEADER =====
    HeaderBlock,
    // ===== PARTNERS =====
    PartnersBlock,
    // ===== LAYOUT =====
    // ===== HOMEPAGE =====
    HeroSectionBlock,
    RecentProjectSectionBlock,
    TestimonialsSectionBlock,
    StoryMissionSectionBlock,
    TeamSectionBlock,
    NumberBlock,
    ConstructionBlock,
    FooterBlocks,
    ABBlock4,
    ServiceBlock4,
    // ===== About Us =====
    AboutBlock1,
    // ===== Services =====
    ServicesBlock1,
    // ===== CTA Blocks =====
    Custom4Blocks,
    TestimoniesSectionBlock,
    // ===== Projects =====
    // ===== Project Details =====
    // ===== Testimonials =====
    // ===== Contact =====
    TitleDescriptionBlock,
    ContactFormBlock,
  },
}
