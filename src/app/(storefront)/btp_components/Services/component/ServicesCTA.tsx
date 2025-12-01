export default function ServicesCTA(
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
        <section className={`py-16 sm:py-24 ${isFullWidth === 'Yes' ? '' : 'container mx-auto px-4'}`} style={{ backgroundColor: sectionBgColor }}>
            <div className={`rounded-xl p-8 sm:p-12 text-center`} style={{ backgroundColor: backgroundColor }}>
                <div className="flex flex-col items-center gap-6">
                    <h2 className="text-3xl font-bold" style={{ color: titleColor }}>{title}</h2>
                    <p className="max-w-2xl" style={{ color: descriptionColor }}>
                        {description}
                    </p>
                    {/* {haveButton && ( */}
                        <button className={`flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 text-base font-bold shadow-lg hover:opacity-90 transition-opacity`} style={{ backgroundColor: button?.color, color: button?.textColor }}>
                            <span className="truncate">{button?.text}</span>
                        </button>
                    {/* )} */}
                </div>
            </div>
        </section>
    );
}
