import { useState, useEffect } from 'react';

export const useTypewriter = (texts: string[]) => {
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
        }, 3000);
        clearInterval(typeWriter);
      }
    }, 80);

    return () => clearInterval(typeWriter);
  }, [textIndex]);

  return currentText;
};