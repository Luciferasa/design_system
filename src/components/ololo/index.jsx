import React, { useState, useEffect } from 'react';

const Ololo = () => {
  const [position, setPosition] = useState(0);

  const animateScroll = () => {
    const targetPosition = window.innerWidth - 100; // Целевая позиция, например, правый край окна минус 100px
    const startTime = performance.now(); // Время начала анимации

    const step = currentTime => {
      const elapsedTime = currentTime - startTime;
      const progress = elapsedTime / 1000; // Прогресс анимации в секундах
      const newPosition = Math.min(targetPosition, progress * 200); // 200px в секунду скорость анимации

      setPosition(newPosition);

      if (newPosition < targetPosition) {
        requestAnimationFrame(step); // Продолжаем анимацию, если не достигли целевой позиции
      }
    };

    requestAnimationFrame(step); // Запускаем первый кадр анимации
  };

  useEffect(() => {
    animateScroll();
  }, []);

  return (
    <div style={{
      position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden',
    }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: `${position}px`,
          width: '50px',
          height: '50px',
          backgroundColor: 'blue',
        }}
      />
    </div>
  );
};

export default Ololo;
