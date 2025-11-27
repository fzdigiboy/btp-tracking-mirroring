export default function ServicesSection() {
    const services = [
        {
            icon: "⚖️",
            title: "Land Acquisition & Legal",
            description: "Securely acquire property and navigate all legal requirements with our expert guidance."
        },
        {
            icon: "✏️",
            title: "Architectural & Engineering",
            description: "From initial sketches to detailed blueprints, we bring your vision to life with precision."
        },
        {
            icon: "🏗️",
            title: "Turnkey Construction",
            description: "We manage every phase of construction, ensuring quality and timely delivery of your project."
        }
    ];
  

    return (
        <section className="py-16 sm:py-24">
            <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-14">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                        Our End-to-End Construction Services
                    </h2>
                    <p className="mt-4 text-lg text-text-muted">
                        We handle every detail of your project, so you don't have to.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-4 rounded-lg border border-border bg-card p-8 text-center items-center"
                        >
                            <span className="text-4xl">{service.icon}</span>
                            <h3 className="text-xl font-bold">{service.title}</h3>
                            <p className="text-text-muted text-base">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
