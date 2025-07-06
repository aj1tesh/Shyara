import React, { useEffect, useRef, useState } from 'react';

const CURSOR_SIZE = 16;
const CURSOR_ACTIVE_SIZE = 22;

const ArrowheadSVG = ({ size, active }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      display: 'block',
      filter: active
        ? 'drop-shadow(0 0 6px #fff) drop-shadow(0 0 10px #A259F7aa)'
        : 'drop-shadow(0 0 2px #fff)',
      transition: 'filter 0.18s',
    }}
  >
    <polygon
      points="2,2 14,8 2,14"
      fill="#fff"
      stroke="#fff"
      strokeLinejoin="round"
      strokeWidth={active ? 1.2 : 1}
      style={{
        filter: active ? 'drop-shadow(0 0 6px #A259F7aa)' : 'none',
        transition: 'filter 0.18s',
      }}
    />
  </svg>
);

const CustomCursor = () => {
  const cursorRef = useRef();
  const [isActive, setIsActive] = useState(false);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  // Mouse move listener
  useEffect(() => {
    const handleMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  // Animation loop for trailing effect
  useEffect(() => {
    let frame;
    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.5;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.5;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x - CURSOR_SIZE / 2}px, ${pos.current.y - CURSOR_SIZE / 2}px, 0)`;
      }
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  // Detect hover on interactive elements
  useEffect(() => {
    const checkInteractive = (e) => {
      const el = e.target;
      if (el.closest('button, a, input, textarea, select, .btn, [role="button"], [tabindex]')) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };
    window.addEventListener('mouseover', checkInteractive);
    window.addEventListener('mouseout', checkInteractive);
    return () => {
      window.removeEventListener('mouseover', checkInteractive);
      window.removeEventListener('mouseout', checkInteractive);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: isActive ? CURSOR_ACTIVE_SIZE : CURSOR_SIZE,
        height: isActive ? CURSOR_ACTIVE_SIZE : CURSOR_SIZE,
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'width 0.18s, height 0.18s',
        willChange: 'transform, width, height',
      }}
    >
      <ArrowheadSVG size={isActive ? CURSOR_ACTIVE_SIZE : CURSOR_SIZE} active={isActive} />
    </div>
  );
};

export default CustomCursor; 