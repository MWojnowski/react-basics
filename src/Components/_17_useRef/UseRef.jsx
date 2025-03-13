// useState() = Re-renders the component when the state value changes.

// useRef() = "use Reference" Does not cause re-renders when its value changes.
//            When you want a component to "remember" some information,
//            but you don't want that information to trigger new renders.

//            1. Accessing/Interacting with DOM elements
//            2. Handling Focus, Animations, and Transitions
//            3. Managing Timers and Intervals

import { useState, useEffect, useRef } from 'react';
import UseRef2 from './UseRef2';

function UseRef() {
  // const [number, setNumber] = useState(0);
  const ref = useRef(0);

  useEffect(() => {
    const elem = document.createElement('h5');
    elem.innerText = `rerender no.${/*number*/ ref.current}`;
    const div = document.getElementsByClassName('useref');
    div[0].appendChild(elem);
  });

  return (
    <>
      <div className="useref">
        <button
          onClick={() => {
            ref.current = ref.current + 1;
            // setNumber((n) => n + 1);
          }}
        >
          Click Me!
        </button>
        <UseRef2 />
      </div>
    </>
  );
}

export default UseRef;
