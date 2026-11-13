import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { ParticleField } from './ParticleField';
import { EnergyShader } from '../shaders/energyShader';

// Core 3D Computational Artifact
const ComputationalCore: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);

  // Shader material instance
  const shaderUniforms = useRef({
    uTime: { value: 0 },
    uColorA: { value: new THREE.Color('#67E8F9') },
    uColorB: { value: new THREE.Color('#818CF8') }
  });

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    shaderUniforms.current.uTime.value = t;

    // Smooth continuous rotation
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.18;
      meshRef.current.rotation.y = t * 0.24;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = -t * 0.12;
      wireframeRef.current.rotation.y = t * 0.15;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = t * 0.3;
      innerRef.current.rotation.z = t * 0.2;
    }
    if (ringRef1.current) {
      ringRef1.current.rotation.x = Math.PI / 3 + Math.sin(t * 0.2) * 0.1;
      ringRef1.current.rotation.y = t * 0.35;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.x = -Math.PI / 4 + Math.cos(t * 0.2) * 0.1;
      ringRef2.current.rotation.y = -t * 0.28;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central Translucent Glass Polyhedron */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.35, 0]} />
        <meshPhysicalMaterial
          color="#0D1117"
          roughness={0.15}
          metalness={0.4}
          transmission={0.85}
          ior={1.4}
          reflectivity={0.7}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
          transparent
          opacity={0.75}
        />
      </mesh>

      {/* Exterior Wireframe Cage */}
      <mesh ref={wireframeRef}>
        <icosahedronGeometry args={[1.7, 1]} />
        <meshStandardMaterial
          color="#67E8F9"
          emissive="#22D3EE"
          emissiveIntensity={0.6}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Inner Glowing Energy Seed */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[0.65, 0]} />
        <shaderMaterial
          vertexShader={EnergyShader.vertexShader}
          fragmentShader={EnergyShader.fragmentShader}
          uniforms={shaderUniforms.current}
          transparent
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Orbiting Quantum Rings */}
      <mesh ref={ringRef1}>
        <torusGeometry args={[2.2, 0.015, 16, 64]} />
        <meshStandardMaterial
          color="#818CF8"
          emissive="#818CF8"
          emissiveIntensity={0.8}
          transparent
          opacity={0.6}
        />
      </mesh>

      <mesh ref={ringRef2}>
        <torusGeometry args={[2.5, 0.012, 16, 64]} />
        <meshStandardMaterial
          color="#67E8F9"
          emissive="#67E8F9"
          emissiveIntensity={0.7}
          transparent
          opacity={0.5}
        />
      </mesh>
    </group>
  );
};

export const HeroScene: React.FC = () => {
  return (
    <div className="relative w-full h-[540px] md:h-[620px] bg-[#080B10] rounded-2xl overflow-hidden border border-[#202938]">
      {/* Ambient Lighting Gradients in background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#67E8F9]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#818CF8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 noise-bg pointer-events-none opacity-40" />

      {/* Interactive Canvas */}
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        dpr={[1, 1.75]} // Cap DPR for high performance
        gl={{
          antialias: true,
          powerPreference: 'high-performance',
          alpha: true
        }}
      >
        {/* Balanced Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} color="#F5F7FA" />
        <pointLight position={[-4, -3, -2]} intensity={1.5} color="#818CF8" />
        <pointLight position={[3, -2, 2]} intensity={2.0} color="#67E8F9" />

        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
          <ComputationalCore />
          <ParticleField count={70} radius={4.5} />
        </Float>

        {/* OrbitControls with restrained damping & rotation bounds */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 2.3}
          dampingFactor={0.05}
          rotateSpeed={0.5}
        />
      </Canvas>

      {/* Floating UI Overlays */}
      <div className="absolute top-4 left-4 z-10 flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#111827]/80 backdrop-blur-md border border-[#202938] text-[11px] font-mono text-[#9CA3AF]">
        <span className="w-2 h-2 rounded-full bg-[#67E8F9] animate-pulse" />
        <span>THREE.JS // WEBGL 2.0 RUNTIME</span>
      </div>

      <div className="absolute bottom-4 right-4 z-10 hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#111827]/80 backdrop-blur-md border border-[#202938] text-[11px] font-mono text-[#64748B]">
        <span>DRAG TO ROTATE 3D PERSPECTIVE</span>
      </div>
    </div>
  );
};
