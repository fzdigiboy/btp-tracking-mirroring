export default function ContactCTA(
    {
        title,
        description,
        titleColor,
        descriptionColor,
        backgroundColor,
        sectionBgColor,
        isFullWidth,
        button,
        // haveButton
    }: any
) {
    return (
        <section className={`py-16 sm:py-24 ${isFullWidth === 'Yes' ? '' : 'max-w-6xl mx-auto'}`} style={{ backgroundColor: sectionBgColor }}>
            <div className="max-w-4xl mx-auto px-4 py-8" style={{ backgroundColor: backgroundColor , borderRadius: '10px' }}>
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: titleColor }}>
                        {title}
                    </h2>
                    <p className="mt-4 text-lg" style={{ color: descriptionColor }}>
                        {description}
                    </p>
                    {/* {haveButton && ( */}
                        <button className={`mt-8 flex mx-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 text-base font-bold tracking-wide hover:opacity-90 transition-opacity`} style={{ backgroundColor: button?.color, color: button?.textColor }}>
                            <span className="truncate">{button?.text}</span>
                        </button>
                    {/* )} */}
                </div>
            </div>
        </section>
    );
}
