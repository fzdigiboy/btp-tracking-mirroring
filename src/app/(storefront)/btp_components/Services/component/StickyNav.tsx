export default function StickyNav() {
    return (
        <nav className="sticky top-[69px] z-40 bg-background/90 backdrop-blur-sm py-4 mb-12 border-b border-border">
            <div className="flex justify-center gap-3 sm:gap-6 flex-wrap">
                <a
                    className="text-sm font-medium px-4 py-2 rounded-lg hover:bg-card transition-colors"
                    href="#land"
                >
                    Land Consulting
                </a>
                <a
                    className="text-sm font-medium px-4 py-2 rounded-lg hover:bg-card transition-colors"
                    href="#design"
                >
                    Architecture & Design
                </a>
                <a
                    className="text-sm font-medium px-4 py-2 rounded-lg hover:bg-card transition-colors"
                    href="#management"
                >
                    Site Management
                </a>
                <a
                    className="text-sm font-medium px-4 py-2 rounded-lg hover:bg-card transition-colors"
                    href="#quality"
                >
                    Quality Control
                </a>
            </div>
        </nav>
    );
}
