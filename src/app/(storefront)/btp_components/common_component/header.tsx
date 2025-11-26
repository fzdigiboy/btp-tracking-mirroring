"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 flex items-center justify-center whitespace-nowrap border-b border-solid border-border bg-background/80 backdrop-blur-sm">
            <div className="flex items-center justify-between w-full max-w-6xl px-4 py-3">
                <div className="flex items-center gap-3">
                    <div className="size-6 text-primary">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path
                                clipRule="evenodd"
                                d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                                fill="currentColor"
                                fillRule="evenodd"
                            />
                        </svg>
                    </div>
                    <h2 className="text-xl font-bold tracking-[-0.015em] text-foreground">
                        TogoBuild
                    </h2>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex flex-1 justify-end items-center gap-8">
                    <nav className="flex items-center gap-6">
                        <Link className="text-sm font-medium text-foreground hover:text-primary transition-colors" href="/Home">
                            Home
                        </Link>
                        <Link className="text-sm font-medium text-foreground hover:text-primary transition-colors" href="/About">
                            About Us
                        </Link>
                        <Link className="text-sm font-medium text-foreground hover:text-primary transition-colors" href="/Services">
                            Services
                        </Link>
                        <Link className="text-sm font-medium text-foreground hover:text-primary transition-colors" href="/Projects">
                            Projects
                        </Link>
                        <Link className="text-sm font-medium text-foreground hover:text-primary transition-colors" href="/Testimonials">
                            Testimonials
                        </Link>
                        <Link className="text-sm font-medium text-foreground hover:text-primary transition-colors" href="/Contact">
                            Contact
                        </Link>
                    </nav>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary text-white text-sm font-bold tracking-wide hover:bg-opacity-90 transition-colors">
                        <span className="truncate">Request a Quote</span>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 rounded-md hover:bg-card transition-colors"
                    >
                        <span className="text-2xl">☰</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
                    <div className="flex flex-col gap-4 p-4">
                        <Link className="text-sm font-medium hover:text-primary transition-colors" href="/Home">
                            Home
                        </Link>
                        <Link className="text-sm font-medium hover:text-primary transition-colors" href="/About">
                            About Us
                        </Link>
                        <Link className="text-sm font-medium hover:text-primary transition-colors" href="/Services">
                            Services
                        </Link>
                        <Link className="text-sm font-medium hover:text-primary transition-colors" href="/Projects">
                            Projects
                        </Link>
                        <Link className="text-sm font-medium hover:text-primary transition-colors" href="/Testimonials">
                            Testimonials
                        </Link>
                        <Link className="text-sm font-medium hover:text-primary transition-colors" href="/Contact">
                            Contact
                        </Link>
                        <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary text-white text-sm font-bold tracking-wide hover:bg-opacity-90 transition-colors">
                            <span className="truncate">Request a Quote</span>
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
