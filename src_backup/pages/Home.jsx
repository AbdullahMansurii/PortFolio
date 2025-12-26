import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { gsap } from 'gsap';
import { useAdaptive } from '../context/AdaptiveContext';

const Hero3D = () => {
    return (
        <Canvas className="absolute inset-0 z-0">
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#00f3ff" />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            <mesh>
                <icosahedronGeometry args={[2, 1]} />
                <meshStandardMaterial wireframe color="#00f3ff" visible={true} />
            </mesh>
        </Canvas>
    );
};

const Home = () => {
    const { intent, isTargeted, companyName } = useAdaptive();
    const titleRef = useRef(null);

    useEffect(() => {
        // GSAP Entry Animation
        gsap.fromTo(titleRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, ease: 'power4.out', delay: 0.2 }
        );
    }, []);

    return (
        <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-dark-bg z-0 pointer-events-none" />

            {/* 3D Scene */}
            <div className="absolute inset-0 z-0">
                <Hero3D />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                    <span className="block text-gray-400 text-lg md:text-xl font-mono mb-4 uppercase tracking-[0.2em]">
                        {isTargeted ? `Hello ${companyName}` : 'Welcome to my Portfolio'}
                    </span>
                    Thinking inside the <span className="text-neon-primary neon-text">Box</span><br />
                    to rebuild it.
                </h1>
                <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
                    I am a Full Stack Developer specializing in building adaptive, high-performance digital experiences.
                </p>
            </div>
        </div>
    );
};

export default Home;
