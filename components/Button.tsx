"use client"

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

export default function Button({ children, className = "", onClick, type = "button" }: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`group relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 ${className}`}
        >
            {children}
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
        </button>
    );
}

interface Button2Props {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

export function Button2({ children, className = "", onClick, type = "button" }: Button2Props) {
    return (
        <div>
            <button
                type={type}
                onClick={onClick}
                className={`group relative inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-800 px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-neutral-400 hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-500 ${className}`}
            >
                {children}
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </button>
        </div>
    );
}