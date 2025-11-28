import Image from 'next/image'

export default function PartnersSectionAbout({
  detailedTitle,
  headline,
  description,
  partners,
}: any) {
  return (
    <section className="bg-primary/5 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-sm font-bold uppercase tracking-wider text-secondary">
            {headline || 'Building Confidence'}
          </h2>
          <p className="mt-2 text-3xl font-black leading-tight tracking-tight text-primary sm:text-4xl">
            {detailedTitle || 'Our Trusted Partners & Certifications'}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            {description ||
              'We collaborate with industry-leading institutions and hold certifications that guarantee the security and quality of your investment.'}
          </p>
        </div>
        <div className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 grayscale">
            {partners.map((partner: any, index: number) => {
              const partnerLogo =
                typeof partner.logo === 'string' ? partner.logo : partner.logo?.url
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
      </div>
    </section>
  )
}
