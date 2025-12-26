import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AdaptiveProvider } from './context/AdaptiveContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import WhyMe from './pages/WhyMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import Experience from './pages/Experience';

const Section = ({ id, children }) => (
  <section id={id} className="min-h-screen w-full snap-start flex flex-col justify-center relative">
    {children}
  </section>
);

const App = () => {
  return (
    <Router>
      <AdaptiveProvider>
        <div className="h-screen w-full bg-dark-bg text-gray-200 font-sans selection:bg-neon-primary/30 overflow-y-scroll snap-y snap-mandatory scroll-smooth">
          <Navbar />

          <Section id="home">
            <Home />
          </Section>

          <Section id="about">
            <About />
          </Section>

          <Section id="experience">
            <Experience />
          </Section>

          <Section id="whyme">
            <WhyMe />
          </Section>

          <Section id="projects">
            <Projects />
          </Section>

          <Section id="contact">
            <Contact />
          </Section>
        </div>
      </AdaptiveProvider>
    </Router>
  );
};

export default App;
