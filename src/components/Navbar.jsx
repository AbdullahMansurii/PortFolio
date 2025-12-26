import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setIsOpen(false);
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: id } });
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleConnect = () => {
        setIsOpen(false);
        navigate('/contact');
    };

    const navItems = [
        { name: 'Home', id: 'hero' },
        { name: 'Why Me', id: 'whyme' },
        { name: 'Projects', id: 'projects' },
        { name: 'Experience', id: 'experience' },
        { name: 'About', id: 'about' },
        { name: 'Technical Expertise', id: 'technical-expertise' },
        { name: 'Recognition', id: 'certifications' },
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <button
                        onClick={() => scrollToSection('hero')}
                        className="text-2xl font-display font-medium tracking-tight text-white mix-blend-difference relative z-50"
                    >
                        AM.
                    </button>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={handleConnect}
                            className={`hidden md:block px-5 py-2 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors relative z-50`}
                        >
                            Connect
                        </button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative z-50 p-2 text-white hover:text-brand-accent transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center"
                    >
                        <div className="flex flex-col gap-6 text-center">
                            {navItems.map((item, index) => (
                                <motion.button
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 + 0.1 }}
                                    onClick={() => scrollToSection(item.id)}
                                    className="text-3xl md:text-5xl font-display text-white hover:text-brand-accent transition-colors tracking-tight"
                                >
                                    {item.name}
                                </motion.button>
                            ))}
                            {/* Connect link in mobile menu as well */}
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                onClick={handleConnect}
                                className="text-3xl md:text-5xl font-display text-brand-accent mt-4"
                            >
                                Contact Me
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
