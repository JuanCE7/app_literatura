import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  opacity: number;
}

const FloatingParticles: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => [
        ...prev.slice(-20),
        {
          id: Date.now(),
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          opacity: Math.random() * 0.5 + 0.1
        }
      ]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
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
    </>
  );
};

export default FloatingParticles;