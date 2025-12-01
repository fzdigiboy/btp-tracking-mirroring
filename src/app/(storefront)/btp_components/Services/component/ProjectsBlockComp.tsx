"use client"
import { getServices } from "@/lib/server-actions/actions";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import StickyNav from "./StickyNav";

type Service = {
  id: string
  icon: string
  title: string
  description: string
  steps: {
    number: number
    title: string
    description: string
  }[]
  buttonText: string
  buttonHref: string
  image: string
  imagePosition: "left" | "right"
}
export default function ProjectsBlockComp({ title, isFullWidth, limit }: any) {

  const [serviceData, setServices] = useState<Service[]>([]);
const fetchServices = async () => {
  const data: any[] = await getServices({ limit });
  const formattedServices: Service[] = data.map((service: any) => ({
    id: service?.id,
    icon: service?.logo,
    title: service?.titre,
    description: service?.description,
    steps: service?.content?.map((step: any, index: number) => ({
      number: index + 1,
      title: step.title,
      description: step.description,
    })),
    buttonText: service?.button?.title,
    buttonHref: service?.button?.href,
    image: service?.image?.url,
    imagePosition: service?.imageRight ? 'right' : 'left',
  }));
  setServices(formattedServices);
};
  useEffect(() => {
    fetchServices();
  }, []);

    return (
      <div className={`pb-12 ${isFullWidth === 'No' ? 'custom_container' : ''}`}>
      <StickyNav  services={serviceData} />
        <div className="mx-auto px-14 flex flex-col gap-20">
            {serviceData.map((service) => (
                <ServiceCard key={service.id} {...service} />
            ))}
        </div>
      </div>
    );
  }