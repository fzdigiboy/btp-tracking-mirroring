export default function CoreValuesSection({ title, subtitle, blocks, isFullWidth}: any) {
  

    return (
        <section className={`py-16 sm:py-24 ${isFullWidth === 'No' ? 'custom_container' : ''}`}>
            <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-14">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-secondary">
                        {subtitle}
                    </h2>
                    <p className="mt-2 text-3xl font-black leading-tight tracking-tight text-primary sm:text-4xl">
                        {title}
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-10">
                    {blocks.map((value: any, index: number) => (
                        <div
                            key={index}
                            className="flex flex-col items-center rounded-lg border border-border p-8 text-center"
                        >
                            <span className="text-5xl">{value?.icon}</span>
                            <h3 className="mt-4 text-xl font-bold text-primary">
                                {value?.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-text-muted">
                                {value?.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
