"use client";

import { useEffect, useState } from "react";

// export default function FilterChips() {
    // const [activeFilter, setActiveFilter] = useState("all");

    // const filters = [
    //     { id: "all", label: "All Projects" },
    //     { id: "residential", label: "Residential" },
    //     { id: "commercial", label: "Commercial" },
    //     { id: "industrial", label: "Industrial" }
    // ];
export default function FilterChips({ activeFilter, setActiveFilter }: any) {
  const [filters, setFilters] = useState<string[]>([]);

    useEffect(() => {
    fetch("/api/project-types/all")
      .then(res => res.json())
      .then(data => setFilters(["All Projects", ...data])); // "all" au début
  }, []);

    return (
        <div className="flex flex-wrap gap-3 items-center justify-center">
            {filters.map((filter) => (
                <button
                    // key={filter.id}
                    key={filter}
                    // onClick={() => setActiveFilter(filter.id)}
                    onClick={() => setActiveFilter(filter)}
                    // className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 transition-colors ${activeFilter === filter.id
                    className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 transition-colors ${activeFilter === filter

                            ? "bg-primary text-white"
                            : "bg-card text-foreground hover:bg-card/80"
                        }`}
                >
                    {/* <p className="text-sm font-medium leading-normal">{filter.label}</p> */}
                    <p className="text-sm font-medium leading-normal">{filter}</p>
                </button>
            ))}
        </div>
    );
}
