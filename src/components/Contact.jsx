import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter, MapPin, Send, Phone } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        const subject = `Portfolio Contact from ${name}`;
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
        window.location.href = `mailto:abdullahmansuri1636@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-display text-white mb-6">Let's Talk.</h1>
                    <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
                        Whether you have a project in mind, a question about my work, or just want to connect—I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="glass-panel p-8 rounded-3xl border border-white/5">
                            <h3 className="text-2xl font-display text-white mb-6">Contact Details</h3>
                            <div className="space-y-6">
                                <a
                                    href="mailto:abdullahmansuri1636@gmail.com"
                                    className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                                >
                                    <div className="p-3 bg-white/5 rounded-full group-hover:bg-brand-accent/20 transition-colors">
                                        <Mail size={20} className="text-brand-accent" />
                                    </div>
                                    <span className="text-lg break-all">abdullahmansuri1636@gmail.com</span>
                                </a>

                                <a
                                    href="tel:+917201842497"
                                    className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                                >
                                    <div className="p-3 bg-white/5 rounded-full group-hover:bg-brand-accent/20 transition-colors">
                                        <Phone size={20} className="text-brand-accent" />
                                    </div>
                                    <span className="text-lg">+91 7201842497</span>
                                </a>

                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="p-3 bg-white/5 rounded-full">
                                        <MapPin size={20} className="text-brand-accent" />
                                    </div>
                                    <span className="text-lg">India</span>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-8 pt-8 border-t border-white/5">
                                <SocialLink href="https://github.com" icon={Github} />
                                <SocialLink href="https://linkedin.com" icon={Linkedin} />
                                <SocialLink href="https://twitter.com" icon={Twitter} />
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-3xl border border-white/5 space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    required
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project..."
                                    required
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                            >
                                <Send size={18} />
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

const SocialLink = ({ href, icon: Icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-white/5 rounded-full hover:bg-white text-gray-400 hover:text-black transition-all hover:-translate-y-1"
    >
        <Icon size={20} />
    </a>
);

export default Contact;
