import { Metadata } from "next"

type PageConfigBase = {
  noIndex?: boolean
}

type PageConfigWithTitle = PageConfigBase & {
  title: string
  description: string
}

type PageConfigWithTemplate = PageConfigBase & {
  titleTemplate: string
  description: string
}

type PageConfigWithDescriptionTemplate = PageConfigBase & {
  titleTemplate: string
  descriptionTemplate: string
}

export const seoConfig = {
  defaultTitle: 'BTPTracking - Construction & Architecture Professionnelle',
  defaultDescription: 'Entreprise BTP spécialisée dans la construction de bâtiments, achat et vente de terrains, architecture, design et étude de sol.',
  siteName: 'BTPTracking',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://BTPTracking.tg',
  defaultImage: '/og-image.jpg',
  twitterHandle: '@BTPTracking',
  locale: 'fr_FR',
  brand: 'BTPTracking',

  pages: {
    home: {
      titleTemplate: '%s',
      description: 'Votre partenaire de confiance pour la construction de bâtiments, achat de terrains, architecture et design. Expertise complète en BTP et étude de sol au Togo.',
    } as PageConfigWithTemplate,
    
    about: {
      title: 'À Propos | BTPTracking',
      description: 'Découvrez BTPTracking, entreprise BTP spécialisée dans la construction, l\'architecture et l\'achat de terrains. Notre expertise et notre engagement pour vos projets.',
    } as PageConfigWithTitle,
    
    contact: {
      title: 'Contact | BTPTracking',
      description: 'Contactez-nous pour vos projets de construction, achat de terrain ou étude de sol. Notre équipe d\'experts est à votre écoute.',
      noIndex: false,
    } as PageConfigWithTitle,
    
    projects: {
      title: 'Nos Projets | BTPTracking',
      description: 'Découvrez nos réalisations en construction de bâtiments, architecture et aménagement. Portfolio de projets résidentiels et commerciaux.',
    } as PageConfigWithTitle,
    
    projectDetail: {
      titleTemplate: '%s | Projets BTPTracking',
      descriptionTemplate: 'Découvrez le projet %s réalisé par BTPTracking. %s',
    } as PageConfigWithDescriptionTemplate,
    
    testimonials: {
      title: 'Témoignages Clients | BTPTracking',
      description: 'Découvrez les avis de nos clients satisfaits sur nos services de construction, architecture et vente de terrains.',
    } as PageConfigWithTitle,
    
    services: {
      title: 'Nos Services | BTPTracking',
      description: 'Construction de bâtiments, achat et vente de terrains, architecture, design d\'intérieur et étude de sol. Services BTP complets.',
    } as PageConfigWithTitle,
    
    terrains: {
      title: 'Terrains à Vendre | BTPTracking',
      description: 'Parcelles et terrains à vendre au Togo. Trouvez le terrain idéal pour votre projet de construction avec accompagnement complet.',
    } as PageConfigWithTitle,
    
    terrainDetail: {
      titleTemplate: '%s | Terrains BTPTracking',
      descriptionTemplate: 'Terrain à vendre : %s. %s',
    } as PageConfigWithDescriptionTemplate,
    
    architecture: {
      title: 'Architecture & Design | BTPTracking',
      description: 'Services d\'architecture et de design pour vos projets de construction. Plans, conception 3D et accompagnement personnalisé.',
    } as PageConfigWithTitle,
    
    etudeSol: {
      title: 'Étude de Sol | BTPTracking',
      description: 'Étude géotechnique et analyse de sol professionnelle pour sécuriser vos projets de construction.',
    } as PageConfigWithTitle,
  },

  // Open Graph defaults
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'BTPTracking',
  },

  // Twitter defaults
  twitter: {
    card: 'summary_large_image',
  },

  // Robots defaults
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  } satisfies Metadata['robots'],
} as const

export type SEOPageKey = keyof typeof seoConfig.pages