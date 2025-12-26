import React, { useEffect } from 'react';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Certifications from './Certifications';
import WhyMe from './WhyMe';
import { useLocation, Link } from 'react-router-dom';

const SectionHeader = ({ title, subtitle }) => (
    <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-display text-white mb-4">
            {title}
        </h2>
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent mx-auto mb-4" />
        {subtitle && <p className="text-gray-400 font-light">{subtitle}</p>}
    </div>
);

const Home = () => {
    const location = useLocation();

    // Scroll to section if triggered from navigation
    useEffect(() => {
        if (location.state?.scrollTo) {
            const section = document.getElementById(location.state.scrollTo);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
            // Clear state to avoid scrolling on refresh? Optional.
        }
    }, [location]);

    return (
        <main>
            <Hero />

            <div className="max-w-7xl mx-auto px-6 py-32 space-y-40">
                <section id="whyme">
                    <SectionHeader title="What Sets Me Apart" subtitle="Systems over scripts. Execution over noise." />
                    <WhyMe />
                </section>

                <section id="projects">
                    <SectionHeader title="My Projects" subtitle="A curation of digital experiences." />
                    <Projects />
                </section>

                <section id="experience">
                    <SectionHeader title="Experience" subtitle="My professional journey." />
                    <Experience />
                </section>

                <section id="about">
                    <SectionHeader title="About" subtitle="Behind the code." />
                    <About />
                </section>

                <section id="certifications">
                    <SectionHeader title="Recognition" subtitle="Credentials and achievements." />
                    <Certifications />
                </section>
            </div>

            <footer id="contact" className="py-20 border-t border-white/5 text-center">
                <h2 className="text-2xl font-display text-white mb-8">Ready to create something extraordinary?</h2>
                <Link
                    to="/contact"
                    className="inline-block px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors"
                >
                    Get in Touch
                </Link>
                <p className="mt-12 text-sm text-gray-500">
                    © {new Date().getFullYear()} Abdullah Mansuri. All rights reserved.
                </p>
            </footer>
        </main>
    );
};

export default Home;
