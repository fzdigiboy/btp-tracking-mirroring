import type { Metadata } from 'next'
import type React from 'react'
export const dynamic = 'force-dynamic'

// import { GeistSans } from "geist/font/sans"
// import { GeistMono } from "geist/font/mono"
// import { Analytics } from "@vercel/analytics/next"
import { AuthProvider } from '@/contexts/auth-context'
import getHeader, { getFooter } from '@/lib/server-actions/globals'
import { Suspense } from 'react'
import Footer from './btp_components/common_component/footer'
import Header from './btp_components/common_component/header'
import './globals.css'
export async function generateMetadata(): Promise<Metadata> {
  return {
    generator: 'digitaleurs',
  }
}
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const HeaderData = await getHeader();
  const FooterData = await getFooter();
  
  return (
    <html lang="fr">
      <head></head>
      <body>
        <AuthProvider>
          <main id="main-content" className="flex flex-col min-h-screen">
            {HeaderData && (
              <Header 
                logo={HeaderData?.logo} 
                navLinks={HeaderData?.navLinks} 
                raqButton={HeaderData?.raqButton} 
              />
            )}
            
            <div className="flex-1">
              <Suspense fallback={null}>{children}</Suspense>
            </div>

            {FooterData && (
              <Footer 
                copyrightText={FooterData?.copyrightText || ""} 
                description={FooterData?.description || ""} 
                logoText={FooterData?.logoText || ""} 
                sections={FooterData?.sections || []} 
                logo={FooterData?.logo} 
              />
            )}
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}