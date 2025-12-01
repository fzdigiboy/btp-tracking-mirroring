export default function StatsSection({  numberBlocks, isFullWidth }: any) {
    const stats = numberBlocks.map((stat: any) => ({
        value: stat.title,
        label: stat.description,
        color: stat.color,
        b: stat.textColor,
    }));

    return (
        <section className={`py-16 sm:py-24 bg-card ${isFullWidth === 'No' ? 'custom_container' : ''}`}>
            <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-14">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                    {stats.map((stat : any, index: number) => (
                        <div key={index} className="flex flex-col gap-2">
                            <p  style={{color:`${stat.color}`}} className=" text-5xl font-bold tracking-tight">
                                {stat.value}
                            </p>
                            <p style={{color:`${stat.b}`}} className="text-text-muted text-base font-medium">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
