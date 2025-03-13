import { useState, useRef, useEffect } from 'react';

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElepsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning == true) {
      intervalIdRef.current = setInterval(() => {
        setElepsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }
  function stop() {
    setIsRunning(false);
  }
  function reset() {
    setElepsedTime(0);
    // setIsRunning(false);
  }
  function formatTime() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let miliseconds = Math.floor((elapsedTime % 1000) / 10);
    return `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}.${
      miliseconds < 10 ? `0${miliseconds}` : miliseconds
    }`;
  }
  return (
    <>
      <div className="stopwatch-body">
        <div className="stopwatch-container">
          <div className="display">{formatTime()}</div>
          <div className="controls">
            <button className="btn-start" onClick={start}>
              Start
            </button>
            <button className="btn-stop" onClick={stop}>
              Stop
            </button>
            <button className="btn-reset" onClick={reset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Stopwatch;
