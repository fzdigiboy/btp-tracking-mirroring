import TestimonialCard from "./TestimonialCard";
import { getPayloadClient } from "@/lib/payload";

export default async function TestimonialsSectionServer({
  title,
  isFullWidth,
}: {
  title: string;
  isFullWidth: string;
}) {
  const payload = await getPayloadClient();

  const testimonies = await payload.find({
    collection: "testimonies",
    depth: 2,
    limit: 20,
  });

  return (
    <section className={isFullWidth === "No" ? "custom_container" : ""}>
      <h2 className="text-2xl font-bold mb-6">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonies?.docs?.map((t: any, index: number) => (
          <TestimonialCard
            key={index}
            name={t.name}
            country={t.country}
            project={typeof t.project === "object" ? t.project.title : ""}
            message={t.content}
          />
        ))}
      </div>
    </section>
  );
}
