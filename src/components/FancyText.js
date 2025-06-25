import React from 'react';

const FancyText = ({ text, className = '' }) => {
  return (
    <span className={className + ' inline-block'}>
      {text.split('').map((char, idx) => (
        <span
          key={idx}
          className={`inline-block transition-all duration-200 ease-out cursor-pointer fancy-letter`}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export default FancyText; 