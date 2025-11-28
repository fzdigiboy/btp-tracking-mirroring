import { Media } from '@/payload-types'
import Image from 'next/image'

export default function PartnersSection({ partners, simpleTitle }: any) {
  return (
    <section className="py-16 sm:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-14">
        <h2 className="text-center text-2xl font-bold tracking-tight text-foreground mb-10">
          {simpleTitle}
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {partners.map((partner: any, index: number) => {
            const partnerLogo = typeof partner.logo === 'string' ? partner.logo : partner.logo?.url
            const alt =
              typeof partner.logo === 'string'
                ? partner.name || 'Logo'
                : partner.logo?.alt || partner.name
            {
              return partnerLogo ? (
                <Image
                  key={index}
                  src={partnerLogo}
                  alt={alt}
                  width={32}
                  height={52}
                  className="h-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
                />
              ) : (
                <img
                  key={index}
                  className="h-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC32-_UTpJ5Nw0sOUIFylx_AbURQ-gfklKus456qQTYpEBQm9L_KgFjL_4jokm6TJ0j_AbuwYW5jVquFoFVsTTwiuFWDDBSuiyrQEj3KPmFmpofjotM7hga3D-1MDb3S5NG2cj9u8YTz2BomMuelLQhS60Qet0uh2yI9CGRoq166c-THfW2ZC_WCFIQSp3v9udEPSROZ2vYIOrK7mzsPbglVnSwEBOPTY2OtaXWqyJWTz9p-DIg5YGwqYnsiv7Nev4lSU4awDy0PI-x"
                  alt="logo"
                />
              )
            }
          })}
        </div>
      </div>
    </section>
  )
}
