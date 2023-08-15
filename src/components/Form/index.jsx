import React, { useState, useRef } from 'react';

import Catcher from '../Catcher';
import FallingLetters from '../Falling-letters';

import './style.scss';

const Form = () => {
  const [username, setUsername] = useState('');
  const [catcherXCoordinate, setCatcherXCoordinate] = useState(555);
  const catcherXCoordinateRef = useRef(555);

  const handleCatcherXCoordinate = coord => {
    setCatcherXCoordinate(coord);
    catcherXCoordinateRef.current = coord;
  };

  const handleDown = symbol => {
    if (symbol.positionX > catcherXCoordinateRef.current && symbol.positionX < catcherXCoordinateRef.current + 100) {
      setUsername(name => name + (symbol.character || ''));
    }
  };

  return (
    <>
      <FallingLetters onDown={handleDown} />
      <form className="login-form">
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            disabled
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button">
          Login
        </button>
      </form>
      <Catcher catcherXCoordinate={catcherXCoordinate} handleCatcherXCoordinate={handleCatcherXCoordinate} />
    </>

  );
};

export default Form;
