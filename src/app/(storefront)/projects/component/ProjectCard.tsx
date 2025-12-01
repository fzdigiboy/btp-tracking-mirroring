import { useRouter } from "next/navigation";

interface ProjectCardProps {
    id: string;
    title: string;
    location: string;
    image: string;
}

export default function ProjectCard({ title, location, image, id }: ProjectCardProps) {
    const router = useRouter();
    const handleProjectClick = () => {
        router.push(`/projects/${id}`);
    };
    return (
        <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-lg">
            <div className="relative overflow-hidden">
                <div
                    className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url("${image}")` }}
                />
            </div>
            <div className="flex flex-1 flex-col p-4">
                <div className="flex-1">
                    <p className="text-lg font-bold text-foreground">{title}</p>
                    <p className="text-sm text-text-muted">{location}</p>
                </div>
                <button
                onClick={handleProjectClick}
                 className="mt-4 flex w-full items-center justify-center rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-bold transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    View Project
                </button>
            </div>
        </div>
    );
}
