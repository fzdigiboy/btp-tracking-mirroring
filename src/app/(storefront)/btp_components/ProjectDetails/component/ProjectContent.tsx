export default function ProjectContent() {
    return (
        <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-4">About the Project</h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                    The Villa Kégué project was a turnkey construction for a client based in France who wanted a modern, luxurious family home in Lomé. Our mission was to manage the entire process, from architectural design to final handover, ensuring the client&apos;s vision was realized without them needing to travel.
                </p>

                <h3 className="text-2xl font-bold pt-4 text-foreground">
                    Challenges & Solutions
                </h3>
                <p>
                    One of the main challenges was coordinating material sourcing and ensuring quality control remotely. We implemented a rigorous supplier vetting process and provided the client with weekly video updates and detailed progress reports. Our on-site project manager acted as the client&apos;s eyes and ears, facilitating seamless communication and decision-making across time zones.
                </p>
                <p>
                    The architectural design also required integrating modern aesthetics with local climate considerations. Our team designed a layout that maximizes natural ventilation and light, reducing reliance on air conditioning while maintaining a comfortable indoor environment.
                </p>
            </div>

            <div className="mt-12">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                    Client Testimonial
                </h3>
                <div className="bg-card border-l-4 border-primary p-6 rounded-lg shadow-sm">
                    <p className="text-text-muted italic">
                        &quot;TogoBuild made our dream a reality. Building a house from abroad seemed daunting, but their professionalism, transparency, and constant communication gave us complete peace of mind. The quality of their work exceeded all our expectations. We couldn&apos;t be happier with our new home.&quot;
                    </p>
                    <p className="mt-4 font-bold text-foreground">
                        — Mr. & Mrs. Adjovi, Paris, France
                    </p>
                </div>
            </div>
        </div>
    );
}
