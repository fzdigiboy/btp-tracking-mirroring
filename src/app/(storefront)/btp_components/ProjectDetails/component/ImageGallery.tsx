export default function ImageGallery() {
    const mainImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuDUcXyBbwurAu_qoGf2ehRLCPWnMLj4ihntL4dhQ6NCVsvn1LLHq30QBRV4AY2__MqBJ8i_U_x7I8A-lnE3lO_v2423IsxlKh9lvhJlMBSXQEtq6u9paBpjxVPhovVcakumcI_0qH31ZRiWSQ5toJZZY9ho252p4-nBwNnzbKightMbHc9Gj9qZJsktY5JVFBL89uI347YEc-0bc_-YeBNd92tCsAKM5TIchVcNdxvbT5uenywxcrWN-jC0cW0SZ67MGKW0tMfhfATW";

    const thumbnails = [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAZRx9hOGF2LKy_6kxPFmYyq7YPkAoADOl3LUMrtWKapxe1zFLdYgpGV8hZY9rp9IAeib3ylx4uJyGXVtKDS4V5orL0dKdE8HqB4RqN_8LPd9b3LjtNHcUdoKiTgnFt-tDHse3x8LZUm8DiO1Qs1Xs06-TzILiMyHCzPZKXemhu2U2TmRnqa9lAi8IhW3nRo_MMhUGQ0SeFWzKmSkyaEL72Id62k7x6kOGwySP9AZ-XxpDlMNVjpYCHWp9TuKV1ULjNtu2GSfYQIEn9",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAYusKHtiH9X80TFE-2VbKoBfVk65kb0nql32J6bHV_80remIIDzgg5wjQEixXhZ3awGqYFvYQn6KW1eiBRezizLPLrxEye4hB7Day3NLJpVJwX33NKRqsGRrIRmic_4plGhSrI-U4SkRCSUf6wevI3afkVq3_H4-zuDSiSHiAzNvLrRfrgtcZCi9QeLz7kuuHc8iRHhU3cQpKbr8oGGVqUy_L59p5zl8LxG3l5BHLbQ8yPUapruBsSLveEwKkg2MYOvHxg8IWJg440",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000&auto=format&fit=crop"
    ];

    return (
        <div className="mb-12">
            <div className="grid grid-cols-12 gap-4 h-auto md:h-[600px]">
                {/* Main Image */}
                <div className="col-span-12 md:col-span-8 h-72 md:h-full overflow-hidden rounded-xl relative group">
                    <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-105"
                        style={{ backgroundImage: `url("${mainImage}")` }}
                    >
                        <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-lg backdrop-blur-sm text-sm">
                            Vue Principale
                        </div>
                    </div>
                </div>

                {/* Thumbnails */}
                <div className="col-span-12 md:col-span-4 flex flex-row md:flex-col gap-4 overflow-x-auto md:overflow-y-auto scrollbar-hide pb-2 md:pb-0">
                    {thumbnails.map((image, index) => (
                        <div key={index} className="w-32 h-32 md:w-full md:h-64 shrink-0 overflow-hidden rounded-xl">
                            <div
                                className="w-full h-full bg-cover bg-center hover:opacity-90 transition cursor-pointer"
                                style={{ backgroundImage: `url("${image}")` }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
