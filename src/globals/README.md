# Site Settings Global

Configuration globale complète pour tous les aspects visuels et fonctionnels du site.

## Structure

La collection `SiteSettings` est organisée en 9 onglets :

### 1. Layout & Container
- **Container Max Width** : Largeur maximale du conteneur principal
- **Container Padding** : Padding horizontal du conteneur
- **Section Spacing** : Espacement vertical et horizontal entre sections
- **Border Radius Style** : Style des coins arrondis (none, small, medium, large, xlarge, full)

### 2. Colors & Theme
- **Primary Colors** : Couleur principale et hover
- **Background Colors** : Fond principal et secondaire
- **Text Colors** : Texte principal et secondaire
- **Accent Colors** : Accent, error, warning, success
- **Border & Divider** : Couleur et largeur des bordures

### 3. Typography
- **Font Families** : Polices pour le texte, titres et code
- **Font Sizes** : Taille de base et échelle typographique
- **Font Weights** : Poids normal, medium, semibold, bold

### 4. Header
- **Header Height** : Hauteur du header
- **Header Position** : Static, sticky ou fixed
- **Logo Settings** : Image, texte et dimensions du logo
- **Navigation** : Configuration mobile et breakpoint

### 5. Footer
- **Colors** : Fond et texte du footer
- **Spacing** : Padding vertical et horizontal
- **Copyright** : Texte de copyright
- **Social Links** : Afficher les liens sociaux

### 6. SEO & Meta
- **Site Name** : Nom du site
- **Meta Description** : Description par défaut
- **Keywords** : Mots-clés
- **OG Image** : Image pour partage social
- **Favicon** : Icône du site
- **Twitter Handle** : Compte Twitter

### 7. Social Media
- Tableau de liens sociaux avec :
  - Platform (Facebook, Twitter, Instagram, etc.)
  - URL
  - Enabled/Disabled

### 8. Contact
- Email de contact
- Téléphone
- Adresse complète (rue, ville, code postal, pays)

### 9. Analytics & Tracking
- Google Analytics ID
- Google Tag Manager ID
- Facebook Pixel ID
- Scripts personnalisés (head et body)

### 10. Advanced
- **Animation Settings** : Durée, easing, activation
- **Accessibility** : Skip link, focus outline
- **Performance** : Lazy loading, service worker
- **Custom CSS** : CSS personnalisé global
- **Maintenance Mode** : Mode maintenance avec message

## Utilisation

### Dans votre layout racine

```tsx
// app/layout.tsx
import { SiteSettingsProvider } from '@/components/SiteSettingsProvider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <SiteSettingsProvider>
          {children}
        </SiteSettingsProvider>
      </body>
    </html>
  )
}
```

### Accéder aux paramètres dans un composant

```tsx
import { getSiteSettings } from '@/lib/get-site-settings'

export async function MyComponent() {
  const settings = await getSiteSettings()

  return (
    <div style={{
      maxWidth: settings.containerMaxWidth,
      padding: settings.containerPadding
    }}>
      {/* Votre contenu */}
    </div>
  )
}
```

### Utiliser les variables CSS

Les variables CSS sont automatiquement injectées. Utilisez-les dans vos styles :

```css
.container {
  max-width: var(--container-max-width);
  padding: 0 var(--container-padding);
}

.section {
  margin: var(--section-spacing-y) var(--section-spacing-x);
}

.button {
  background-color: var(--color-primary);
  border-radius: var(--border-radius);
  font-family: var(--font-family-base);
}

.button:hover {
  background-color: var(--color-primary-hover);
}
```

### Variables CSS disponibles

```css
/* Layout */
--container-max-width
--container-padding
--section-spacing-y
--section-spacing-x
--border-radius

/* Colors */
--color-primary
--color-primary-hover
--color-background
--color-background-secondary
--color-text-primary
--color-text-secondary
--color-accent
--color-error
--color-warning
--color-success
--color-border
--border-width

/* Typography */
--font-family-base
--font-family-heading
--font-family-mono
--font-size-base
--line-height-base
--font-scale
--font-weight-normal
--font-weight-medium
--font-weight-semibold
--font-weight-bold

/* Header & Footer */
--header-height
--header-background
--footer-background
--footer-text-color
--footer-padding-y
--footer-padding-x

/* Animations & A11y */
--animation-duration
--animation-easing
--focus-outline-color
```

### Échelle typographique

Utilisez `getTypographyScale` pour générer des tailles de texte cohérentes :

```tsx
import { getSiteSettings } from '@/lib/get-site-settings'
import { getTypographyScale } from '@/components/SiteSettingsProvider'

const settings = await getSiteSettings()
const scale = getTypographyScale(settings)

// scale.xs, scale.sm, scale.base, scale.lg, scale.xl, scale.2xl, etc.
```

### Mode maintenance

Vérifiez le mode maintenance dans votre layout :

```tsx
const settings = await getSiteSettings()

if (settings.maintenanceMode) {
  return <MaintenancePage message={settings.maintenanceMessage} />
}
```

## SEO et Meta Tags

Utilisez les paramètres pour générer vos meta tags :

```tsx
import { getSiteSettings } from '@/lib/get-site-settings'

export async function generateMetadata() {
  const settings = await getSiteSettings()

  return {
    title: settings.siteName,
    description: settings.siteDescription,
    keywords: settings.siteKeywords,
    openGraph: {
      images: [settings.ogImage?.url],
    },
    twitter: {
      site: settings.twitterHandle,
    },
  }
}
```

## Scripts Analytics

Injectez les scripts de tracking dans votre layout :

```tsx
const settings = await getSiteSettings()

// Google Analytics
if (settings.googleAnalyticsId) {
  // Ajouter le script GA4
}

// Scripts personnalisés
<div dangerouslySetInnerHTML={{ __html: settings.customHeadScripts }} />
```
