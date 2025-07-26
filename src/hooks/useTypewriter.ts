import { useState, useEffect } from 'react';

export const useTypewriter = (texts: string[], speed: number = 80, delay: number = 3000) => {
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const text = texts[textIndex];
    let charIndex = 0;
    
    const typeWriter = setInterval(() => {
      if (charIndex < text.length) {
        setCurrentText(text.slice(0, charIndex + 1));
        charIndex++;
      } else {
        setTimeout(() => {
          setCurrentText('');
          setTextIndex((prev) => (prev + 1) % texts.length);
        }, delay);
        clearInterval(typeWriter);
      }
    }, speed);

    return () => clearInterval(typeWriter);
  }, [textIndex, texts, speed, delay]);

  return currentText;
};