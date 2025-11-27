"use client";

import { useState } from "react";

export default function FiltersSidebar() {
    const [searchTerm, setSearchTerm] = useState("");
    const [projectTypes, setProjectTypes] = useState({
        villa: true,
        building: false,
        renovation: false
    });
    const [services, setServices] = useState({
        architecture: true,
        construction: false,
        turnkey: false
    });

    const handleReset = () => {
        setSearchTerm("");
        setProjectTypes({ villa: false, building: false, renovation: false });
        setServices({ architecture: false, construction: false, turnkey: false });
    };

    return (
        <aside className="w-full lg:w-1/4 xl:w-1/5">
            <div className="sticky top-24 rounded-xl border border-border bg-card p-6">
                <h3 className="mb-6 text-lg font-bold text-foreground">Filters</h3>

                {/* Search Bar */}
                <div className="mb-6">
                    <div className="flex w-full items-center rounded-lg h-12 bg-background border border-border focus-within:ring-2 focus-within:ring-primary px-4 gap-2">
                        <span className="text-text-muted text-base">🔍</span>
                        <input
                            className="flex-1 bg-transparent text-foreground focus:outline-none placeholder:text-text-muted text-sm"
                            placeholder="Search by keyword..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Project Type Filter */}
                <div className="mb-6">
                    <h4 className="mb-4 text-sm font-bold text-foreground">Project Type</h4>
                    <div className="flex flex-col gap-3">
                        <label className="flex items-center gap-3 cursor-pointer text-sm">
                            <input
                                checked={projectTypes.villa}
                                onChange={(e) => setProjectTypes({ ...projectTypes, villa: e.target.checked })}
                                className="h-5 w-5 rounded border-border text-primary focus:ring-primary bg-background checked:bg-primary"
                                type="checkbox"
                            />
                            <span className="text-text-muted">Villa</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer text-sm">
                            <input
                                checked={projectTypes.building}
                                onChange={(e) => setProjectTypes({ ...projectTypes, building: e.target.checked })}
                                className="h-5 w-5 rounded border-border text-primary focus:ring-primary bg-background checked:bg-primary"
                                type="checkbox"
                            />
                            <span className="text-text-muted">Building</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer text-sm">
                            <input
                                checked={projectTypes.renovation}
                                onChange={(e) => setProjectTypes({ ...projectTypes, renovation: e.target.checked })}
                                className="h-5 w-5 rounded border-border text-primary focus:ring-primary bg-background checked:bg-primary"
                                type="checkbox"
                            />
                            <span className="text-text-muted">Renovation</span>
                        </label>
                    </div>
                </div>

                {/* Service Filter */}
                <div className="mb-8">
                    <h4 className="mb-4 text-sm font-bold text-foreground">Service</h4>
                    <div className="flex flex-col gap-3">
                        <label className="flex items-center gap-3 cursor-pointer text-sm">
                            <input
                                checked={services.architecture}
                                onChange={(e) => setServices({ ...services, architecture: e.target.checked })}
                                className="h-5 w-5 rounded border-border text-primary focus:ring-primary bg-background checked:bg-primary"
                                type="checkbox"
                            />
                            <span className="text-text-muted">Architecture</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer text-sm">
                            <input
                                checked={services.construction}
                                onChange={(e) => setServices({ ...services, construction: e.target.checked })}
                                className="h-5 w-5 rounded border-border text-primary focus:ring-primary bg-background checked:bg-primary"
                                type="checkbox"
                            />
                            <span className="text-text-muted">Construction</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer text-sm">
                            <input
                                checked={services.turnkey}
                                onChange={(e) => setServices({ ...services, turnkey: e.target.checked })}
                                className="h-5 w-5 rounded border-border text-primary focus:ring-primary bg-background checked:bg-primary"
                                type="checkbox"
                            />
                            <span className="text-text-muted">Turnkey</span>
                        </label>
                    </div>
                </div>

                {/* Filter Actions */}
                <div className="flex flex-col gap-3">
                    <button className="flex w-full items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-opacity-90 transition-opacity">
                        Apply Filters
                    </button>
                    <button
                        onClick={handleReset}
                        className="flex w-full items-center justify-center rounded-lg h-10 px-4 bg-transparent text-text-muted hover:bg-card transition-colors text-sm font-medium"
                    >
                        Reset Filters
                    </button>
                </div>
            </div>
        </aside>
    );
}
