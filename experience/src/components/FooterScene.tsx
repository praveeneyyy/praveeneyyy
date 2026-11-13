import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const FloatingArtifact: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y -= delta * 0.4;
    }
  });

  return (
    <group>
      {/* Outer Cage */}
      <mesh ref={meshRef}>
        <octahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial
          color="#818CF8"
          emissive="#67E8F9"
          emissiveIntensity={0.5}
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Inner Glowing Monolith */}
      <mesh ref={coreRef}>
        <tetrahedronGeometry args={[0.5, 0]} />
        <meshPhysicalMaterial
          color="#0D1117"
          emissive="#67E8F9"
          emissiveIntensity={0.9}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </group>
  );
};

export const FooterScene: React.FC = () => {
  return (
    <div className="w-full h-44 relative overflow-hidden rounded-xl bg-[#080B10]/50 border border-[#202938]/60">
      <Canvas
        camera={{ position: [0, 0, 3.2], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[2, 2, 2]} intensity={1.5} color="#67E8F9" />
        <pointLight position={[-2, -2, -1]} intensity={1.0} color="#818CF8" />
        <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
          <FloatingArtifact />
        </Float>
      </Canvas>
    </div>
  );
};

