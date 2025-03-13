// useState() = Re-renders the component when the state value changes.

// useRef() = "use Reference" Does not cause re-renders when its value changes.
//            When you want a component to "remember" some information,
//            but you don't want that information to trigger new renders.

//            1. Accessing/Interacting with DOM elements
//            2. Handling Focus, Animations, and Transitions
//            3. Managing Timers and Intervals

import { useState, useEffect, useRef } from 'react';

function UseRef2() {
  const InputRef = useRef(null);

  useEffect(() => {
    const elem = document.createElement('h5');
    elem.innerText = `input: ${InputRef.current}`;
    const div = document.getElementsByClassName('useref2');
    div[0].appendChild(elem);
  });

  function handleClick() {
    InputRef.current.focus();
    InputRef.current.style.backgroundColor = 'yellow';
  }

  return (
    <>
      <div className="useref2">
        <button onClick={handleClick}>Input Click</button>
        <input type="text" ref={InputRef} />
      </div>
    </>
  );
}

export default UseRef2;
