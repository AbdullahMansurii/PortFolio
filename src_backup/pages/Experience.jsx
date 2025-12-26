import React from 'react';
import { motion } from 'framer-motion';
import expData from '../data/experience.json';

const Experience = () => {
    return (
        <div className="pt-20 px-6 max-w-4xl mx-auto h-full flex flex-col justify-center">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold mb-12 text-center"
            >
                The <span className="text-neon-primary">Journey</span>
            </motion.h2>

            <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-12">
                {expData.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-8 md:pl-12"
                    >
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-neon-primary shadow-[0_0_8px_rgba(0,243,255,0.8)]" />

                        <div className="bg-dark-card p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                            <span className="text-neon-primary font-mono text-sm mb-2 block">{item.period}</span>
                            <h3 className="text-2xl font-bold mb-1">{item.role}</h3>
                            <h4 className="text-xl text-gray-400 mb-4">{item.company}</h4>
                            <p className="text-gray-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
