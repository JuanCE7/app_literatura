import { useState, useEffect } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  opacity: number;
}

export const useParticles = (interval: number = 2000) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const particleInterval = setInterval(() => {
      setParticles(prev => [
        ...prev.slice(-20),
        {
          id: Date.now(),
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          opacity: Math.random() * 0.5 + 0.1
        }
      ]);
    }, interval);

    return () => clearInterval(particleInterval);
  }, [interval]);

  return particles;
};