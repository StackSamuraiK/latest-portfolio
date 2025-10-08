"use client"

import { useState, useEffect } from 'react';
import { Link } from "react-scroll";
import { Menu, X, Linkedin } from "lucide-react";
import { XIcon } from './XIcon';

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
        { to: "contact", label: "Contact", offset: -50 }
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
        <header className={`fixed w-full cursor-pointer z-50 transition-all duration-700 ${
            scrolled 
                ? 'bg-gradient-to-b from-black/40 via-black/30 to-transparent backdrop-blur-2xl shadow-2xl shadow-cyan-500/10' 
                : 'bg-gradient-to-b from-black/60 via-black/40 to-transparent backdrop-blur-xl'
        }`}>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />
            
            <nav className="relative mx-auto w-[92%] max-w-[1400px] py-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                            {socialLinks.map((social, idx) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 ${
                                        idx !== 0 ? 'border-l border-white/10 pl-3' : ''
                                    }`}
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                        <a
                            href="https://drive.google.com/file/d/1kH4MzEKItqlLJCOQQREV_kPGWOQ_4buK/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative px-6 py-2.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white text-sm font-semibold rounded-full hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-500 overflow-hidden group"
                            style={{ backgroundSize: '200% 100%' }}
                        >
                            <span className="relative z-10">Resume</span>
                            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </a>
                    </div>

                    <ul className="hidden md:flex items-center justify-center gap-1 bg-white/5 backdrop-blur-md px-3 py-2 rounded-full border border-white/10">
                        {menuItems.map((item, idx) => (
                            <li key={item.to} className="relative group">
                                <Link
                                    to={item.to}
                                    spy={true}
                                    smooth={true}
                                    offset={item.offset}
                                    duration={500}
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

            <div className={`md:hidden fixed inset-0 bg-gradient-to-br from-black via-zinc-900 to-black backdrop-blur-3xl transition-all duration-700 ${
                isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 pointer-events-none" />
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
                
                <div className="relative flex justify-end p-6">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-white p-3 bg-white/5 backdrop-blur-md hover:bg-white/10 rounded-full border border-white/10 transition-all duration-300 hover:rotate-90"
                    >
                        <X size={24} />
                    </button>
                </div>
                
                <ul className="relative flex flex-col items-center justify-center gap-6 h-[70vh]">
                    {menuItems.map((item, idx) => (
                        <li 
                            key={item.to} 
                            className="relative group w-64"
                            style={{ 
                                animation: isOpen ? `slideIn 0.5s ease-out ${idx * 0.1}s both` : 'none'
                            }}
                        >
                            <Link
                                to={item.to}
                                spy={true}
                                smooth={true}
                                offset={item.offset}
                                duration={500}
                                onClick={() => setIsOpen(false)}
                                className="relative block text-center px-8 py-4 text-white hover:text-cyan-400 transition-all duration-300 text-2xl font-bold uppercase tracking-wider bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105 overflow-hidden"
                            >
                                <span className="relative z-10">{item.label}</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </Link>
                        </li>
                    ))}
                    
                    <div className="flex items-center gap-4 mt-8 px-6 py-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10"
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
                                className={`text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 ${
                                    idx !== 0 ? 'border-l border-white/20 pl-4' : ''
                                }`}
                                aria-label={social.label}
                            >
                                <social.icon className="w-6 h-6" />
                            </a>
                        ))}
                        <a
                            href="https://drive.google.com/file/d/1OnSFxHhghZMecFb5z5xfiMhZY75sVy_A/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-full hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
                        >
                            Resume
                        </a>
                    </div>
                </ul>
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