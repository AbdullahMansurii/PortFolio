import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import LiquidOrb from './LiquidOrb';
import { motion } from 'framer-motion';
import profileData from '../data/profile.json';

const Hero = () => {
    return (
        <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-brand-dark">

            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                    <Suspense fallback={null}>
                        <LiquidOrb />
                        <Environment preset="night" />
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
                        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
                    </Suspense>
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
                </Canvas>
            </div>

            {/* Overlaid Content */}
            <div className="relative z-10 text-center px-4 mix-blend-normal">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h2 className="text-sm md:text-base uppercase tracking-[0.3em] text-gray-400 mb-6 font-sans">
                        Engineering with Intent
                    </h2>
                    <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-medium text-white mb-6 tracking-tighter leading-none">
                        {profileData.name.split(' ')[0]}<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">
                            {profileData.name.split(' ')[1]}
                        </span>
                    </h1>

                    <p className="max-w-xl mx-auto text-lg text-gray-300 font-light leading-relaxed mb-10">
                        {profileData.tagline}
                    </p>

                    <div className="flex justify-center gap-6">
                        {[
                            { label: 'GitHub', url: profileData.contact.github },
                            { label: 'LinkedIn', url: profileData.contact.linkedin },
                            { label: 'Instagram', url: profileData.contact.instagram }
                        ].filter(link => link.url).map(link => (
                            <a
                                key={link.label}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm uppercase tracking-widest text-gray-500 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
                <span className="text-[10px] uppercase tracking-widest text-white/30">Scroll</span>
            </motion.div>
        </section>
    );
};

export default Hero;
