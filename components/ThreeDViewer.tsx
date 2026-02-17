'use client'

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stage, OrbitControls, useGLTF } from '@react-three/drei'

function Model() {
    const { scene } = useGLTF('/models/id-card.glb')
    return <primitive object={scene} />
}

export function ThreeDViewer() {
    return (
        <div className="relative w-full h-[400px] md:h-[600px] bg-gray-900 rounded-xl overflow-hidden">
            <Canvas className="w-full h-full" shadows dpr={[1, 2]} camera={{ fov: 50 }}>
                <Suspense fallback={null}>
                    <Stage environment="city" intensity={0.6}>
                        <Model />
                    </Stage>
                </Suspense>
                <OrbitControls makeDefault autoRotate />
            </Canvas>
        </div>
    )
}
