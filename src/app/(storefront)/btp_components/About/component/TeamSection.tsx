export default function TeamSection() {
    const team = [
        {
            name: "Koffi Amouzou",
            role: "Founder & CEO",
            description: "With 15+ years in international real estate, Koffi founded TogoBuild to bridge the trust gap for diaspora investors.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBclr7x6ELdPLwWoPlXqxj8jesEfiMfYZAJ6LbaNGiSVYe20TCHrZTjTRnwDkD8SivlYXrPC_1qkUJjXYFR45MEZVVu6c0Dkwa6YuU3qhGZNWwldiIbHasKYykpUlX_eKq-VxqnaEQFOajGNSiEQertdsqq6CT6zEaKafnszPYXsETjO8DQ07zGy55PD4GDgILcslT5GDUNqcLYY4F81sABcOGjsG3Dp8ITmdDbYQEBA1LIKpogO8sFjK-RySUv3Dt_v9uGHUzmCDD1"
        },
        {
            name: "Adjoa Mensah",
            role: "Lead Architect",
            description: "Adjoa combines sustainable Togolese design with modern architectural principles, ensuring every project is beautiful and functional.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZiSoHELK-PS5fZUSuAvvOXqbi4fsYKX3PsFsS3JUpE_kQJjTwp61sS_9Trt6wWeqzPJ5VJmuyTgIpisfD7S05rfSPW1DBO2BUnVg9magXJ9WV6_znrHZrmASUqBbjMceUT7LSXsVhyXf4umPmvcv9sc0JXEBMRA1HWItVe8q2kpxEfmElw8uaNGKJrWqnOkA2VmQ_ldcKNCj4LmeGt9nMDqaRt0_whbKqTRCSOi3bWzR7pxNdYq_kyXf29owSAcA-PeHQxOwuAIMu"
        },
        {
            name: "Yao Sotou",
            role: "Head of Project Management",
            description: "Yao ensures projects are delivered on time and on budget, managing all local logistics and regulatory compliance.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAioRH09AW36IotXPxidp8J0MbVov-L80XGFd5RbHIUgU4lKFg4yH9DOuJckAiVqfAHjXL3DR0iU_AENaopsN6FDoLMpV03tHrpT_-E9KfaAY9gS6s3VIWMfEQnHKHZ_0bugWZOMyWMe1RWc8C_CuWiJa-86jQFU5SCfpByMxGQxncl15Ztd-FnIuU4_Dvm_-U5Ku6I9iNM63RcI0PHmf5JC42sFvdaJk97ZrClqwnAu8uwZLWVYB1ccYOjoHpfk0ymEuVfqXZSLb97"
        }
    ];

    return (
        <section className="bg-card py-16 sm:py-24">
            <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-14">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-secondary">
                        The Experts Behind Your Vision
                    </h2>
                    <p className="mt-2 text-3xl font-black leading-tight tracking-tight text-primary sm:text-4xl">
                        Meet Our Team
                    </p>
                    <p className="mt-4 text-lg leading-relaxed text-text-muted">
                        A dedicated group of professionals committed to bringing your project to life with precision and care.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-10">
                    {team.map((member, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <img
                                className="h-40 w-40 rounded-full object-cover"
                                src={member.image}
                                alt={member.name}
                            />
                            <h3 className="mt-6 text-xl font-bold text-primary">
                                {member.name}
                            </h3>
                            <p className="mt-1 text-base text-secondary">{member.role}</p>
                            <p className="mt-2 text-sm leading-relaxed text-text-muted">
                                {member.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
