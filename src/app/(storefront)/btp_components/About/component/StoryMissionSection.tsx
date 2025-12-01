export default function StoryMissionSection({
  title,
  subtitle,
  description,
  infos,
  isFullWidth,
}: any) {
  return (
    <section className={`py-16 sm:py-24 ${isFullWidth === 'No' ? 'custom_container' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-14">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-sm font-bold uppercase tracking-wider text-secondary">
            {/* Our Purpose */}
            {subtitle}
          </h2>
          <p className="mt-2 text-3xl font-black leading-tight tracking-tight text-primary sm:text-4xl">
            {/* Our Story, Mission, and Vision */}
            {title}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            {/* Founded to bridge the gap for foreign investors, we simplify the process of building in Togo, ensuring every project is a seamless success. */}
            {description}
          </p>
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:mt-16 lg:gap-16">
          {infos.map((info: any, index: number) => (
            <div className="flex flex-col" key={index}>
              <h3 className="text-2xl font-bold text-primary">{info.title}</h3>
              <p className="mt-3 leading-relaxed text-text-muted">{info.content}</p>
            </div>
          ))}
          {/* <div className="flex flex-col">
                        <h3 className="text-2xl font-bold text-primary">Our Story</h3>
                        <p className="mt-3 leading-relaxed text-text-muted">
                            Our journey began with a simple goal: to make investing in Togolese real estate accessible, secure, and profitable for clients abroad. Witnessing the challenges faced by the diaspora, we built a company founded on trust and local expertise, combined with international standards of quality and communication.
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-2xl font-bold text-primary">Our Mission & Vision</h3>
                        <p className="mt-3 leading-relaxed text-text-muted">
                            Our mission is to empower overseas investors by providing transparent, end-to-end construction and project management services in Togo. We envision a future where anyone, from anywhere, can confidently invest in and contribute to the growth of our nation, building a legacy of shared prosperity.
                        </p>
                    </div> */}
        </div>
      </div>
    </section>
  )
}
