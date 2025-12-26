import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';

const LiquidOrb = () => {
    const sphereRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (sphereRef.current) {
            // Subtle rotation movement
            sphereRef.current.rotation.x = t * 0.1;
            sphereRef.current.rotation.y = t * 0.15;
        }
    });

    return (
        <Sphere ref={sphereRef} args={[1, 100, 100]} scale={2.4}>
            <MeshDistortMaterial
                color="#ffffff"
                attach="material"
                distort={0.5} // Strength of distortion
                speed={1.5} // Speed of distortion
                roughness={0.2}
                metalness={0.9}
                reflectivity={1}
                clearcoat={1}
                clearcoatRoughness={0.1}
            />
        </Sphere>
    );
};

export default LiquidOrb;
