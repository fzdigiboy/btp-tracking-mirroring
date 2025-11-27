export default function AboutCTA(
    {
        title,
        description,
        backgroundColor,
        sectionBgColor,
        isFullWidth,
        button,
        haveButton
    }: any
) {
    return (
        <section className={`py-16 sm:py-24 ${isFullWidth === 'No' ? '' : 'max-w-6xl mx-auto'}`} style={{ backgroundColor: sectionBgColor }}>
            <div className="container mx-auto px-4">
                <div className={`rounded-xl ${backgroundColor} px-8 py-12 text-center text-white md:px-12`}>
                    <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                        {title}
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-200">
                        {description}
                    </p>
                    {haveButton && (
                        <button className={`mt-8 flex h-12 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg ${button?.color} px-6 text-base font-bold ${button?.textColor} tracking-[0.015em] transition-transform hover:scale-105 mx-auto`}>
                            <span className="truncate">{button?.text}</span>
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}
