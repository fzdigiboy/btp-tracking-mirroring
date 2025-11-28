"use client";

import { getProjects, getServices } from "@/lib/server-actions/services";
import { useEffect, useState } from "react";

type ProjectType = {
  title: string;
  id: string;
};

type Service = {
  title: string;
  id: string;
};

export default function FiltersSidebar() {
  const [projectTypes, setProjectTypes] = useState<ProjectType[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  
  // États pour les sélections (string vide = aucune sélection)
  const [selectedProjectType, setSelectedProjectType] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>("");

  const fetchDatas = async () => {
    const Pdata = await getProjects({ limit: 50 });
    const Sdata = await getServices({ limit: 50 });

    const projectTypes: ProjectType[] = Pdata.map((project: any) => ({
      title: project?.titre,
      id: project?.handle,
    }));
    
    const services: Service[] = Sdata.map((service: any) => ({
      title: service?.titre,
      id: service?.id,
    }));
    
    setProjectTypes(projectTypes);
    setServices(services);
  };

  const handleProjectTypeChange = (id: string) => {
    // Si on clique sur le même, on le désélectionne
    setSelectedProjectType(selectedProjectType === id ? "" : id);
  };

  const handleServiceChange = (id: string) => {
    // Si on clique sur le même, on le désélectionne
    setSelectedService(selectedService === id ? "" : id);
  };

  const handleReset = () => {
    setSelectedProjectType("");
    setSelectedService("");
  };

  const handleApplyFilters = () => {
    console.log("Filtres appliqués:", {
      projectType: selectedProjectType,
      service: selectedService,
    });
    // Ajoutez ici votre logique de filtrage
    // Exemple: onFilterChange({ projectType: selectedProjectType, service: selectedService });
  };

  useEffect(() => {
    fetchDatas();
  }, []);

  return (
    <aside className="w-full lg:w-1/4 xl:w-1/5">
      <div className="sticky top-24 rounded-xl border border-border bg-card p-6">
        <h3 className="mb-6 text-lg font-bold text-foreground">Filters</h3>

        {/* Project Type Filter */}
        <div className="mb-6">
          <h4 className="mb-4 text-sm font-bold text-foreground">
            Project Type
            {selectedProjectType && (
              <span className="ml-2 text-xs text-primary">(1 selected)</span>
            )}
          </h4>
          <div className="flex flex-col gap-3">
            {projectTypes.map((projectType) => (
              <label
                key={projectType.id}
                className="flex items-center gap-3 cursor-pointer text-sm hover:bg-muted/50 p-2 rounded transition-colors"
              >
                <input
                  type="radio"
                  name="projectType"
                  value={projectType.id}
                  checked={selectedProjectType === projectType.id}
                  onChange={() => handleProjectTypeChange(projectType.id)}
                  className="h-5 w-5 border-border text-primary focus:ring-primary bg-background cursor-pointer"
                />
                <span className={`${
                  selectedProjectType === projectType.id 
                    ? "text-foreground font-medium" 
                    : "text-text-muted"
                }`}>
                  {projectType.title}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Service Filter */}
        <div className="mb-8">
          <h4 className="mb-4 text-sm font-bold text-foreground">
            Service
            {selectedService && (
              <span className="ml-2 text-xs text-primary">(1 selected)</span>
            )}
          </h4>
          <div className="flex flex-col gap-3">
            {services.map((service) => (
              <label
                key={service.id}
                className="flex items-center gap-3 cursor-pointer text-sm hover:bg-muted/50 p-2 rounded transition-colors"
              >
                <input
                  type="radio"
                  name="service"
                  value={service.id}
                  checked={selectedService === service.id}
                  onChange={() => handleServiceChange(service.id)}
                  className="h-5 w-5 border-border text-primary focus:ring-primary bg-background cursor-pointer"
                />
                <span className={`${
                  selectedService === service.id 
                    ? "text-foreground font-medium" 
                    : "text-text-muted"
                }`}>
                  {service.title}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Filter Actions */}
        <div className="flex flex-col gap-3">
          <button
            onClick={handleApplyFilters}
            disabled={!selectedProjectType && !selectedService}
            className="flex w-full items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Apply Filters
          </button>
          <button
            onClick={handleReset}
            disabled={!selectedProjectType && !selectedService}
            className="flex w-full items-center justify-center rounded-lg h-10 px-4 bg-transparent text-text-muted hover:bg-card transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Reset Filters
          </button>
        </div>

        {/* Active Filters Display */}
        {(selectedProjectType || selectedService) && (
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-xs font-medium text-foreground mb-2">Active Filters:</p>
            <div className="flex flex-wrap gap-2">
              {selectedProjectType && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                  {projectTypes.find(p => p.id === selectedProjectType)?.title}
                  <button
                    onClick={() => setSelectedProjectType("")}
                    className="hover:bg-primary/20 rounded-full p-0.5"
                  >
                    ✕
                  </button>
                </span>
              )}
              {selectedService && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                  {services.find(s => s.id === selectedService)?.title}
                  <button
                    onClick={() => setSelectedService("")}
                    className="hover:bg-primary/20 rounded-full p-0.5"
                  >
                    ✕
                  </button>
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}