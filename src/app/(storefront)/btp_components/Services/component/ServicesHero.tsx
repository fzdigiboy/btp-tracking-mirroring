export default function ServicesHero(
    {
        title,
        description,
        image,
        linearGradient,
        isFullWidth
    }: any
) {

    // Convert hex color to rgba with opacity
    const hexToRgba = (hex: string, alpha: number) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    const gradientColor = linearGradient || '#003366';
    const gradientStart = hexToRgba(gradientColor, 0.8);
    const gradientEnd = hexToRgba(gradientColor, 0.6);

    return (
        <section className={`relative ${isFullWidth === 'No' ? '' : 'max-w-6xl mx-auto'}`}>
            <div
                className="flex min-h-[480px] flex-col items-start justify-center bg-cover bg-center bg-no-repeat px-4 py-16 text-white md:px-8"
                style={{
                    backgroundImage: `linear-gradient(${gradientStart} 0%, ${gradientEnd} 100%), url(${image?.url || "https://lh3.googleusercontent.com/aida-public/AB6AXuAYkslTvJM_OPS30hfG58QtPO5bzwxOH7IqAlv3mXBVER7CkTyRzxc9mE3obYW5eSbGK5rOITtYco0wTcWPm3UgN9uSMbQzN43LodkGqaVlcIOftIJKdE-gPX_3cfdByn84VenzQu-xWwCju1C1C8PtH9FXxZISn_iwfCc6D8HTOS63BURURP6_CbcnEfEMi9lAOPziCjFFJg_fnXriu2fJpZWIJAO8EcD1u7DNM_SQ7MtAKcMf33K2HHem6T9QSLe8lVTKoq_i8a7u"})`
                }}
            >
                <div className="mx-auto px-4 md:px-8 lg:px-14">
                    <div>
                        <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl text-center">
                            {title}
                        </h1>
                        <p className="mt-4 text-lg font-normal leading-normal text-slate-200 text-center">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
