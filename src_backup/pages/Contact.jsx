import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-20 px-6 max-w-4xl mx-auto h-full flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-dark-card border border-neon-primary/20 rounded-3xl p-12 text-center relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-primary to-transparent" />

                <h2 className="text-4xl md:text-6xl font-bold mb-6">Let's Build Something <br /><span className="text-neon-primary">Future-Proof</span></h2>

                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                    Whether you have a specific project or just want to explore possibilities, I'm ready to adapt to your vision.
                </p>

                <a
                    href="mailto:contact@example.com"
                    className="inline-block px-12 py-4 bg-neon-primary text-black font-bold rounded-full hover:bg-white transition-colors text-lg mb-12"
                >
                    Initialize Contact
                </a>

                <div className="flex justify-center gap-8">
                    <a href="https://github.com/AbdullahMansurii" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                        <Github /> <span>AbdullahMansurii</span>
                    </a>
                    {/* <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                        <Linkedin /> <span>LinkedIn</span>
                    </a> */}
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
