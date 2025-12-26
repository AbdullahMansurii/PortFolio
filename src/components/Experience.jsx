import React from 'react';
import { motion } from 'framer-motion';
import experienceData from '../data/experience.json';

const Experience = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            {experienceData.map((exp, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                >
                    <div className="grid md:grid-cols-12 gap-4 md:gap-12 items-start py-8 border-b border-white/5 group-last:border-none">
                        <div className="md:col-span-3">
                            <div className="text-gray-500 font-light text-sm mb-4">
                                {exp.period}
                            </div>
                            {exp.logo && (
                                <img
                                    src={exp.logo}
                                    alt={exp.company}
                                    className="w-24 h-auto object-contain bg-white rounded-lg p-3 opacity-90 group-hover:opacity-100 transition-opacity"
                                />
                            )}
                        </div>

                        <div className="md:col-span-9 space-y-4">
                            <div className="flex justify-between items-baseline">
                                <h3 className="text-2xl text-white font-display group-hover:text-brand-accent transition-colors">
                                    {exp.role}
                                </h3>
                                <span className="text-gray-400 font-medium">{exp.company}</span>
                            </div>

                            <p className="text-lg text-gray-400 font-light leading-relaxed">
                                {exp.desc}
                            </p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Experience;
