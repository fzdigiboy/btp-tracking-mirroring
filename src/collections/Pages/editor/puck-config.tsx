import { Config } from '@measured/puck'
import { PuckProps } from './puck-types'

// ========================================
// PORTFOLIO DESIGN BLOCKS (blo_portfolio)
// ========================================

import {
  // Homepage
  HeroSection,
  ServicesSection,
  AboutSection,
  TestimonialsSection,
  LogoCloud,
  CTASection,
  // Blog Pages
  BlogFeaturedHero,
  BlogSearchFilters,
  BlogArticlesGrid,
  Pagination,
  NewsletterSection,
  // Blog Post Detail
  ArticleHeader,
  ArticleContent,
  AuthorBio,
  RelatedArticles,
  // Profile/About
  ProfileHero,
  TabsSection,
  CredentialsGrid,
  TimelineExperience,
  // Contact
  ContactInfoCards,
  ContactForm,
  MapSection,
  // Services
  ServiceDetail,
  HowItWorksSteps,
} from './blocks'

// Header & Footer
import { HeaderConfig as Header } from '@/collections/Pages/editor/blocks/header'
import { FooterConfig as Footer } from '@/collections/Pages/editor/blocks/footer'

// ========================================
// UTILITY COMPONENTS
// ========================================

import { TextBlock } from './components/TextBlock'
import { ButtonBlock } from './components/ButtonBlock'
import { Spacer } from './components/Spacer'
import { Logo } from './components/Logo'
import { StatItem } from './components/StatItem'
import { Badge } from './components/Badge'
import { Divider } from './components/Divider'
import { Container } from './components/Container'
import { IconBlock } from './components/IconBlock'
import { VideoBlock } from './components/VideoBlock'
import { RichText } from './components/RichText'
import { Accordion } from './components/Accordion'
import { Grid } from './components/Grid'
import { Alert } from './components/Alert'
import { Card } from './components/Card'
import { Map } from './components/Map'
import { CodeBlock } from './components/CodeBlock'
import { Tabs } from './components/Tabs'
import { Carousel } from './components/Carousel'
import { PricingTable } from './components/PricingTable'
import { StatsCounter } from './components/StatsCounter'
import { ImageGallery } from './components/ImageGallery'
import { Modal } from './components/Modal'
import { Dropdown } from './components/Dropdown'
import { FormBuilder } from './components/FormBuilder'
import { VideoPlayer } from './components/VideoPlayer'
import { AudioPlayer } from './components/AudioPlayer'
import { SocialShare } from './components/SocialShare'
import { Reviews } from './components/Reviews'
import { Timeline } from './components/Timeline'
import { SocialFeed } from './components/SocialFeed'
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
  categories: {
    // ===== LAYOUT =====
    layout: {
      title: '🏗️ Layout & Structure',
      components: ['Header', 'Footer', 'Container', 'Spacer', 'Divider'],
    },

    // ===== HOMEPAGE =====
    homepage: {
      title: '🏠 Homepage Sections',
      components: [
        'HeroSection',
        'ServicesSection',
        'AboutSection',
        'TestimonialsSection',
        'LogoCloud',
        'CTASection',
      ],
    },

    // ===== BLOG =====
    blog: {
      title: '📰 Blog Pages',
      components: [
        'BlogFeaturedHero',
        'BlogSearchFilters',
        'BlogArticlesGrid',
        'Pagination',
        'NewsletterSection',
      ],
    },

    // ===== BLOG POST DETAIL =====
    blogPost: {
      title: '📝 Blog Post Detail',
      components: ['ArticleHeader', 'ArticleContent', 'AuthorBio', 'RelatedArticles'],
    },

    // ===== ABOUT/PROFILE =====
    profile: {
      title: '👤 About/Profile Page',
      components: ['ProfileHero', 'TabsSection', 'CredentialsGrid', 'TimelineExperience'],
    },

    // ===== CONTACT =====
    contact: {
      title: '📧 Contact Page',
      components: ['ContactInfoCards', 'ContactForm', 'MapSection'],
    },

    // ===== SERVICES =====
    services: {
      title: '💼 Services Page',
      components: ['ServiceDetail', 'HowItWorksSteps'],
    },

    // ===== CONTENT ELEMENTS =====
    content: {
      title: '📄 Content Elements',
      components: [
        'TextBlock',
        'ButtonBlock',
        'Logo',
        'StatItem',
        'Badge',
        'RichText',
        'IconBlock',
        'VideoBlock',
        'CodeBlock',
      ],
    },

    // ===== LAYOUT UTILITIES =====
    utilities: {
      title: '🔧 Layout Utilities',
      components: ['Grid', 'Alert', 'Card', 'Map'],
    },

    // ===== INTERACTIVE =====
    interactive: {
      title: '🎯 Interactive Components',
      components: ['Tabs', 'Accordion', 'Carousel', 'Modal', 'Dropdown', 'FormBuilder'],
    },

    // ===== MEDIA =====
    media: {
      title: '🎬 Media & Gallery',
      components: ['ImageGallery', 'VideoPlayer', 'AudioPlayer'],
    },

    // ===== BUSINESS =====
    business: {
      title: '💰 Business Components',
      components: [
        'PricingTable',
        'StatsCounter',
        'Timeline',
        'Reviews',
        'SocialShare',
        'SocialFeed',
      ],
    },
  },

  components: {
    // ===== LAYOUT =====
    Header,
    Footer,
    Container,
    Spacer,
    Divider,

    // ===== HOMEPAGE =====
    HeroSection,
    ServicesSection,
    AboutSection,
    TestimonialsSection,
    LogoCloud,
    CTASection,

    // ===== BLOG =====
    BlogFeaturedHero,
    BlogSearchFilters,
    BlogArticlesGrid,
    Pagination,
    NewsletterSection,

    // ===== BLOG POST DETAIL =====
    ArticleHeader,
    ArticleContent,
    AuthorBio,
    RelatedArticles,

    // ===== ABOUT/PROFILE =====
    ProfileHero,
    TabsSection,
    CredentialsGrid,
    TimelineExperience,

    // ===== CONTACT =====
    ContactInfoCards,
    ContactForm,
    MapSection,

    // ===== SERVICES =====
    ServiceDetail,
    HowItWorksSteps,

    // ===== CONTENT ELEMENTS =====
    TextBlock,
    ButtonBlock,
    Logo,
    StatItem,
    Badge,
    RichText,
    IconBlock,
    VideoBlock,
    CodeBlock,

    // ===== LAYOUT UTILITIES =====
    Grid,
    Alert,
    Card,
    Map,

    // ===== INTERACTIVE =====
    Tabs,
    Accordion,
    Carousel,
    Modal,
    Dropdown,
    FormBuilder,

    // ===== MEDIA =====
    ImageGallery,
    VideoPlayer,
    AudioPlayer,

    // ===== BUSINESS =====
    PricingTable,
    StatsCounter,
    Timeline,
    Reviews,
    SocialShare,
    SocialFeed,
  },
}
