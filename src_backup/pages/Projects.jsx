import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import projectsData from '../data/projects.json';

const Projects = () => {
    return (
        <div className="pt-20 px-6 max-w-7xl mx-auto h-full flex flex-col justify-center overflow-hidden">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl md:text-6xl font-bold mb-12"
            >
                Selected <span className="text-neon-primary">Works</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
                {projectsData.map((project, index) => {
                    const hasLive = !!project.liveUrl;
                    const targetUrl = hasLive ? project.liveUrl : project.repoUrl;

                    return (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-dark-card border border-white/5 rounded-2xl overflow-hidden hover:border-neon-primary/50 transition-all duration-300 flex flex-col"
                        >
                            <div className="h-48 bg-gray-800/50 flex items-center justify-center overflow-hidden">
                                {/* Placeholder for image */}
                                <div className="text-gray-600 font-mono text-xs uppercase tracking-widest">
                                    {project.image || 'Project Preview'}
                                </div>
                                <div className="absolute inset-0 bg-neon-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold">{project.title}</h3>
                                    <div className="flex gap-3">
                                        {project.repoUrl && (
                                            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                                <Github size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="text-gray-400 mb-6 flex-1">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-neon-primary">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={targetUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${hasLive
                                        ? 'bg-neon-primary text-black hover:bg-white'
                                        : 'bg-white/10 text-white hover:bg-white/20'
                                        }`}
                                >
                                    {hasLive ? 'View Live Demo' : 'View Code on GitHub'}
                                    {hasLive ? <ExternalLink size={18} /> : <ArrowRight size={18} />}
                                </a>

                                {!hasLive && (
                                    <p className="text-center text-xs text-gray-500 mt-2">
                                        Live demo unavailable. Redirecting to repository.
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
