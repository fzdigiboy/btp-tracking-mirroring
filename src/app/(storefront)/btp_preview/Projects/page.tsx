import Header from "../common_component/header";
import Footer from "../common_component/footer";
import ProjectsHeader from "./component/ProjectsHeader";
import FiltersSidebar from "./component/FiltersSidebar";
import ProjectCard from "./component/ProjectCard";

export default function Projects() {
    const projects = [
        {
            title: "Villa Kégué",
            location: "Lomé, Togo",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUcXyBbwurAu_qoGf2ehRLCPWnMLj4ihntL4dhQ6NCVsvn1LLHq30QBRV4AY2__MqBJ8i_U_x7I8A-lnE3lO_v2423IsxlKh9lvhJlMBSXQEtq6u9paBpjxVPhovVcakumcI_0qH31ZRiWSQ5toJZZY9ho252p4-nBwNnzbKightMbHc9Gj9qZJsktY5JVFBL89uI347YEc-0bc_-YeBNd92tCsAKM5TIchVcNdxvbT5uenywxcrWN-jC0cW0SZ67MGKW0tMfhfATW"
        },
        {
            title: "Résidence du Lac",
            location: "Aného, Togo",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZRx9hOGF2LKy_6kxPFmYyq7YPkAoADOl3LUMrtWKapxe1zFLdYgpGV8hZY9rp9IAeib3ylx4uJyGXVtKDS4V5orL0dKdE8HqB4RqN_8LPd9b3LjtNHcUdoKiTgnFt-tDHse3x8LZUm8DiO1Qs1Xs06-TzILiMyHCzPZKXemhu2U2TmRnqa9lAi8IhW3nRo_MMhUGQ0SeFWzKmSkyaEL72Id62k7x6kOGwySP9AZ-XxpDlMNVjpYCHWp9TuKV1ULjNtu2GSfYQIEn9"
        },
        {
            title: "Projet Rénovation Tokoin",
            location: "Lomé, Togo",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYusKHtiH9X80TFE-2VbKoBfVk65kb0nql32J6bHV_80remIIDzgg5wjQEixXhZ3awGqYFvYQn6KW1eiBRezizLPLrxEye4hB7Day3NLJpVJwX33NKRqsGRrIRmic_4plGhSrI-U4SkRCSUf6wevI3afkVq3_H4-zuDSiSHiAzNvLrRfrgtcZCi9QeLz7kuuHc8iRHhU3cQpKbr8oGGVqUy_L59p5zl8LxG3l5BHLbQ8yPUapruBsSLveEwKkg2MYOvHxg8IWJg440"
        },
        {
            title: "Villa Sika",
            location: "Kpalimé, Togo",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDL5Yy4JF-V2k45GN0xGFZZ79dBaKNRnztWnYsnBLN0ERrjRX0PQIRvcs5msETgoB0zItIRClG4ppw_7oHxRu8JRq_1JXCuRIuCzQZyxKbDmiNdOPiKFgm5m9qrCUEydJwrRDA9w14_8SETnAKZK2RaQYyreFXN5PVKMGvMbzfM8AC1soItPqU9yM4CAhmc1TJmclYJ3hNwkgaD9FvjkeZHhazWaKViQd8BsSWXqI__TLTUdXdIpUWdsrIOPr-KNe0kgG-JqXrN6bWZ"
        },
        {
            title: "Immeuble Avédji",
            location: "Lomé, Togo",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAroMXN5zspcUPGAKVfRxUqBzA7jgwC6JQrGfoy_Ebup56Qkrv5cjS1lTOel73Kg10OqYOWIgVGU_76lnTgG4xivmhZuyzG3MpB4s2G8pSrp5onaJGGBo_rCxE6dIMQqhZwGOy-6rId4mfMANUw22LDFkP_WjsUYuCdsSpvY3PzISC4oQzlk6j992cI-emNToy6F3bBI49XK1FLXRH9-liVCCfe8wqCoVDqyWuaZghyG3UkmlInSc_R7vuFE6hqMZZexw8GSsHdxc_r"
        },
        {
            title: "Maison Agoué",
            location: "Lomé, Togo",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3tlUAZM7crbRfuHDSfDt7i-HLYUgc-ThSzEkV3ilKrid-jjJe3PNrKFfHFHY7lHK-AaVCuZTi-eNSzLw1INI3kj31R6EZ8LGgb_uv8uRub9Vwwdhy7MQvs02dX3M-OFR_2-lMpvXZzkqJVZ0MddlfWwnbzAtFrGn4g3onWUpjqgDNTJbYRfqmq2AFMcStZaSMVNYMDPxRMb_rSRYUfe68GSxt-41iGbUD4Qbh_AokeNIgEZzTWIwSZAdT2HBHfZODN3gbrdvcxV2b"
        }
    ];

    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col">
            <div className="layout-container flex h-full grow flex-col">
                <Header />
                <main className="flex-1 p-4 sm:p-6 lg:p-8 px-4 md:px-8 lg:px-14">
                    <ProjectsHeader />
                    <div className="flex flex-col gap-8 lg:flex-row">
                        <FiltersSidebar />
                        <div className="w-full lg:w-3/4 xl:w-4/5">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                                {projects.map((project, index) => (
                                    <ProjectCard key={index} {...project} />
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
}
