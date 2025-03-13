// React hook = Special function that allows functional components
// to use React features without writing class components (React v16.8)
// (useState, useEffect, useContext, useReducer, useCallback, and more)

// useState() = A React hook that allows the creation of a stateful variable
// AND a setter function to update its value in the Virtual DOM.
// [name, setName]

import { useState } from 'react';

function Counter() {
  const [count, SetCount] = useState(0);

  const increment = () => {
    SetCount(count + 1);
  };
  const decrement = () => {
    SetCount(count - 1);
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

export default Counter;
