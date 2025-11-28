// import { Product } from "@/lib/products";

// Déclarer les blocs avec leur attributs
export type PuckProps = {
  // HeadingBlock: {
  //   title: string
  //   level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  //   align?: 'left' | 'center' | 'right'
  // }
  // ===== HEADER =====
  // 🧠 Les blocs internes sont dynamiques
  HeaderBlock: {
    logo?: {
      text?: string
      image?: {
        url: string
        alt: string
      }
    }
    navLinks?: Array<{
      label: string
      linkType: 'internal' | 'external'
      internalPage?: any
      externalUrl?: string
    }>
    raqButton?: {
      text: string
      href: string
      color: string
    }
  }

  HeroSectionBlock: {
    title: string
    description: string
    button: Array<{
      text: string
      href: string
      color: string
      textColor: string
    }>
    image?: {
      url: string
      alt: string
    }
    isFullWidth: string
  }

  // ABOUT PAGE
  AboutBlock1: {
    title: string
    description: string
    image?: {
      url: string
      alt: string
    }
    linearGradient: string
    isFullWidth: string
  }

  // SERVICES PAGE
  ServicesBlock1: {
    title: string
    description: string
    image?: {
      url: string
      alt: string
    }
    linearGradient: string
    isFullWidth: string
  }

  NumberBlock: {
    numberBlocks: Array<{
      title: string
      description: string
      color: string
      textColor: string
    }>
    isFullWidth: string
  }

  ConstructionBlock: {
    title: string
    description: string
    constructions: Array<{
      title: string
      description: string
      icon: string
    }>
    isFullWidth: string
  }

  FooterBlocks: {
    logoText: string
    logo?: {
      url: string
      alt: string
    }
    description?: string
    sections: Array<{
      title: string
      links: Array<{
        label: string
        href: string
        icons?: string
      }>
    }>
    copyrightText?: string
  }
  ABBlock4: {
    title: string
    subtitle: string
    blocks: Array<{
      title: string
      description: string
      icon: string
    }>
    isFullWidth: string
  }
  ServiceBlock4: {
    title: string
    description: string
    steps: Array<{
      title: string
      icon: string
    }>
    isFullWidth: string
  }
  RecentProjectSectionBlock: {
    title: string
    description: string
    isFullWidth: string
  }
  TestimonialsSectionBlock: {
    title: string
    testimonies: Array<{
      message: string
      author: string
      adress: string
    }>
    isFullWidth: string
  }
  StoryMissionSectionBlock: {
    title: string
    subtitle: string
    description: string
    infos: Array<{
      title: string
      content: string
    }>
    isFullWidth: string
  }
  TeamSectionBlock: {
    title: string
    subtitle: string
    description: string
    team_composition: Array<{
      name: string
      role: string
      description: string
      image: {
        url: string
        alt: string
      }
    }>
    // TODO: A mettre dans chaque bloc
    isFullWidth: string
  }

  // Partner Section
  PartnersBlock: {
    variant: 'simple' | 'detailed'
    // Simple
    simpleTitle?: string

    // Detailed
    headline?: string
    detailedTitle?: string
    description?: string

    partners: Array<{
      name: string
      logo: {
        url: string
        alt: string
      }
    }>
  }
  // TextBlock: {
  //   text: string
  //   align?: 'left' | 'center' | 'right'
  // }
  // ButtonBlock: {
  //   text: string
  //   href?: string
  //   variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  //   size?: 'default' | 'sm' | 'lg' | 'icon'
  // }
  // HeaderBlock: {
  //   logoText: string
  //   logoIcon?: string
  //   navigationItems: Array<{ label: string; href: string }>
  //   showSearch?: boolean
  //   showCart?: boolean
  // }
  // HeroSection: {
  //   title: string
  //   subtitle: string
  //   primaryCtaText: string
  //   primaryCtaLink: string
  //   image?: {
  //     url: string
  //     alt: string
  //   }
  // }
  // LandingHeroSection: {
  //   title: string
  //   highlightedWord?: string
  //   subtitle: string
  //   heroImage?: string
  //   showImage?: boolean
  //   buttons?: Array<{
  //     text: string
  //     href: string
  //     variant: 'default' | 'outline' | 'ghost' | 'link'
  //     size: 'sm' | 'default' | 'lg'
  //     icon?: string
  //   }>
  //   showStats?: boolean
  //   stats?: Array<{ value: string; label: string }>
  //   showBadges?: boolean
  //   badges?: Array<{
  //     text: string
  //     position: 'top-right' | 'bottom-left' | 'top-left' | 'bottom-right'
  //     variant: 'primary' | 'secondary' | 'success' | 'warning'
  //   }>
  // }
  // ProductGrid: {
  //   title?: string
  //   products: any[]
  //   columns?: 2 | 3 | 4
  // }
  // FeaturedProductsSection: {
  //   title?: string
  //   subtitle?: string
  //   viewAllText?: string
  //   viewAllLink?: string
  //   products: any[]
  //   columns?: 2 | 3 | 4
  // }
  // NewsletterSection: {
  //   title?: string
  //   subtitle?: string
  //   placeholder?: string
  //   buttonText?: string
  //   privacyText?: string
  // }
  // FooterSection: {
  //   logoText: string
  //   logoIcon?: string
  //   description?: string
  //   sections: Array<{
  //     title: string
  //     links: Array<{ label: string; href: string }>
  //   }>
  //   copyrightText?: string
  // }
  // FeatureCard: {
  //   title: string
  //   description: string
  //   icon?: string
  // }
  // Spacer: {
  //   height: number
  //   unit: 'px' | 'rem' | 'em'
  // }
  // Logo: {
  //   logoText: string
  //   logoIcon?: string
  // }
  // StatItem: {
  //   value: string
  //   label: string
  //   align?: 'left' | 'center' | 'right'
  // }
  // Badge: {
  //   text: string
  //   position?: 'top-right' | 'bottom-left' | 'top-left' | 'bottom-right'
  //   variant?: 'primary' | 'secondary' | 'success' | 'warning'
  // }
  // Divider: DividerProps
  // Container: {
  //   layout?: {
  //     display?: 'block' | 'flex' | 'grid'
  //     position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'
  //     overflow?: 'visible' | 'hidden' | 'scroll' | 'auto'
  //   }
  //   size?: {
  //     width?: string
  //     height?: string
  //     minWidth?: string
  //     maxWidth?: string
  //     minHeight?: string
  //     maxHeight?: string
  //   }
  //   spacing?: {
  //     padding?: { top?: string; right?: string; bottom?: string; left?: string }
  //     margin?: { top?: string; right?: string; bottom?: string; left?: string }
  //   }
  //   background?: {
  //     color?: string
  //     image?: string
  //     size?: 'auto' | 'cover' | 'contain'
  //     position?: string
  //     repeat?: 'repeat' | 'no-repeat' | 'repeat-x' | 'repeat-y'
  //   }
  //   border?: {
  //     style?: 'none' | 'solid' | 'dashed' | 'dotted' | 'double'
  //     width?: string
  //     color?: string
  //     radius?: string
  //   }
  //   flex?: {
  //     direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  //     wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  //     justifyContent?:
  //       | 'flex-start'
  //       | 'flex-end'
  //       | 'center'
  //       | 'space-between'
  //       | 'space-around'
  //       | 'space-evenly'
  //     alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  //     gap?: string
  //   }
  //   grid?: {
  //     columns?: string
  //     rows?: string
  //     gap?: string
  //     justifyContent?:
  //       | 'start'
  //       | 'end'
  //       | 'center'
  //       | 'space-between'
  //       | 'space-around'
  //       | 'space-evenly'
  //     alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  //   }
  //   typography?: {
  //     color?: string
  //     textAlign?: 'left' | 'center' | 'right' | 'justify'
  //   }
  //   effects?: {
  //     boxShadow?: string
  //     opacity?: string
  //     filter?: string
  //   }
  //   className?: string
  // }

  // IconBlock: IconBlockProps
  // VideoBlock: VideoBlockProps
  // RichText: RichTextProps
  // Accordion: {
  //   items: { title: string }[]
  // }
  // Grid: GridProps
  // Alert: {
  //   title: string
  //   variant: 'info' | 'success' | 'warning' | 'error'
  // }
  // Card: {
  //   image?: string
  //   title: string
  //   buttonText?: string
  //   buttonLink?: string
  // }
  // Map: MapProps
  // CodeBlock: CodeBlockProps
  // // New Blocks
  // AboutSection: {
  //   title: string
  //   content: string
  //   ctaText: string
  //   ctaLink: string
  //   image?: {
  //     url: string
  //     alt: string
  //   }
  // }
  // CTASection: {
  //   title: string
  //   description: string
  //   ctaText: string
  //   ctaLink: string
  // }
  // Footer: {
  //   logoText: string
  //   logoIcon?: string
  //   description?: string
  //   sections?: Array<{
  //     title: string
  //     links: Array<{ label: string; href: string }>
  //   }>
  //   contactInfo?: {
  //     address?: string[]
  //     email?: string
  //     phone?: string
  //   }
  //   socialLinks?: Array<{
  //     platform: 'facebook' | 'twitter' | 'linkedin' | 'instagram'
  //     href: string
  //   }>
  //   copyrightText?: string
  //   showSocialLinks?: boolean
  //   layout?: 'full' | 'simple'
  // }
  // Header: {
  //   logoText: string
  //   logoIcon?: string
  //   navigationItems: Array<{
  //     label: string
  //     href: string
  //     isActive?: boolean
  //   }>
  //   ctaText?: string
  //   ctaLink?: string
  //   showCtaButton?: boolean
  // }
  // LogoCloud: {
  //   title: string
  //   logos: Array<{
  //     url: string
  //     alt: string
  //   }>
  // }
  // ServicesSection: {
  //   title: string
  //   services: Array<{
  //     icon: string
  //     title: string
  //     description: string
  //   }>
  // }
  // TestimonialsSection: {
  //   title: string
  //   subtitle: string
  //   testimonials: Array<{
  //     quote: string
  //     authorName: string
  //     authorRole: string
  //     company?: string
  //     authorImage?: {
  //       url: string
  //       alt: string
  //     }
  //   }>
  // }

  // New Components
  // Tabs: TabsProps
  // Carousel: CarouselProps
  // PricingTable: PricingTableProps
  // StatsCounter: StatsCounterProps
  // ImageGallery: ImageGalleryProps
  // Modal: ModalProps
  // Dropdown: DropdownProps
  // FormBuilder: FormBuilderProps
  // VideoPlayer: VideoPlayerProps
  // AudioPlayer: AudioPlayerProps
  // SocialShare: SocialShareProps
  // Reviews: ReviewsProps
  // Timeline: TimelineProps
  // ProductCard: ProductCardProps
  // ProductComparison: ProductComparisonProps
  // SocialFeed: SocialFeedProps
  // CartPreview: CartPreviewProps
}
