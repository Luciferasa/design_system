import React, { useEffect, useRef } from 'react';

import './style.scss';

const Button = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const initialX = Math.random() * 100;
    const initialY = Math.random() * 100;

    buttonRef.current!.style.top = `${initialX}%`;
    buttonRef.current!.style.right = `${initialY}%`;
  }, []);

  const runAway = (e: React.MouseEvent) => {
    const newX = Math.random() * 100;
    const newY = Math.random() * 100;

    buttonRef.current!.style.top = `${newY}%`;
    buttonRef.current!.style.right = `${newX}%`;
  };
  return <button ref={buttonRef} className="button" onMouseOver={runAway}>ololo</button>;
};

export default Button;
