"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, Center, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function CardModel(props: any) {
    const { scene } = useGLTF("/models/id-card.glb");
    const ref = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        // Slow auto-rotation
        if (ref.current) {
            ref.current.rotation.y += delta * 0.2;
        }
    });

    return (
        <group ref={ref} {...props} dispose={null}>
            <primitive object={scene} />
        </group>
    );
}

// Preload the model to avoid layout shifts
useGLTF.preload("/models/id-card.glb");

export default function ThreeDCard({ className }: { className?: string }) {
    return (
        <div className={`w-full h-full min-h-[400px] ${className || ""}`}>
            <Canvas
                camera={{ position: [0, 0, 4], fov: 45 }}
                dpr={[1, 2]}
                shadows
            >
                <ambientLight intensity={0.5} />
                <spotLight
                    position={[10, 10, 10]}
                    angle={0.15}
                    penumbra={1}
                    intensity={1}
                    castShadow
                />
                <Center>
                    <CardModel scale={1.5} />
                </Center>
                <Environment preset="city" />
                <OrbitControls enableZoom={false} autoRotate={false} />
            </Canvas>
        </div>
    );
}
