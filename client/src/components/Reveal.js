import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Reveal = ({ 
  children, 
  className = '', 
  threshold = 0.1, 
  delay = 0,
  variant = 'reveal-fade-up' // reveal-fade-up, reveal-fade-left, reveal-fade-right, reveal-scale
}) => {
  const [ref, isVisible] = useScrollReveal({ threshold });

  return (
    <div
      ref={ref}
      className={`reveal ${variant} ${className} ${isVisible ? 'active' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Reveal;
