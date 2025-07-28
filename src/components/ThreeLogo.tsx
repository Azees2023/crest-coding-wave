
import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.2}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="#667eea"
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
}

interface ThreeLogoProps {
  onClick?: () => void;
  className?: string;
}

const ThreeLogo = ({ onClick, className = '' }: ThreeLogoProps) => {
  return (
    <div 
      className={`cursor-pointer ${className}`} 
      onClick={onClick}
      style={{ width: '50px', height: '50px' }}
    >
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};

export default ThreeLogo;
