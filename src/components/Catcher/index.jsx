import React, { useEffect } from 'react';

import './style.scss';

const Catcher = ({ catcherXCoordinate, handleCatcherXCoordinate }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'ArrowLeft') {
        if (catcherXCoordinate < window.innerWidth - 115) {
          handleCatcherXCoordinate(catcherXCoordinate + 15);
        }
      } else if (event.key === 'ArrowRight') {
        if (catcherXCoordinate > 0) {
          handleCatcherXCoordinate(catcherXCoordinate - 15);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [catcherXCoordinate]);

  return (
    <div className="catcher" style={{ right: catcherXCoordinate + 'px' }} />
  );
};

export default Catcher;
