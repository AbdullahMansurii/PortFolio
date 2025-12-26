import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import projectsData from '../data/projects.json';

const Projects = () => {
    return (
        <div className="grid grid-cols-1 gap-20">
            {projectsData.map((project, index) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="group relative grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* Project Visual */}
                    <div className={`aspect-video rounded-2xl overflow-hidden relative order-1 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                        <div className="absolute inset-0 bg-brand-accent/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                        {project.image ? (
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                        ) : (
                            <div className="w-full h-full bg-glass-panel flex items-center justify-center">
                                <span className="text-white/20 text-4xl font-display italic">{project.title}</span>
                            </div>
                        )}
                    </div>

                    {/* Project Details */}
                    <div className={`order-2 ${index % 2 === 1 ? 'md:order-1 md:text-right' : ''}`}>
                        <div className={`flex items-center gap-3 mb-4 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                            <span className="text-brand-accent text-sm font-bold tracking-widest uppercase">
                                {project.featured ? 'Featured Project' : 'Selected Work'}
                            </span>
                            <div className="w-12 h-[1px] bg-white/20" />
                        </div>

                        <h3 className="text-4xl font-display text-white mb-4 group-hover:text-brand-accent transition-colors">
                            {project.title}
                        </h3>

                        <p className="text-lg text-gray-400 font-light leading-relaxed mb-6">
                            {project.desc}
                        </p>

                        <div className={`flex flex-wrap gap-2 mb-8 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                            {project.tech.map(t => (
                                <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-sm text-gray-300">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className={`flex gap-6 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                            {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-brand-accent transition-colors border-b border-white/20 pb-1 hover:border-brand-accent">
                                    <span>Visit Site</span>
                                    <ArrowUpRight size={18} />
                                </a>
                            )}
                            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-white/20 pb-1">
                                <span>Code</span>
                                <Github size={18} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Projects;
