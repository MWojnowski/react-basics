import { useState } from 'react';

//updater === arrow function () => {} w useState. roznica miedzy increment a decrement. updater zmienia poprzedni stan a nie obecny
function Counter2() {
  const [count, SetCount] = useState(0);

  const increment = () => {
    SetCount((prevCount) => prevCount + 1);
    //x+1 ^
    SetCount((prevCount) => prevCount + 1);
    //y(x+1)+1 ^
  };
  const decrement = () => {
    SetCount(count - 1);
    //x - 1 ^
    SetCount(count - 1);
    //x - 1 ^
  };
  const reset = () => {
    SetCount(0);
  };
  return (
    <>
      <div className="counter_container">
        <p className="count_display">{count}</p>
        <button className="counter-button" onClick={decrement}>
          Decrement
        </button>
        <button className="counter-button" onClick={reset}>
          Reset
        </button>
        <button className="counter-button" onClick={increment}>
          Increment
        </button>
      </div>
    </>
  );
}

export default Counter2;
