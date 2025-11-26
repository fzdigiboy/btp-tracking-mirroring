export default function StatsSection() {
    const stats = [
        { value: "50+", label: "Projects Delivered" },
        { value: "15+", label: "Years of Experience" },
        { value: "100%", label: "Client Satisfaction" }
    ];

    return (
        <section className="py-16 sm:py-24 bg-card">
            <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-14">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <p className="text-primary text-5xl font-bold tracking-tight">
                                {stat.value}
                            </p>
                            <p className="text-text-muted text-base font-medium">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
