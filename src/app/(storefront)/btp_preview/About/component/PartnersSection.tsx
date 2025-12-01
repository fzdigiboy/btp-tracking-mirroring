export default function PartnersSection() {
    const partners = [
        {
            name: "Ecobank",
            logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDt75es1NKaqyIqAVhbzBkqdykLaMyl54hnkuNVy_7sKncnj-5dTQzQBI8DhBeUK-lZtmqs1Mcdi_TGo09QWRXI5STbxia3QXbtL0G7Dn8HrMUfRKhLoRPQK5lH_QmwWv2Vpao8DqsPiFy6mCfSm1lJ1KFjZKAphxNXWyOtq9Et7CB2cn2u8ey5yPMLfOaLF849o-42Av95n5ZCYFkalz_fCAPvRqfQkSBiIzmrKZ-YgdVf3n_PqouzspLZatRRBKh5JRPsNgD3vzOR"
        },
        {
            name: "Orabank",
            logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuC32-_UTpJ5Nw0sOUIFylx_AbURQ-gfklKus456qQTYpEBQm9L_KgFjL_4jokm6TJ0j_AbuwYW5jVquFoFVsTTwiuFWDDBSuiyrQEj3KPmFmpofjotM7hga3D-1MDb3S5NG2cj9u8YTz2BomMuelLQhS60Qet0uh2yI9CGRoq166c-THfW2ZC_WCFIQSp3v9udEPSROZ2vYIOrK7mzsPbglVnSwEBOPTY2OtaXWqyJWTz9p-DIg5YGwqYnsiv7Nev4lSU4awDy0PI-x"
        },
        {
            name: "BOAD Bank",
            logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaDC2lplgxGr_lCPIaoTkkTGuWwQUv_RteuEiFkaOP-r3F6DnKjV8HHy2c3yRrhL-T4jHYprL9CShJMw4pSVwpW7m2gNwmAP33DwbAP7nmNemByTz9Lf7thV6l0QhIjS29jLaiD4DKjPVSTtVzuO9iL-Qau3yQT5Le6iLOo67FdmNABD6V_d6AGn4n_BnKOXRjw3Cyicz2GWQLEdISPWXSnVF6eiSYAGenhQXNs_ARNgJDtZlkP30TH0Pu34X41GOSH5t1J1IpnrD3"
        },
        {
            name: "Togo Association of Notaries",
            logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-J06wIzI3HIeXyl4ARrB8C6GXXyzd6Uojf6gj6Yo7x2W9UGY7bGxunT-8rVoXJAAdi7MBCX41qucH0D4mcLjgZ6gRvOKPh9i2J8x6jFZ6KEmeQpQmiKdY_WjC2qvumKly4J-EO9DP4RSyEPTDrU7s5MnlbSyf02nlQ4nPjkDn8b8XjIOgx89LiIuVmK0rSY4jTgi_TOaHU5nV29PcwoU_GksKM89g6aaIZXitpnXKBJwvAp1Lnp3p_JB2ebrwAgDpLh9CoLoskppL"
        },
        {
            name: "ISO 9001 Certification",
            logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4CnBPawOE_t0DxNfE7A1RFqN7yZnI2FfM8CWUHjKiJ-FoMRa3IoLyUJmFWGbFYGJJAQoz9It8shLETIOVSFzA84OlBompIFRTTF3kYbgi15s4WPNR-gsZNzJUppU9RVpwKEWuX82UgB-sx8R3N9_Tbdv7opD1zKJanazB3vnjgt-_kE2yG3H3uqPu92Ka6eTt6H7xlxSsYXhSpq17kTeXmhBIRs8AdAO9SndsWvW9McY-eu0whRO6_ZAaEc5fzriEBAKkRJnAT8Nu"
        }
    ];

    return (
        <section className="bg-primary/5 py-16 sm:py-24">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-secondary">
                        Building Confidence
                    </h2>
                    <p className="mt-2 text-3xl font-black leading-tight tracking-tight text-primary sm:text-4xl">
                        Our Trusted Partners & Certifications
                    </p>
                    <p className="mt-4 text-lg leading-relaxed text-text-muted">
                        We collaborate with industry-leading institutions and hold certifications that guarantee the security and quality of your investment.
                    </p>
                </div>
                <div className="mt-12">
                    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 grayscale">
                        {partners.map((partner, index) => (
                            <img
                                key={index}
                                className="h-10 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                                src={partner.logo}
                                alt={`${partner.name} logo`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
