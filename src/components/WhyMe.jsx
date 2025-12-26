import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Target, Zap, Globe, Shield, Code, Database, Brain, BarChart as Chart, Bot } from 'lucide-react';
import whyMeData from '../data/whyme.json';

const icons = {
    Sparkles, Target, Zap, Globe, Shield, Code, Database, Brain, Chart, Bot
};

const WhyMe = () => {
    const [selectedNiche, setSelectedNiche] = useState('general');
    const data = whyMeData[selectedNiche];

    const tabs = [
        { id: 'general', label: 'General' },
        { id: 'react', label: 'React / UI' },
        { id: 'mern', label: 'MERN Stack' },
        { id: 'ai', label: 'AI & Data' },
    ];

    return (
        <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden transition-all duration-500">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            {/* Tab Navigation */}
            <div className="relative z-20 flex flex-wrap gap-3 mb-12 overflow-x-auto pb-2 scrollbar-hide">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setSelectedNiche(tab.id)}
                        className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${selectedNiche === tab.id
                            ? 'bg-white text-black scale-105 shadow-lg'
                            : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedNiche}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 grid lg:grid-cols-2 gap-16 items-center"
                >
                    {/* Text Content */}
                    <div>
                        <h3 className="text-3xl md:text-4xl font-display text-white mb-6 leading-tight">
                            {data.title}
                        </h3>

                        <p className="text-xl text-gray-300 font-light leading-relaxed mb-8 whitespace-pre-line">
                            {data.text}
                        </p>

                        <div className="w-20 h-1 bg-gradient-to-r from-brand-accent to-brand-secondary rounded-full" />
                    </div>

                    {/* Cards */}
                    <div className="grid gap-6">
                        {data.points && data.points.map((point, index) => {
                            const IconComponent = icons[point.icon] || Target;
                            return (
                                <motion.div
                                    key={point.title}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white/5 hover:bg-white/10 p-6 rounded-2xl transition-colors border border-white/5 flex gap-5 items-start group"
                                >
                                    <div className="p-3 bg-brand-dark rounded-xl text-brand-accent shadow-inner group-hover:scale-110 transition-transform duration-300">
                                        <IconComponent size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-white mb-2">{point.title}</h4>
                                        <p className="text-gray-400 font-light text-sm">{point.desc}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default WhyMe;
