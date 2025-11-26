export default function PartnersSection() {
    const partners = [
        {
            name: "Caterpillar",
            logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGP-RVeSHeJ5W_tmzzu_dEIyBvhUL_qZ3Po3mSmcmBweHg3x3NTBaTbHpR-dVEtHwviev6Amc_KijkXNWU8ftIC4DKlpIUHOppaIEcoQ--63Jb0q-urcYKqYM68-0PUaIXbPCj2_U9TSdDFFtjtR4xvJllVBYmzfT0qBAfxGjIasUJ3maEfLi3oh8tODsVwCZeEtwK8QvFaPcB3HRhWa0shvhcy6jeXbRjgE7Sd5baiHIhr80ynk_ewxzkmNB7N3fpNVHHuOrwAtYu"
        },
        {
            name: "Forbo",
            logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoWKxZ6MQlCaddzZcCD4ryKiiwcnN3IE6n87_AFOYBpxIyEGD2S_NtrkAgweZJOIv89ShwzEmGgNvvHmPD1l-C0X1vPc4J_NpYguqMqpbUlOCrzuth67fQSWBphT6wQc7ofOkOW3VPKnqbW0tTMRe4J7JfRKAjKeZIRf0hJl36QyIfwe7pjR5cjN3ovBjQoSJJ5y7uQAeCx_5KNUF0eHIL8M7j5XSJpqmz4pADt8n1u_lGdUSn9CBnzkZiM4ijX_9w_n8nrWuSbIfE"
        },
        {
            name: "Lafarge",
            logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbuqOT-ikXA_ZV3D2HQwx60odYOaGCatrsr5tHbC3BMowcUA0y0iliat5aG49vKMRHPLaWkJR7vcZd0Gpdyt9YAAQt4Avb-D9iU27El0Fekg6vDK0RW7W3UAhXI9sBhQ2QxP9SGO-x2uW2oiZJmXrmHN4AJc-ovFTE-kN8IQLPhbcjThvQAES258gQPByMj-kENsj92dmRh5M32dcqGC561Zdcm3Eo0cxx7zffxbMTntMz1KGWpqlxSlJ74vXalDQHN7mqWjD1LZVa"
        },
        {
            name: "Schneider Electric",
            logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOUVX-xekkbwyNtr4c7517HRn9vRSQBR3oYI5w5rb00_IgCGPPnMLReohBz2TXtsM_CHfWgw_8eIS6aOFkHCAeHE25BGuXSPU_eJaT_3vkkLbIYjaaL4tKfIu1Qk_sPaC4GUd-nnoSbeKBiGxkW65CvxzdCw6DhrPd5XFlESlGNtNPPkkmCjTnqd7rTINY7KZCdAK0ijVkxN7z1oe-bs5ccN-rjXe69OUa7li6uMxZoRjK5VHVfOzeJC4eytTbfOzXGDHPwVkGXlk6"
        },
        {
            name: "Bosch",
            logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCN-G-4M8EWAPvjOKy3GjpiK5Hm5KxAxL7pgrdzr7nherNS0luFkHfPASrTSOc0l9AN9__7RmqQS_omaETe4opY9zKrbZ4AKTmIFg6U5Tp5C0lI9UZnP8P5MRtdD52RJBbVKRLYTV9aVVtPfOc3VBBQDuREuMJ_b-xPAa7DnGgADX5CL1fm-pXP_XeShb2LY9ibcDFIGo_Q2pkFhbVYMH-xMAsQP-Nsltr8Ha55hlBsJiF_jH4l7ea0FjtYNXbbQenl6wzbxzhRQClM"
        }
    ];

    return (
        <section className="py-16 sm:py-24 bg-card">
            <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-14">
                <h2 className="text-center text-2xl font-bold tracking-tight text-foreground mb-10">
                    Trusted by Industry Leaders
                </h2>
                <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
                    {partners.map((partner, index) => (
                        <img
                            key={index}
                            className="h-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
                            src={partner.logo}
                            alt={`${partner.name} logo`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
