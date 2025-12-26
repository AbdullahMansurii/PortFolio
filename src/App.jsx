import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import { AdaptiveProvider } from './context/AdaptiveContext';

function App() {
    const { pathname } = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <AdaptiveProvider>
            <div className="bg-brand-dark min-h-screen text-brand-light font-sans selection:bg-brand-accent selection:text-white">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </AdaptiveProvider>
    );
}

export default App;
