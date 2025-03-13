import { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatTime = (t) => {
    let hours = padZero(t.getHours());
    let minutes = padZero(t.getMinutes());
    let seconds = padZero(t.getSeconds());

    return `${hours}:${minutes}.${seconds}`;
  };

  function padZero(num) {
    return num >= 10 ? num : `0${num}`;
  }
  return (
    <>
      <div className="stopwatch">
        <div className="clock-container">
          <div className="clock">
            <span>{formatTime(time)}</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Clock;
