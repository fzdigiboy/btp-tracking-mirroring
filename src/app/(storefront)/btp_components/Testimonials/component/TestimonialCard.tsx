interface TestimonialCardProps {
    title?: string;
    isFullWidth?: string;
    name?: string;
    country?: string;
    project?: string;
    // rating: number;
    message?: string;
    // image: string;
}

export default function TestimonialCard({
    title,
    isFullWidth,
    name,
    country,
    project,
    // rating,
    message,
    // image
}: TestimonialCardProps) {
    return (
        <div className="flex flex-col gap-4 text-left p-6 bg-card rounded-xl shadow-sm border border-border">
            <div className="flex items-center gap-4">
                {/* <div
                    className="size-12 bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                    style={{ backgroundImage: `url("${image}")` }}
                /> */}
                <div className="flex-1">
                    <p className="text-base font-semibold text-foreground">
                        {name}, {country}
                    </p>
                    <p className="text-sm text-text-muted">{project}</p>
                </div>
            </div>
            {/* <div className="flex text-yellow-500">
                {[...Array(5)].map((_, index) => (
                    <span key={index} className="text-base">
                        {index < rating ? "⭐" : "☆"}
                    </span>
                ))}
            </div> */}
            <p className="text-text-muted text-sm font-normal leading-relaxed">
                "{message}"
            </p>
        </div>
    );
}
