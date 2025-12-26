import React from 'react';
import { motion } from 'framer-motion';
import { useAdaptive } from '../context/AdaptiveContext';

const Navbar = () => {
    const { companyName } = useAdaptive();

    const links = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Journey', id: 'experience' },
        { name: 'Why Me', id: 'whyme' },
        { name: 'Projects', id: 'projects' },
        { name: 'Contact', id: 'contact' },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-dark-bg/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <button onClick={() => scrollToSection('home')} className="text-xl font-bold font-mono tracking-tighter">
                    ADAPTIVE<span className="text-neon-primary">.ID</span>
                </button>

                {companyName && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="hidden md:block px-3 py-1 rounded-full border border-neon-secondary/50 bg-neon-secondary/10 text-xs text-neon-secondary uppercase tracking-widest"
                    >
                        Reviewing for {companyName}
                    </motion.div>
                )}

                <div className="flex gap-8">
                    {links.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.id)}
                            className="text-sm font-medium transition-colors hover:text-neon-primary text-gray-400"
                        >
                            {link.name}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
