import React from "react";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import Link from "next/link";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { faBehance } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Custom TikTok Icon since it's not in the default Lucide library
const TikTokIcon = ({ className }: { className?: string }) => (
    <svg
        role="img"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31a8.776 8.776 0 01-1.43-1.04v7.37c-.15 4.1-3.41 7.15-7.43 7.54-1.63.15-3.37-.17-4.73-1.16-1.54-1.1-2.4-2.93-2.35-4.83.13-2.92 2.38-5.74 5.37-6.04.4-.04.81-.05 1.21-.02v4.03c-.45-.04-1.24.04-1.58.33-.91.73-.85 2.13-.19 2.92.54.67 1.5 1 2.37.75 1.1-.3 1.95-1.31 1.95-2.48l-.01-14.07c0-.05.02-.1-.01-.15z" />
    </svg>
);

const socialLinks = [
    { name: "TikTok", href: "#", icon: TikTokIcon },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "YouTube", href: "#", icon: Youtube },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    {
        name: "Behance",
        href: "#",
        icon: (props: any) => <FontAwesomeIcon icon={faBehance} {...props} />,
    },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-background border-t border-white/10 py-16 px-6">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
                {/* Logo */}
                <Link href="/" className="relative group">
                    <span className="text-4xl font-black tracking-tighter text-white font-artistic">
                        DBH<span className="text-primary">.</span>
                    </span>
                    <span className="absolute -bottom-1 left-0 w-0 h-1 bg-linear-to-r from-primary to-secondary transition-all group-hover:w-full duration-300" />
                </Link>

                {/* Social Links */}
                <div className="flex items-center gap-6">
                    {socialLinks.map((social) => (
                        <Link
                            key={social.name}
                            href={social.href}
                            className="text-primary hover:text-white transition-all duration-300 transform hover:scale-110"
                            aria-label={social.name}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <social.icon className="w-6 h-6" />
                        </Link>
                    ))}
                </div>

                {/* Brand Text & Year */}
                <div className="text-center space-y-4">
                    <p className="text-primary text-sm font-medium tracking-wide">
                        &copy; {currentYear} DBH Agency. All rights reserved.
                    </p>

                    <Dialog>
                        <DialogTrigger className="inline-block text-xs uppercase tracking-[0.2em] text-primary/80 hover:text-white transition-colors duration-300 cursor-pointer">
                            Privacy Policy
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-background border-white/10 text-white scrollbar-hide">
                            <DialogHeader>
                                <DialogTitle className="text-2xl font-bold text-primary mb-4 font-artistic">
                                    Privacy Policy
                                </DialogTitle>
                            </DialogHeader>
                            <div className="space-y-6 text-sm text-white/80 leading-relaxed">
                                <p>
                                    <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                                </p>
                                <p>
                                    This Privacy Policy describes how <strong>DBH Agency</strong> ("we",
                                    "our", or "us") collects, uses, discloses, and protects
                                    personal information when you visit our website, use our
                                    services, or otherwise interact with us.
                                </p>
                                <p>
                                    We are committed to protecting your privacy and ensuring that
                                    your personal data is handled in a safe and responsible
                                    manner, in accordance with applicable data protection laws.
                                </p>

                                <hr className="border-white/10" />

                                <section>
                                    <h3 className="text-lg font-semibold text-primary mb-3">
                                        1. Information We Collect
                                    </h3>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-medium text-white mb-2">a. Personal Information</h4>
                                            <ul className="list-disc pl-5 space-y-1">
                                                <li>Name</li>
                                                <li>Email address</li>
                                                <li>Phone number</li>
                                                <li>Company name</li>
                                                <li>Job title</li>
                                                <li>Any other information you voluntarily provide</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-white mb-2">b. Technical & Usage Information</h4>
                                            <ul className="list-disc pl-5 space-y-1">
                                                <li>IP address</li>
                                                <li>Browser type and version</li>
                                                <li>Device information</li>
                                                <li>Operating system</li>
                                                <li>Pages visited and referring URLs</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                <hr className="border-white/10" />

                                <section>
                                    <h3 className="text-lg font-semibold text-primary mb-3">
                                        2. How We Use Your Information
                                    </h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>To respond to inquiries and provide services</li>
                                        <li>To manage client relationships</li>
                                        <li>To improve our website and user experience</li>
                                        <li>To send marketing communications (where permitted)</li>
                                        <li>To analyze performance and compliance</li>
                                    </ul>
                                </section>

                                <hr className="border-white/10" />

                                <section>
                                    <h3 className="text-lg font-semibold text-primary mb-3">
                                        3. Data Security
                                    </h3>
                                    <p>
                                        We implement appropriate technical and organizational
                                        measures to protect your personal data against unauthorized
                                        access, loss, misuse, or disclosure.
                                    </p>
                                </section>

                                <hr className="border-white/10" />

                                <section>
                                    <h3 className="text-lg font-semibold text-primary mb-3">
                                        4. Contact Us
                                    </h3>
                                    <div className="space-y-1">
                                        <p><strong>DBH Agency</strong></p>
                                        <p>Email: contact@dbh-agency.com</p>
                                        <p>Phone: +1 234 567 890</p>
                                        <p>Address: [Business Address]</p>
                                    </div>
                                </section>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </footer>
    );
}