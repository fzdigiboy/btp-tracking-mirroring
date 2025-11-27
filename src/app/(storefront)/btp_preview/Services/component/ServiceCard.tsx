interface Step {
    number: number;
    title: string;
    description: string;
}

interface ServiceCardProps {
    id: string;
    icon: string;
    title: string;
    description: string;
    steps: Step[];
    buttonText: string;
    image: string;
    imagePosition?: "left" | "right";
}

export default function ServiceCard({
    id,
    icon,
    title,
    description,
    steps,
    buttonText,
    image,
    imagePosition = "right"
}: ServiceCardProps) {
    return (
        <section
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-mt-32"
            id={id}
        >
            {/* Image */}
            <div
                className={`w-full h-80 lg:h-full bg-center bg-no-repeat bg-cover rounded-xl ${imagePosition === "left" ? "lg:order-first" : "lg:order-last"
                    }`}
                style={{ backgroundImage: `url("${image}")` }}
            />

            {/* Content */}
            <div className={`flex flex-col gap-6 ${imagePosition === "left" ? "lg:order-last" : "lg:order-first"}`}>
                <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center size-12 rounded-lg bg-secondary/10 text-secondary text-2xl">
                        {icon}
                    </div>
                    <h3 className="text-2xl font-bold text-primary">{title}</h3>
                </div>
                <p className="text-base leading-relaxed">{description}</p>
                <div className="flex flex-col gap-4 mt-2">
                    {steps.map((step) => (
                        <div key={step.number} className="flex items-start gap-4">
                            <div className="flex items-center justify-center size-8 rounded-full bg-primary text-white font-bold text-sm flex-shrink-0">
                                {step.number}
                            </div>
                            <div>
                                <h4 className="font-bold">{step.title}</h4>
                                <p className="text-sm text-text-muted">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold w-fit mt-4 hover:bg-opacity-90 transition-opacity">
                    <span className="truncate">{buttonText}</span>
                </button>
            </div>
        </section>
    );
}
