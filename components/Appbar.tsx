"use client"

import { useState, useEffect } from 'react';
import { Link } from "react-scroll";
import { Menu, X, Linkedin } from "lucide-react";
import { XIcon } from './XIcon';
import { GlowingBorderButton } from './GlowingButton';

export const Appbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { to: "home", label: "Home", offset: -150 },
        { to: "about", label: "About", offset: -50 },
        { to: "projects", label: "Projects", offset: -50 },
        { to: "services", label: "Services", offset: -50 },
        { to: "contact", label: "Contact", offset: -50 },
    ];

    const socialLinks = [
        {
            href: "https://www.linkedin.com/in/kshitiz-prakash-srivastava-a9b797256/",
            icon: Linkedin,
            label: "LinkedIn"
        },
        {
            href: "https://x.com/KshitizSri07",
            icon: XIcon,
            label: "X (Twitter)"
        }
    ];

    return (
        <header className={`fixed w-full cursor-pointer z-50 transition-all duration-700 ${scrolled
            ? 'bg-gradient-to-b from-black/40 via-black/30 to-transparent backdrop-blur-2xl shadow-2xl shadow-cyan-500/10'
            : 'bg-gradient-to-b from-black/60 via-black/40 to-transparent backdrop-blur-xl'
            }`}>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

            <nav className="relative mx-auto w-[92%] max-w-[1400px] py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-3 px-3 py-1.5 bg-white/3 backdrop-blur-md rounded-full border border-white/5 hover:border-cyan-400/30 transition-all duration-300">
                            {socialLinks.map((social, idx) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 ${idx !== 0 ? 'border-l border-white/5 pl-3' : ''
                                        }`}
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                        <GlowingBorderButton
                            as="a"
                            //@ts-ignore
                            href="https://speckle-fine-06c.notion.site/Kshitiz-Srivastava-Full-Stack-Developer-Portfolio-272bb6fe4b2280fcb786dd38c7c63475?source=copy_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            duration={2}
                            clockwise={true}
                        >
                            Notionfolio
                        </GlowingBorderButton>
                    </div>

                    <ul className="hidden md:flex items-center justify-center gap-1 bg-white/3 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/5">
                        {menuItems.map((item) => (
                            <li key={item.to} className="relative group">
                                <Link
                                    to={item.to}
                                    spy={true}
                                    smooth={true}
                                    offset={item.offset}
                                    duration={1200}
                                    className="relative block px-5 py-2 text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium uppercase tracking-wider cursor-pointer rounded-full overflow-hidden"
                                >
                                    <span className="relative z-10">{item.label}</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full" />
                                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full blur-sm" />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="md:hidden flex justify-end">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white p-3 bg-white/5 backdrop-blur-md hover:bg-white/10 rounded-full border border-white/10 transition-all duration-300 hover:scale-110"
                        >
                            {isOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed inset-0 z-[60] transition-all duration-700 ${isOpen
                ? 'translate-x-0 opacity-100'
                : 'translate-x-full opacity-0 pointer-events-none'
                }`}>
                {/* Full opaque background - COMPLETELY SOLID */}
                <div className="absolute inset-0 bg-gray-900" />

                <div className="relative flex justify-end p-6 z-10">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-white p-3 bg-white/10 hover:bg-white/20 rounded-full border border-white/10 transition-all duration-300 hover:rotate-90"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="relative flex flex-col items-center justify-center gap-6 h-[70vh] z-10">
                    {menuItems.map((item, idx) => (
                        <li
                            key={item.to}
                            className="relative group w-64 list-none"
                            style={{
                                animation: isOpen ? `slideIn 0.5s ease-out ${idx * 0.1}s both` : 'none'
                            }}
                        >
                            <Link
                                to={item.to}
                                spy={true}
                                smooth={true}
                                offset={item.offset}
                                duration={1200}
                                onClick={() => setIsOpen(false)}
                                className="relative block text-center px-8 py-4 text-white hover:text-cyan-400 transition-all duration-300 text-2xl font-bold uppercase tracking-wider bg-white/10 rounded-2xl border border-white/10 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105 overflow-hidden"
                            >
                                <span className="relative z-10">{item.label}</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </Link>
                        </li>
                    ))}

                    <div className="flex items-center gap-4 mt-8 px-6 py-3 bg-white/10 rounded-full border border-white/10"
                        style={{
                            animation: isOpen ? `slideIn 0.5s ease-out ${menuItems.length * 0.1}s both` : 'none'
                        }}
                    >
                        {socialLinks.map((social, idx) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 ${idx !== 0 ? 'border-l border-white/20 pl-4' : ''
                                    }`}
                                aria-label={social.label}
                            >
                                <social.icon className="w-6 h-6" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateX(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </header>
    );
};

export default Appbar;