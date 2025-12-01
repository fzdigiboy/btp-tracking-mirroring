import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Vérifier si l'URL est exactement "/"
  if (request.nextUrl.pathname === '/') {
    // Créer l'URL de redirection vers /home
    const homeUrl = new URL('/home', request.url)

    // Rediriger vers /home
    return NextResponse.redirect(homeUrl)
  }

  // Pour toutes les autres routes, continuer normalement
  return NextResponse.next()
}

// Optionnel : configurer les chemins où le middleware s'applique
export const config = {
  matcher: '/',
}
