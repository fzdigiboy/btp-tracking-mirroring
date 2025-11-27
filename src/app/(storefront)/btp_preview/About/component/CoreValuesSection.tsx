export default function CoreValuesSection() {
    const values = [
        {
            icon: "👁️",
            title: "Transparency",
            description: "Open communication and clear reporting at every stage. You are always in the know, no matter the distance."
        },
        {
            icon: "✓",
            title: "Quality",
            description: "We use premium materials and skilled local craftsmanship to build durable, high-standard properties."
        },
        {
            icon: "💡",
            title: "Innovation",
            description: "Embracing modern construction techniques and sustainable practices for efficient and future-proof buildings."
        },
        {
            icon: "🤝",
            title: "Trust",
            description: "Your investment is our responsibility. We build lasting relationships based on integrity and reliability."
        }
    ];

    return (
        <section className="py-16 sm:py-24">
            <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-14">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-secondary">
                        Our Guiding Principles
                    </h2>
                    <p className="mt-2 text-3xl font-black leading-tight tracking-tight text-primary sm:text-4xl">
                        Our Core Values
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-10">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center rounded-lg border border-border p-8 text-center"
                        >
                            <span className="text-5xl">{value.icon}</span>
                            <h3 className="mt-4 text-xl font-bold text-primary">
                                {value.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-text-muted">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
