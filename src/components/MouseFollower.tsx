import React, { useEffect, useState } from 'react';

interface MouseFollowerProps {
  isTransitioning: boolean;
}

const MouseFollower: React.FC<MouseFollowerProps> = ({ isTransitioning }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="fixed w-4 h-4 sm:w-6 sm:h-6 bg-amber-400/20 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out hidden sm:block"
      style={{
        left: mousePosition.x - 12,
        top: mousePosition.y - 12,
        transform: `scale(${isTransitioning ? 0 : 1})`
      }}
    />
  );
};

export default MouseFollower;