import React, { useEffect, useState } from 'react';

import FallingButtonItem from '../FallingButtonItem';

const FallingButtons = ({ onDown }) => {
  const [symbols, setSymbols] = useState({});
  const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.@';

  useEffect(() => {
    const interval = setInterval(() => {
      addNewSymbol();
    }, 2000);

    return (() => {
      clearInterval(interval);
    });
  }, []);

  const deleteSymbol = id => {
    setSymbols(prevSymbols => {
      const updatedSymbols = { ...prevSymbols };
      delete updatedSymbols[id];
      return updatedSymbols;
    });
  };

  const generateRandomKey = () => Math.random().toString(36).substr(2, 9);

  const addNewSymbol = () => {
    const newSymbol = {
      character: characters[Math.floor(Math.random() * (characters.length - 1))],
      positionX: window.innerWidth - 100,
      positionY: 0,
    };

    const newField = { [generateRandomKey()]: newSymbol };
    setSymbols(prevSymbols => ({ ...prevSymbols, ...newField }));
  };

  return (
    Object.entries(symbols || {}).map(([key, value]) => (
      <FallingButtonItem
        key={key}
        id={key}
        data={value}
        deleteSymbol={deleteSymbol}
        onDown={onDown}
      />
    ))
  );
};

export default FallingButtons;
