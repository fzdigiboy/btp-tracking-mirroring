import Header from "../common_component/header";
import Footer from "../common_component/footer";
import AboutHero from "./component/AboutHero";
import StoryMissionSection from "./component/StoryMissionSection";
import TeamSection from "./component/TeamSection";
import CoreValuesSection from "./component/CoreValuesSection";
import PartnersSection from "./component/PartnersSection";
import AboutCTA from "./component/AboutCTA";

export default function About() {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col">
            <div className="layout-container flex h-full grow flex-col">
                <Header />
                <main className="flex-1">
                    <AboutHero />
                    <StoryMissionSection />
                    <TeamSection />
                    <CoreValuesSection />
                    <PartnersSection />
                    <AboutCTA />
                </main>
                <Footer />
            </div>
        </div>
    );
}
