// CursorDot.jsx
import React, { useEffect, useState, useRef } from 'react';

const CursorDot = () => {
  // References for the cursor dot and animation frame
  const dotRef = useRef(null);
  const requestRef = useRef(null);
  
  // State to track cursor position and dot position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  
  // Spring physics parameters for elasticity
  const springStrength = 0.3; // How strongly the dot moves toward cursor (0.01 to 0.2)
  const damping = 0.9; // How quickly the movement slows down (0.5 to 0.9)
  
  // Track mouse movement
  useEffect(() => {
    const trackMouse = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', trackMouse);
    
    return () => {
      window.removeEventListener('mousemove', trackMouse);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);
  
  // Animation loop using requestAnimationFrame for smooth motion
  useEffect(() => {
    let velocity = { x: 0, y: 0 };
    
    const animate = () => {
      // Calculate spring force
      const dx = mousePosition.x - dotPosition.x;
      const dy = mousePosition.y - dotPosition.y;
      
      // Apply spring physics
      velocity.x += dx * springStrength;
      velocity.y += dy * springStrength;
      
      // Apply damping to prevent infinite oscillation
      velocity.x *= damping;
      velocity.y *= damping;
      
      // Update dot position
      setDotPosition(prevPos => ({
        x: prevPos.x + velocity.x,
        y: prevPos.y + velocity.y
      }));
      
      // Continue animation loop
      requestRef.current = requestAnimationFrame(animate);
    };
    
    requestRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [mousePosition, dotPosition]);
  
  // Apply position to the actual DOM element
  useEffect(() => {
    if (dotRef.current) {
      dotRef.current.style.transform = `translate(${dotPosition.x - 10}px, ${dotPosition.y - 10}px)`;
    }
  }, [dotPosition]);
  
  return (
    <div
      ref={dotRef}
      className="w-5 h-5 bg-orange-500 rounded-full fixed pointer-events-none z-50 top-0 left-0"
    />
  );
};

export default CursorDot;