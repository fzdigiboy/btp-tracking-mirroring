import Footer from "../common_component/footer";
import Header from "../common_component/header";
import FilterChips from "./component/FilterChips";
import TestimonialCard from "./component/TestimonialCard";
import TestimonialsCTA from "./component/TestimonialsCTA";
import TestimonialsHeader from "./component/TestimonialsHeader";
import MediaGallery from "./component/VideoPlayer";

export default function Testimonials() {
    const testimonials = [
        {
            name: "John Doe",
            country: "USA",
            project: "Villa Construction in Lomé",
            rating: 5,
            testimonial: "The entire process was seamless, from planning to execution. A truly professional team that understands the needs of foreign investors.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFAllm2nj7EojKnY-Il5LL1j7TsJWR8NFdWco-Xac4Ep2R_hk7QtPzknk3llNZ6jYz4h7S8oF5W1sQhoFzEzxy6HDixnltpTeTQoZRpCYC6t_fNe5LNb5xYmX7jBhFRWiiHD68S-WnXRgzMRfjPu2hP3kk0G8EOZ_my3KVYiBY-5vQyraLuzK4jA1riNxhwr42na-_B01rK4PUdAsDI9p6Cytnv02QMEHJPTqO8XhYleiqItuPdtVYCrFnOguyOwvyX-QQYKc5J5I5"
        },
        {
            name: "Marie Dubois",
            country: "France",
            project: "Residential Complex, Kpalimé",
            rating: 5,
            testimonial: "Building from France was a daunting prospect, but their communication and transparency made it a stress-free experience. Highly recommended.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAO_Ezr3U4c7yiIQ1MlHt7fShLsV4YubUPb58EL5-A0pA0tZrO2fSkMCE5hkypH51YRL01Xgrvlxcd5KYdEu1uw9QXLDXpHLsHsqsBAxX1yAVAgqedOyQGz1agWbL8Y3YgX-bVoDJwD5bM3b05Yw2v2XXXUsJvo57szKATQaIeDEtCgkpTOn50ZqbdqNpnV4fTqtcUxp6XgwHZ6-L7ZuS6QtMMFBsQVJBaeT99ksyY-E20V2TQENpXuUB1gjZL9yeo_VMx6s5aX-A7C"
        },
        {
            name: "Kenji Tanaka",
            country: "Japan",
            project: "Industrial Warehouse",
            rating: 5,
            testimonial: "Their deep knowledge of local regulations and logistics was invaluable. They are a reliable partner for any serious industrial project in Togo.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoYDEJlKnPlFqsQ4flPQST-FxOpZV3sgBKGDX_Sqqo7Bw7FLqfAFWsoVSYThB4I_WXPCTVe4b0tnENXQKtU1uSN3HnOOlbMEGIVl58m0xNdG2AVadENJ6JDFPziRUd2xhgLIbP0eChfCjGpc2nuaJPREzd18hPIUBYSg8AGV02CCfEmw2bZN4DE8OUNl62xonO4Lx4-sHIeNQgKk530S1pHtbYyN1QEloArMfO0b3UlH3A08Ii5OdKO3aFZ717NvPfnYweT5KzqFwI"
        },
        {
            name: "Fatima Al-Jamil",
            country: "UAE",
            project: "Commercial Office Building",
            rating: 5,
            testimonial: "We are thrilled with our new commercial space. The attention to detail and commitment to our vision was impressive throughout the project.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASyEDZL_v2x92H-Z-Qjjuor9MMqph0A7d25RCRgOSX27W1LM4cAgB7msLqjTba1zBrHde9lorj-jmQb_sMA0HTnD6al3h6GjJRjMmchSgA2JtcMSvyf3WzC3u66P5srXa40IxnMkyj8fqY6NBVfnIl5VgtZwdUGI7SE-u8UkKQwz3t-p7Br4J-Z6YzSd1MkRLc5aYsEoDkeo5nEm0GnQMmzQTdyzu94ydhZJO-np0-aQKI5XtyEXP3rKkXhvYo1fMv0AoJoqtYucgU"
        },
        {
            name: "Liam Smith",
            country: "UK",
            project: "Luxury Apartment Building",
            rating: 4,
            testimonial: "An exceptional result that exceeded our expectations. The quality of the construction is top-notch and the project was delivered on time.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6KfWio0RX7ZAHLcjYMzgiQU9JheC9lg1dapMGdcgamU2mMs0YBp7J8g4S8MGfUGPszxUSvb48w1hDS8ijT88q5zITEzr8q15szH-R7flsL-XAVqPR8LiDqsMqdHLNw6xpktUaUV107YMTzycLXe7Qtza482RBGqX-5A2m-FmgeYNZSrSPFTVA2_AniB1gMsovWC6MireuOek1rBN9o42yRHgBH3WOPiPjx4DmbdXsLiLUREo9ES_FIRehaTHuViu52IrD-yQdY3GH"
        },
        {
            name: "Carlos Rossi",
            country: "Brazil",
            project: "Seaside Resort Construction",
            rating: 4,
            testimonial: "A trustworthy and efficient team. They turned our architectural plans into a beautiful reality. We would gladly work with them again.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0WZKIT9qubeLn9GxpTZ7a3kAjZ-et6V31n3J4gYFIaI-dF0nztbDt6sagFINMP0TJMAnfxcP4O_rV7YKoQitkXIliHHfpp1QHytr6nq8Q94rHqn-v6IOItB2_30zg8R85LE1bq37sN31exJb4QtW1pUVBjcEn21CK2mYGRJYHi2TavEg4c8hYHavSn6EL9RidkHKu_-NWQsRkzyXrqnNrK2WV9xJq3xnmLV5GY__kR3Hk4w2PMX-pxNHgA14x5V1UadGOjmEsHicA"
        }
    ];



                                  // Exemple avec plusieurs médias (images et vidéos)
const mediaUrls = [
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000"
];
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col">
            <div className="layout-container flex h-full grow flex-col">
                <Header />
                <main className="flex-1 p-4 sm:p-6 lg:p-8 px-4 md:px-8 lg:px-14">
                    <div className="flex flex-col gap-10 sm:gap-16 items-center w-full">
                        <div className="layout-content-container flex flex-col flex-1 gap-10 sm:gap-12">
                            <TestimonialsHeader />
                            {/* <MediaGallery /> */}


         <h2 className="text-2xl font-semibold text-white mb-4">Plusieurs médias</h2>
         <MediaGallery mediaUrls={mediaUrls} />
        
      
       
    
                            <FilterChips />
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {testimonials.map((testimonial, index) => (
                                    <TestimonialCard key={index} {...testimonial} />
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
                <TestimonialsCTA />
                <Footer />
            </div>
        </div>
    );
}
