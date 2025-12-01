import Header from "../common_component/header";
import Footer from "../common_component/footer";
import ProjectHeader from "./component/ProjectHeader";
import ImageGallery from "./component/ImageGallery";
import ProjectContent from "./component/ProjectContent";
import ProjectInfo from "./component/ProjectInfo";

export default function ProjectDetails() {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col">
            <div className="layout-container flex h-full grow flex-col">
                <Header />
                <main className="flex-1 p-4 sm:p-6 lg:p-8 px-4 md:px-8 lg:px-14">
                    <ProjectHeader />
                    <ImageGallery />
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <ProjectContent />
                        <ProjectInfo />
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
}
