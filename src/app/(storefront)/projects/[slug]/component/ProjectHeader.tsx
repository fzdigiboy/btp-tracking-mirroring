export default function ProjectHeader({title, location}: any) {
    return (
        <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-foreground">
                {/* Villa Kégué */}
                {title}
            </h1>
            <div className="mt-2 flex items-center gap-2 text-text-muted">
                <span className="text-lg">📍</span>
                {/* <p className="text-lg font-normal leading-normal">Lomé, Togo</p> */}
                <p className="text-lg font-normal leading-normal">{location}</p>
            </div>
        </div>
    );
}
