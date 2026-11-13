import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface NeuralStructureProps {
  scale?: number;
  nodeCount?: number;
}

export const NeuralStructure: React.FC<NeuralStructureProps> = ({
  scale = 1.0,
  nodeCount = 28
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  // Generate interconnected 3D nodes
  const { nodePositions, linePositions } = useMemo(() => {
    const nodes: [number, number, number][] = [];
    const rnd = (min: number, max: number) => min + Math.random() * (max - min);

    // 4 clusters representing an AI network layer
    const clusters = [
      { center: [-1.8, 0, 0], count: 6 },
      { center: [-0.6, 0.4, 0], count: 8 },
      { center: [0.6, -0.3, 0], count: 8 },
      { center: [1.8, 0.1, 0], count: 6 }
    ];

    clusters.forEach(c => {
      for (let i = 0; i < c.count; i++) {
        nodes.push([
          c.center[0] + rnd(-0.5, 0.5),
          c.center[1] + rnd(-0.6, 0.6),
          c.center[2] + rnd(-0.6, 0.6)
        ]);
      }
    });

    // Create lines between nodes that are within a distance threshold
    const lineCoords: number[] = [];
    const maxDist = 1.45;

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i][0] - nodes[j][0];
        const dy = nodes[i][1] - nodes[j][1];
        const dz = nodes[i][2] - nodes[j][2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < maxDist) {
          lineCoords.push(...nodes[i], ...nodes[j]);
        }
      }
    }

    return {
      nodePositions: nodes,
      linePositions: new Float32Array(lineCoords)
    };
  }, [nodeCount]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <group ref={groupRef} scale={scale}>
      {/* Nodes */}
      {nodePositions.map((pos, idx) => (
        <mesh key={idx} position={pos}>
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshStandardMaterial
            color={idx % 3 === 0 ? '#67E8F9' : idx % 3 === 1 ? '#818CF8' : '#A78BFA'}
            emissive={idx % 2 === 0 ? '#22D3EE' : '#6366F1'}
            emissiveIntensity={0.8}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      ))}

      {/* Interconnecting Synaptic Lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#818CF8"
          transparent
          opacity={0.35}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
};
