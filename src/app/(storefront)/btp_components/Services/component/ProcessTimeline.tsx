export default function ProcessTimeline({ title, steps, isFullWidth, description }: any) {


    return (
        <section className={`py-20 mx-auto px-4 md:px-8 lg:px-14 mt-16 ${isFullWidth === 'No' ? 'custom_container' : ''}`}>
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-primary">
                    {title}
                </h2>
                <p className="mt-4 text-lg">
                    {description}  
               </p>
            </div>
            <div className="relative w-full">
                {/* Timeline Line */}
                <div className="hidden sm:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2" />
                {/* Timeline Items */}
                <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-center">
                    {steps.map((step: any, index: number) => (
                        <div key={index} className="flex flex-col items-center gap-3">
                            <div
                                className={`relative flex items-center justify-center size-10 rounded-full z-10 text-2xl mb-6 ${index === steps.length - 1
                                    ? "bg-secondary text-primary"
                                    : "bg-primary text-white"
                                    }`}
                            >
                                {step?.icon}
                            </div>
                            <h4 className="font-bold">{step?.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
