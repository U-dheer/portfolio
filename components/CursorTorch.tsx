import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CursorTorch: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the movement slightly for a more fluid feel
  const springConfig = { damping: 25, stiffness: 700 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 150); // Center the 300px glow
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-[300px] h-[300px] pointer-events-none z-50 mix-blend-screen"
      style={{
        x: springX,
        y: springY,
        background: 'radial-gradient(circle, rgba(0, 255, 157, 0.15) 0%, rgba(0,0,0,0) 70%)',
      }}
    />
  );
};

export default CursorTorch;