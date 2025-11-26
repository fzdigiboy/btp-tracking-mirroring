import Image from "next/image";

export default function ProjectsGallery() {
    const projects = [
        {
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCu5etAzYaKq_VFH9AUAtWM8jIZosNJV6wphndlalLLv5M_cDMzmm7S6e7EyoeFkmSNRYC7j-e6cUHPRPJsZ3Ccq0x0Ob7Bicc7NBqDs2cl0ceJD1hTFTScj8DHjjjj7YH9oi7J5JWXaMjmabbFtesQgc1cRuDr6_4tSYZLnACmnT1Kyn9qyEvML4x5o2GowPYYBpd1PDOR7iICi02-lrNEELpuyJ2QPGSn8L2POkUD2jzVUZO6XQM4lgGrm-47zljl3ndatnFOjahn",
            title: "Luxury Villa, Lomé",
            category: "Residential Construction"
        },
        {
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7pmDnFb5Wet6elGL09Y6cuDRan_w7kWq6TjVSWYgrT8qAeSU8oY3y3OVh_T_YN04UG7PJ1a2k24nnZFzR8nTwxH08fceDyPPXmlAVH8LbKImagBsa3HmpWg-KmwNGv77oyuGUroROJwSFjqlLmgRA04ZF2_lZCWCKiLHs-VgNfTKmHi8sR-OgpPRJvfCnEko2FHUVr2x-QordsxvCjFLTuGI71w4ZHyitGClpGKNW09_sYgLE8Lntf_CZHu4nXd_yaObECbR6FlDg",
            title: "Bagida Office Complex",
            category: "Commercial Building"
        },
        {
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-chWiRoYHU3Z1015et-_y_jqhcvzMtMiCx1jlxeAx4zyNSK1mVfhP3c0HuWvNXSh5eh4-YnN5qI8uVfFsepj4fEQLw9R0qzU3Tgz8PHaJXS-DMb7aM-IPT2ZutNc0Dis77XnbnspPwnZpri8Q1QyhHSxHFIPI6kTrp5GeaOHiGDVjFNgI9iKpqOMbBU1YVsOpGzyNWt69M3XjgOwU22LazqMb2oDfQ4FD6Tb_YGxPQeIiBQ5d3n0OrtE_QcmXL7pzASgwusicsW_h",
            title: "Kpalimé Residence Renovation",
            category: "Renovation Project"
        }
    ];

    return (
        <section className="py-16 sm:py-24 bg-card">
            <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-14">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                        Our Recent Projects
                    </h2>
                    <p className="mt-4 text-lg text-text-muted">
                        A portfolio of our commitment to quality and excellence.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group overflow-hidden rounded-lg">
                            <img
                                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                src={project.image}
                                alt={project.title}
                            />
                            <div className="p-4 bg-background">
                                <h3 className="font-bold text-lg">{project.title}</h3>
                                <p className="text-sm text-text-muted">{project.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
