import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-card border-t border-border">
            <div className="max-w-6xl mx-auto py-12 px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
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
                            <h2 className="text-xl font-bold tracking-[-0.015em]">TogoBuild</h2>
                        </div>
                        <p className="text-text-muted">
                            Building dreams in Togo for the global diaspora. Your trusted partner for seamless, remote construction projects.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link className="text-text-muted hover:text-primary transition-colors" href="/Services">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link className="text-text-muted hover:text-primary transition-colors" href="/Projects">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link className="text-text-muted hover:text-primary transition-colors" href="/About">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-foreground mb-4">Contact</h3>
                        <ul className="space-y-2 text-text-muted">
                            <li className="flex items-start gap-2">
                                <span className="text-lg mt-1">📍</span>
                                <span>123 Rue de la Paix, Lomé, Togo</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-lg mt-1">📞</span>
                                <span>+228 90 00 00 00</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-lg mt-1">✉️</span>
                                <span>contact@togobuild.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-border text-center text-sm text-text-muted">
                    <p>© 2024 TogoBuild. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
