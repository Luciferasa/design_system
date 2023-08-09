import React, { useEffect, useRef, useState } from 'react';

import './style.scss';

const PhoneSelector = () => {
  const phoneNumberA = 1E11;
  const minNumber = 10000000000;
  const maxNumber = 9999999999999;
  const halfNumber = Math.floor(minNumber + (maxNumber + minNumber) / 2);
  const [phoneNumber, setPhoneNumber] = useState(`${halfNumber}`);
  const [rotation, setRotation] = useState(0);
  const [isAdvancedMode, setIsAdvancedMode] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const phoneNumberV = useRef<number>(0);

  const toRad = (deg: number) => deg * (Math.PI / 180);

  useEffect(() => {
    const interval = setInterval(() => {
      const deltaV = phoneNumberA * Math.sin(toRad(rotation));
      phoneNumberV.current = Math.floor(phoneNumberV.current + deltaV);
      setPhoneNumber((prev) => {
        const value = Math.min(Math.max(Math.floor(+prev + phoneNumberV.current), minNumber), maxNumber);

        if (value === minNumber || value === maxNumber) {
          if (Math.abs(phoneNumberV.current) < 1E11) {
            phoneNumberV.current = 0;
            console.log('zero', value);
          } else {
            phoneNumberV.current = -phoneNumberV.current * 0.4;
          }
        }

        return `${value}`;
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [rotation]);

  useEffect(() => {
    if (!isAdvancedMode) {
      setRotation(0);
    }
  }, [isAdvancedMode]);

  const changeRotation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRotation(parseInt(e.target.value, 10));
  };

  const changeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const toggleSettings = () => {
    setIsAdvancedMode(!isAdvancedMode);
  };

  const getNumber = () => {
    if (phoneNumber.length === 11) {
      return phoneNumber.replace(/(\d{1})(\d{3})(\d{3})/, '(+$1) $2-$3-');
    }
    if (phoneNumber.length === 12) {
      return phoneNumber.replace(/(\d{2})(\d{3})(\d{3})/, '(+$1) $2-$3-');
    }
    if (phoneNumber.length === 13) {
      return phoneNumber.replace(/(\d{3})(\d{3})(\d{3})/, '(+$1) $2-$3-');
    }
    return '';
  };

  return (
    <div className="wrapper">
      <div className="phone-selector">
        <div className="phone-selector__content">
          <div>
            <div>{`Phone: ${getNumber()}`}</div>
            <input
              type="range"
              ref={inputRef}
              min={minNumber}
              max={maxNumber}
              onChange={changeNumber}
              value={phoneNumber}
              className={isAdvancedMode ? 'phone-selector__phone-input--advanced-mode' : 'phone-selector__phone-input'}
              style={{ rotate: `${rotation}deg` }}
            />
          </div>
          <div className="phone-selector__settings">
            <input type="checkbox" onChange={toggleSettings} />
            <div>Advanced mode</div>
          </div>
          {isAdvancedMode && <input type="range" min={-30} max={30} value={rotation} onChange={changeRotation} />}
        </div>
      </div>
    </div>
  );
};

export default PhoneSelector;
