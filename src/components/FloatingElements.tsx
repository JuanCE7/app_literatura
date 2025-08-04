import React from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  opacity: number;
}

interface FloatingElementsProps {
  particles: Particle[];
  mousePosition: { x: number; y: number };
  isTransitioning: boolean;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({
  particles,
  mousePosition,
  isTransitioning
}) => {
  return (
    <>
      {/* Floating Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-amber-300 rounded-full pointer-events-none animate-float"
          style={{
            left: particle.x,
            top: particle.y,
            opacity: particle.opacity,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}

      {/* Mouse Follower - Hidden on mobile */}
      <div
        className="fixed w-4 h-4 sm:w-6 sm:h-6 bg-amber-400/20 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out hidden sm:block"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${isTransitioning ? 0 : 1})`
        }}
      />
    </>
  );
};

export default FloatingElements;