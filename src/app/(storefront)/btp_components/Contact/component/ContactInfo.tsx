import { ContactInfoProps } from '@/collections/Pages/editor/btp_blocks/contact_info'
import Image from 'next/image'

export default function ContactInfo({ address, phones, email, mapUrl, socials }: ContactInfoProps) {
  return (
    <div className="lg:col-span-2 space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-primary mb-4">Informations sur le contact</h3>
        <div className="space-y-4 text-text-muted">
          <div className="flex items-start gap-4">
            <span className="text-primary mt-1 text-xl">📍</span>
            <div>
              <p className="font-semibold text-foreground">Address:</p>
              <p>{address}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-primary mt-1 text-xl">📞</span>
            <div>
              <p className="font-semibold text-foreground">Phone:</p>
              {phones.map((phone, index) => {
                return (
                  <p key={index}>
                    {phone.value}
                    <br />
                  </p>
                )
              })}
              {/* <p>+228 90 12 34 56</p>
              <p>+228 98 76 54 32</p> */}
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-primary mt-1 text-xl">✉️</span>
            <div>
              <p className="font-semibold text-foreground">Email:</p>
              <p>{email}</p>
              {/* <p>invest@build-in-togo.com</p> */}
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div>
        <div className="rounded-xl overflow-hidden shadow-md border border-border">
          <iframe
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[400px] w-full"
            src={mapUrl}
            // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63467.04233765487!2d1.1718335492341957!3d6.173238122394539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e1c152220f57%3A0x46b7352817293532!2sLom%C3%A9%2C%20Togo!5e0!3m2!1sen!2sus!4v1684321098765!5m2!1sen!2sus"
            style={{ border: 0 }}
          />
        </div>
      </div>

      {/* Social Media */}
      <div>
        <h3 className="text-xl font-bold text-primary mb-3">Follow Us</h3>
        <div className="flex items-center gap-4">
          {socials.map((social, index) => {
            const url = typeof social?.icon === 'string' ? social?.icon : social?.icon?.url

            return (
              <a
                className="text-text-muted hover:text-primary transition-colors"
                href={social.url}
                aria-label={social.name}
                key={index}
              >
                {url ? (
                  <Image
                    src={url}
                    alt="Social Icon"
                    width={24}
                    height={24}
                    className="object-cover"
                  />
                ) : (
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                )}
              </a>
            )
          })}
          {/* <a
            className="text-text-muted hover:text-primary transition-colors"
            href="#"
            aria-label="LinkedIn"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </a>
          <a
            className="text-text-muted hover:text-primary transition-colors"
            href="#"
            aria-label="Facebook"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                clipRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                fillRule="evenodd"
              />
            </svg>
          </a> */}
        </div>
      </div>
    </div>
  )
}
