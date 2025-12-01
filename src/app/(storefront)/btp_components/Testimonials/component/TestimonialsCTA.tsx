export default function TestimonialsCTA(
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
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: titleColor }}>
                        {title}
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg" style={{ color: descriptionColor }}>
                        {description}
                    </p>
                    {/* {haveButton && ( */}
                        <div className="mt-8 flex justify-center">
                            <button className={`flex items-center justify-center rounded-lg h-12 px-6 text-base font-bold hover:opacity-90 transition-opacity`} style={{ backgroundColor: button?.color, color: button?.textColor }}>
                                {button?.text}
                            </button>
                        </div>
                    {/* )} */}
                </div>
            </div>
        </section>
    );
}
