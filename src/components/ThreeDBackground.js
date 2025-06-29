import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

// Starfield parameters
const STAR_COUNT = 600;
const STAR_COLORS = [
  'rgba(255,255,255,0.7)',    // bright white
  'rgba(244,244,245,0.35)',  // off-white, more visible
  'rgba(162,89,247,0.25)',   // purple, more visible
  'rgba(185,131,255,0.22)',  // light purple, more visible
  'rgba(192,132,252,0.18)'   // accent, more visible
];

function Stars() {
  const mesh = useRef();
  const mouse = useRef({ x: 0, y: 0 });
  const stars = useRef();
  const starRefs = useRef([]);

  // Listen for mouse movement on the window
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse position to [-1, 1]
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouse.current = { x, y };
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate random star positions and colors (store in ref for mutation)
  if (!stars.current) {
    stars.current = Array.from({ length: STAR_COUNT }, () => ({
      position: [
        (Math.random() - 0.5) * 40, // X: -20 to 20
        (Math.random() - 0.5) * 24, // Y: -12 to 12
        -Math.random() * 40 - 5,    // Z: -5 to -45
      ],
      color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
      size: Math.random() * 0.08 + 0.04,
      speed: Math.random() * 0.015 + 0.006, // slightly faster but still calm
    }));
  }

  useFrame(() => {
    // Parallax effect: move stars slightly based on mouse position
    if (mesh.current) {
      mesh.current.rotation.y = mouse.current.x * 0.2;
      mesh.current.rotation.x = mouse.current.y * 0.1;
    }
    // Move each star toward the camera and update mesh position
    stars.current.forEach((star, i) => {
      star.position[2] += star.speed;
      if (star.position[2] > 8) {
        star.position[0] = (Math.random() - 0.5) * 40;
        star.position[1] = (Math.random() - 0.5) * 24;
        star.position[2] = -45;
      }
      // Update mesh position directly
      if (starRefs.current[i]) {
        starRefs.current[i].position.set(...star.position);
      }
    });
  });

  return (
    <group ref={mesh}>
      {stars.current.map((star, i) => (
        <mesh
          key={i}
          ref={el => (starRefs.current[i] = el)}
          position={star.position}
        >
          <sphereGeometry args={[star.size, 8, 8]} />
          <meshBasicMaterial color={star.color} toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
}

const ThreeDBackground = () => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      pointerEvents: 'none',
      background: 'linear-gradient(120deg, #09090B 60%, #18181B 100%)',
    }}
  >
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }} gl={{ alpha: true }}>
      <Stars />
    </Canvas>
  </div>
);

export default ThreeDBackground; 