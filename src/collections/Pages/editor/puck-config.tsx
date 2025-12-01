import { Config } from '@measured/puck'
import { ABBlock4 } from './btp_blocks/ab-block-4'
import { AboutBlock1 } from './btp_blocks/about-block1'
import { FooterBlocks } from './btp_blocks/footer'
import { HeaderBlock } from './btp_blocks/header_block'
import { HeadingBlock } from './btp_blocks/heading-blocks'
import { ConstructionBlock } from './btp_blocks/hp-construction'
import { NumberBlock } from './btp_blocks/hp-number'
import { PartnersBlock } from './btp_blocks/hp-trusted_block'
import { ServiceBlock4 } from './btp_blocks/service-block-4'
import { ServiceListBlock } from './btp_blocks/service-blocks'
import { Grid } from './components/Grid'
import { PuckProps } from './puck-types'
// ========================================
// PORTFOLIO DESIGN BLOCKS (blo_portfolio)
// ========================================
import { AuthProvider } from '../../../contexts/auth-context'
import { Custom4Blocks } from './btp_blocks/4custom-blocks'
import { StoryMissionSectionBlock } from './btp_blocks/about-story'
import { TeamSectionBlock } from './btp_blocks/about-team'
import { ContactFormBlock } from './btp_blocks/contact_form_block'
import { HeroSectionBlock } from './btp_blocks/hp-hero'
import { RecentProjectSectionBlock } from './btp_blocks/hp-recent-projects'
import { TestimonialsSectionBlock } from './btp_blocks/hp-testimonials'
import { ImageGalleryBlock } from './btp_blocks/mediaPlayers'
import { ServicesBlock1 } from './btp_blocks/services-block1'
import { TestimoniesSectionBlock } from './btp_blocks/testimonials'
import { TitleDescriptionBlock } from './btp_blocks/title_description'
import { ContactInfoBlock } from './btp_blocks/contact_info'

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
      components: ['FooterBlocks', 'HeaderBlock', 'HeadingBlock'], // Header et Footer (les blocks)
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
      components: ['ServiceBlock4', 'ServicesBlock1', 'ServiceListBlock'],
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
      components: ['TestimoniesSectionBlock', 'HeadingBlock', 'ImageGalleryBlock'],
    },

    // ===== Contact =====
    contact: {
      title: '📄 Contact',
      components: [
        'TitleDescriptionBlock',
        'Grid',
        'ContactFormBlock',
        'ContactInfoBlock',
        'HeadingBlock',
      ],
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
    ServiceListBlock,
    // ===== Projects =====
    // ===== Project Details =====
    // ===== Testimonials =====
    HeadingBlock,
    ImageGalleryBlock,
    // ===== Contact =====
    TitleDescriptionBlock,
    Grid,
    ContactFormBlock,
    ContactInfoBlock,
  },
}
