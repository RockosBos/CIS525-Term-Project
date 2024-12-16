// Timer.js
import React, { useEffect, useState } from 'react';

function Timer(props) {

  useEffect(() => {
    const interval = setInterval(() => {
      props.setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const formatTime = () => {
    const minutes = Math.floor(props.seconds / 60);
    const remainingSeconds = props.seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
  };

  return (
    <div className="timer">
      {formatTime()}
    </div>
  );
}

export default Timer;
