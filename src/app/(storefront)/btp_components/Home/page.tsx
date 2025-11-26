import Header from "../common_component/header";
import Footer from "../common_component/footer";
import HeroSection from "./component/HeroSection";
import StatsSection from "./component/StatsSection";
import ServicesSection from "./component/ServicesSection";
import ProjectsGallery from "./component/ProjectsGallery";
import TestimonialsSection from "./component/TestimonialsSection";
import PartnersSection from "./component/PartnersSection";
import ContactCTA from "./component/ContactCTA";

export default function Home() {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col">
            <div className="layout-container flex h-full grow flex-col">
                <Header />
                <main className="flex-1">
                    <HeroSection />
                    <StatsSection />
                    <ServicesSection />
                    <ProjectsGallery />
                    <TestimonialsSection />
                    <PartnersSection />
                    <ContactCTA />
                </main>
                <Footer />
            </div>
        </div>
    );
}
