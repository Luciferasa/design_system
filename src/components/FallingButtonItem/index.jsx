import React, { useEffect, useState } from 'react';

const FallingButtonItem = ({ id, data, deleteSymbol, onDown }) => {
  const [positionY, setPositionY] = useState(0);

  useEffect(() => {
    let start = 0;
    let lastTimestamp = performance.now();

    const updatePosition = timestamp => {
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      start += deltaTime * 0.1;

      setPositionY(start);

      if (start >= window.innerHeight - 30) {
        onDown(data);
        deleteSymbol(id);
        return cancelAnimationFrame(updatePosition);
      }

      requestAnimationFrame(updatePosition);
    };

    requestAnimationFrame(updatePosition);
  }, []);

  return (
    <div style={{ position: 'absolute', right: data.positionX, top: positionY }}>{data.character}</div>
  );
};

export default FallingButtonItem;
