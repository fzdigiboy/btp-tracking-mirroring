"use client";

import { useState } from "react";

export default function FilterChips() {
    const [activeFilter, setActiveFilter] = useState("all");

    const filters = [
        { id: "all", label: "All Projects" },
        { id: "residential", label: "Residential" },
        { id: "commercial", label: "Commercial" },
        { id: "industrial", label: "Industrial" }
    ];

    return (
        <div className="flex flex-wrap gap-3 items-center justify-center">
            {filters.map((filter) => (
                <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 transition-colors ${activeFilter === filter.id
                            ? "bg-primary text-white"
                            : "bg-card text-foreground hover:bg-card/80"
                        }`}
                >
                    <p className="text-sm font-medium leading-normal">{filter.label}</p>
                </button>
            ))}
        </div>
    );
}
