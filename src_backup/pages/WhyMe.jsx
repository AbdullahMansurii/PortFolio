import React from 'react';
import { useAdaptive } from '../context/AdaptiveContext';
import whymeData from '../data/whyme.json';
import { motion } from 'framer-motion';
import { Code, Zap, Users, Globe, Rocket, Scale } from 'lucide-react';

const iconMap = {
    Code, Zap, Users, Globe, Rocket, Scale
};

const WhyMe = () => {
    const { intent } = useAdaptive();

    // Fallback to default if intent not found in data
    const data = whymeData.companies[intent] || whymeData.default;

    return (
        <div className="pt-20 px-6 max-w-7xl mx-auto h-full flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-20"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    {data.title}
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                    {data.subtitle}
                </p>
                {data.text && (
                    <p className="text-gray-500 max-w-3xl mx-auto whitespace-pre-line leading-relaxed">
                        {data.text}
                    </p>
                )}
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
                {data.points.map((point, index) => {
                    const Icon = iconMap[point.icon] || Code; // Default icon
                    return (
                        <motion.div
                            key={point.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="p-8 rounded-2xl bg-dark-card border border-white/5 hover:border-neon-primary/50 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-neon-primary/10 flex items-center justify-center mb-6 group-hover:bg-neon-primary/20 transition-colors">
                                <Icon className="text-neon-primary w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {point.desc}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default WhyMe;
