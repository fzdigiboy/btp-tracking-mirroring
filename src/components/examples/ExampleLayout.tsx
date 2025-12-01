import { getSiteSettings } from '@/lib/get-site-settings'
import { SiteSettingsProvider } from '@/components/SiteSettingsProvider'
import Script from 'next/script'

/**
 * Example root layout using Site Settings
 * Copy this to your app/layout.tsx
 */
export async function ExampleLayout({ children }: { children: React.ReactNode }) {
  const settings = await getSiteSettings()

  // Check maintenance mode
  if (settings.maintenanceMode) {
    return (
      <html lang="fr">
        <body>
          <div className="maintenance-page">
            <h1>Site en maintenance</h1>
            <div dangerouslySetInnerHTML={{ __html: settings.maintenanceMessage || '' }} />
          </div>
        </body>
      </html>
    )
  }

  return (
    <html lang="fr">
      <head>
        {/* Favicon */}
        {settings.favicon && <link rel="icon" href={settings.favicon.url || ''} />}

        {/* Custom Head Scripts */}
        {settings.customHeadScripts && (
          <div dangerouslySetInnerHTML={{ __html: settings.customHeadScripts }} />
        )}
      </head>
      <body>
        <SiteSettingsProvider>
          {/* Skip to content link for accessibility */}
          {settings.skipToContentLink && (
            <a href="#main-content" className="skip-to-content">
              Aller au contenu principal
            </a>
          )}

          {/* Header */}
          <header
            style={{
              position: settings.headerPosition as any,
              height: `var(--header-height)`,
              backgroundColor: 'var(--header-background)',
            }}
          >
            {/* Your header content */}
            <div className="container">
              {settings.logo ? (
                <img
                  src={settings.logo.url || ''}
                  alt={settings.siteName || ''}
                  width={settings.logoWidth}
                  height={settings.logoHeight}
                />
              ) : (
                <span>{settings.logoText || settings.siteName}</span>
              )}
            </div>
          </header>

          {/* Main Content */}
          <main id="main-content">{children}</main>

          {/* Footer */}
          <footer
            style={{
              backgroundColor: 'var(--footer-background)',
              color: 'var(--footer-text-color)',
              padding: 'var(--footer-padding-y) var(--footer-padding-x)',
            }}
          >
            <div className="container">
              {/* Social Links */}
              {settings.showSocialLinks && settings.socialLinks && (
                <div className="social-links">
                  {settings.socialLinks
                    .filter((link) => link.enabled)
                    .map((link, index) => (
                      <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.platform}
                      </a>
                    ))}
                </div>
              )}

              {/* Copyright */}
              <p>{settings.copyrightText}</p>
            </div>
          </footer>

          {/* Custom Body Scripts */}
          {settings.customBodyScripts && (
            <div dangerouslySetInnerHTML={{ __html: settings.customBodyScripts }} />
          )}
        </SiteSettingsProvider>

        {/* Google Analytics */}
        {settings.googleAnalyticsId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${settings.googleAnalyticsId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${settings.googleAnalyticsId}');
              `}
            </Script>
          </>
        )}

        {/* Google Tag Manager */}
        {settings.googleTagManagerId && (
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${settings.googleTagManagerId}');
            `}
          </Script>
        )}

        {/* Facebook Pixel */}
        {settings.facebookPixelId && (
          <Script id="facebook-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${settings.facebookPixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
      </body>
    </html>
  )
}
