import React, { useRef, useState } from 'react';

import './style.scss';

const PhoneSelector = () => {
  const minNumber = 10000000000;
  const maxNumber = 9999999999999;
  const halfNumber = Math.floor(minNumber + (maxNumber + minNumber) / 2);
  const [phoneNumber, setPhoneNumber] = useState(`${halfNumber}`);
  const [rotation, setRotation] = useState(0);
  const [isAdvancedMode, setIsAdvancedMode] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const doAnimate = () => {
    // const degreeItem = 296666666666;

    const step = () => {
      // const number = +phoneNumber + degreeItem;
      if (+phoneNumber < maxNumber && inputRef.current && 'style' in inputRef.current) {
        // setPhoneNumber(String(number));
        inputRef.current.style.transform = `rotate(${rotation}deg)`;
      }

      // if (+phoneNumber > halfNumber) {
      //   requestAnimationFrame(step);
      // }
    };

    requestAnimationFrame(step);
  };

  const changeRotation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRotation(parseInt(e.target.value, 10));

    doAnimate();
  };

  const changeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);

    if (isAdvancedMode) {
      doAnimate();
    }

    // if (isAdvancedMode) {
    //   if (+phoneNumber > halfNumber) {
    //     setInterval(() => {
    //       console.log(+phoneNumber)
    //       const number = +phoneNumber + 100000;
    //       if (+phoneNumber < maxNumber) {
    //         setPhoneNumber(String(number));
    //       }
    //     }, 2000);
    //   } else {
    //     setInterval(() => {
    //       const number = +phoneNumber - 100000;
    //       if (+phoneNumber > minNumber) {
    //         setPhoneNumber(String(number));
    //       }
    //     }, 2000);
    //   }
    // }
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

  const getRotateDegrees = () => {
    if (!isAdvancedMode) {
      return 0;
    }
    const degreeItem = 296666666666;
    if (+phoneNumber > halfNumber) {
      return +phoneNumber / degreeItem;
    }
    return -(+phoneNumber / degreeItem);
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
