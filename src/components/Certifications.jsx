import React from 'react';
import { motion } from 'framer-motion';
import { Award, ArrowUpRight } from 'lucide-react';
import profileData from '../data/profile.json';

const Certifications = () => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profileData.certifications.map((cert, index) => (
                <motion.a
                    key={index}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="block p-8 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all rounded-2xl group"
                >
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-brand-dark rounded-full text-white group-hover:bg-brand-accent transition-colors">
                            <Award size={24} />
                        </div>
                        <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors" size={20} />
                    </div>

                    <h3 className="text-xl text-white font-display mb-2 group-hover:translate-x-1 transition-transform">{cert.name}</h3>
                    <p className="text-gray-500 text-sm">{cert.issuer}</p>
                </motion.a>
            ))}
        </div>
    );
};

export default Certifications;
