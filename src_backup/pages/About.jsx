import React from 'react';
import { motion } from 'framer-motion';
import skillsData from '../data/skills.json';
import profileData from '../data/profile.json';

const About = () => {
    return (
        <div className="pt-20 px-6 max-w-7xl mx-auto h-full flex flex-col justify-center">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        About <span className="text-neon-primary">{profileData.name.split(' ')[0]}</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6 whitespace-pre-line">
                        {profileData.bio}
                    </p>

                    <div className="mt-6">
                        <h4 className="text-xl font-bold text-white mb-2">Education</h4>
                        {profileData.education.map((edu, index) => (
                            <div key={index} className="mb-2">
                                <p className="text-neon-primary font-bold">{edu.degree}</p>
                                <p className="text-sm text-gray-500">{edu.institution} | {edu.year}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative h-80 rounded-2xl overflow-hidden border border-white/10 bg-dark-card"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-neon-primary/20 to-purple-500/20" />
                    <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-mono text-center p-4">
                        {/* Replace with actual image in public folder */}
                        <div className="text-sm">
                            Add photo to public/profile.jpg<br />
                            and update img src
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="overflow-y-auto max-h-[40vh] pr-2 custom-scrollbar"
            >
                <h3 className="text-3xl font-bold mb-8 sticky top-0 bg-dark-bg py-2 z-10">Technical Arsenal</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    {Object.entries(skillsData).map(([category, skills]) => (
                        <div key={category} className="bg-dark-card/50 p-5 rounded-xl border border-white/5">
                            <h4 className="text-lg font-bold capitalize mb-4 text-neon-primary">{category}</h4>
                            <div className="flex flex-wrap gap-2">
                                {skills.map(skill => (
                                    <span key={skill} className="px-2 py-1 bg-white/5 rounded-full text-xs hover:bg-white/10 transition-colors cursor-default border border-white/5">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default About;
