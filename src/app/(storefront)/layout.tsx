import type { Metadata } from 'next'
import type React from 'react'
// import { GeistSans } from "geist/font/sans"
// import { GeistMono } from "geist/font/mono"
// import { Analytics } from "@vercel/analytics/next"
import { AuthProvider } from '@/contexts/auth-context'
import { Suspense } from 'react'
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
  return (
    <html lang="fr">
      <head></head>
      <body className={`font-sans antialiased `}>
        <AuthProvider>
          <main id="main-content">
            <Suspense fallback={null}>{children}</Suspense>
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}
