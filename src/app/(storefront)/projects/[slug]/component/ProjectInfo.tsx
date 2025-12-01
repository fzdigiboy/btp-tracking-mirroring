export default function ProjectInfo({duration, size, unity, services}: any) {
    // const services = ["Architecture", "Construction", "Turnkey"];

    return (
        <div className="lg:col-span-1">
            <div className="sticky top-24">
                <div className="rounded-xl border border-border bg-card p-6">
                    <h3 className="text-xl font-bold mb-6 text-foreground">
                        Project Info
                    </h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="font-semibold text-text-muted">Duration:</span>
                            {/* <span className="font-bold text-foreground">14 Months</span> */}
                            <span className="font-bold text-foreground">{duration}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-semibold text-text-muted">Size:</span>
                            {/* <span className="font-bold text-foreground">450 m²</span> */}
                             <span className="font-bold text-foreground">{size} {unity}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-semibold text-text-muted">Services:</span>
                            <div className="flex flex-wrap justify-end gap-2">
                                {services?.map((service:any, index:number) => (
                                    <span
                                        key={index}
                                        className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full"
                                    >
                                        {service.titre}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-border">
                        <h4 className="text-lg font-bold text-center mb-4 text-foreground">
                            Interested in a similar project?
                        </h4>
                        <button className="flex w-full items-center justify-center gap-2 rounded-lg h-12 px-4 bg-primary text-white text-base font-bold hover:bg-opacity-90 transition-opacity">
                            <span className="text-xl">📋</span>
                            <span>Request a Quote</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
