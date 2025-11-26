export default function ServicesHero() {
    return (
        <section className="relative">
            <div
                className="flex min-h-[480px] flex-col items-start justify-center bg-cover bg-center bg-no-repeat px-4 py-16 text-white md:px-8"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 51, 102, 0.8) 0%, rgba(0, 51, 102, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAYkslTvJM_OPS30hfG58QtPO5bzwxOH7IqAlv3mXBVER7CkTyRzxc9mE3obYW5eSbGK5rOITtYco0wTcWPm3UgN9uSMbQzN43LodkGqaVlcIOftIJKdE-gPX_3cfdByn84VenzQu-xWwCju1C1C8PtH9FXxZISn_iwfCc6D8HTOS63BURURP6_CbcnEfEMi9lAOPziCjFFJg_fnXriu2fJpZWIJAO8EcD1u7DNM_SQ7MtAKcMf33K2HHem6T9QSLe8lVTKoq_i8a7u")`
                }}
            >
                <div className="mx-auto px-4 md:px-8 lg:px-14">
                    <div>
                        <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl text-center">
                            Our Services: Your Vision, Expertly Built
                        </h1>
                        <p className="mt-4 text-lg font-normal leading-normal text-slate-200 text-center">
                            We provide a full suite of end-to-end services, ensuring your investment in Togo is secure, transparent, and successful from anywhere in the world.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
