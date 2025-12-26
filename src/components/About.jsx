import React from 'react';
import { motion } from 'framer-motion';
import skillsData from '../data/skills.json';
import profileData from '../data/profile.json';

const About = () => {
    return (
        <div className="space-y-16">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
                {/* Image Column */}
                <div className="lg:col-span-4 relative group">
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden relative z-10 group">
                        <img
                            src="/profile.jpg"
                            alt={profileData.name}
                            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />

                        <div className="absolute bottom-6 left-6 text-white">
                            <p className="font-display text-xl">{profileData.name}</p>
                            <p className="text-sm opacity-70 tracking-widest uppercase">Full Stack Developer</p>
                        </div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-full h-full border border-white/10 rounded-2xl z-0" />
                    <div className="absolute -bottom-4 -left-4 w-full h-full bg-white/5 rounded-2xl z-0 backdrop-blur-sm" />
                </div>

                {/* Content Column */}
                <div className="lg:col-span-8 space-y-12">
                    <div>
                        <p className="text-2xl md:text-3xl text-gray-200 font-light leading-relaxed mb-8">
                            {profileData.bio}
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/5">
                            {profileData.education.map((edu, i) => (
                                <div key={i} className="col-span-2">
                                    <h4 className="text-white font-medium mb-1">{edu.degree}</h4>
                                    <p className="text-sm text-gray-500">{edu.institution}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Technical Expertise - Full Width */}
            <div className="pt-20" id="technical-expertise">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-display text-white mb-4">
                        Technical Expertise
                    </h2>
                    <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent mx-auto mb-4" />
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 md:px-0">
                    {Object.entries(skillsData).map(([category, skills]) => (
                        <div key={category}>
                            <h4 className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-4">{category}</h4>
                            <div className="flex flex-wrap gap-x-4 gap-y-2">
                                {skills.map(skill => (
                                    <span key={skill} className="text-gray-400 hover:text-white transition-colors text-sm cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
