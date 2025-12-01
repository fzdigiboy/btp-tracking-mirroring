export default function ContactCTA() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Ready to Start Your Project in Togo?
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            Let&apos;s build your future, together. Contact us for a free, no-obligation
            consultation.
          </p>
          <button className="mt-8 flex mx-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary text-white text-base font-bold tracking-wide hover:bg-opacity-90 transition-colors">
            <span className="truncate">Get in Touch</span>
          </button>
        </div>
      </div>
    </section>
  )
}
