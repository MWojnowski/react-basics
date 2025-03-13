import { useEffect, useState } from 'react';

// useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):

// This component re-renders
// This component mounts
// The state of a value

// useEffect(function, [dependencies])

// 1. useEffect(() => {})                 // Runs after every re-render
// 2. useEffect(() => {}, [])             // Runs only on mount
// 3. useEffect(() => {}, [value])        // Runs on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

function UseEffect() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('green');
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    document.title = `count: ${count} ${color}`;

    return () => {
      //some clean up code
    };
  }, [count /* ,color */]);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  // window.addEventListener('resize', handleResize);
  // console.log('Added');
  //BEZ USEEFFECT ^ (NAPIERDALA EVENT LISTENERY CO REFREASH[komponentu] ZAMIAST JEDEN POJEDYNCZY)

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    console.log('Added');

    return () => {
      window.removeEventListener('resize', handleResize);
      console.log('unmounted');
    };
  }, []);

  return (
    <>
      <p style={{ backgroundColor: color }}>count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Add</button>
      <button onClick={() => setCount((c) => c - 1)}>Substract</button>
      <br />
      <button
        onClick={() => setColor((c) => (c = c === 'green' ? 'red' : 'green'))}
      >
        Change color
      </button>

      <p>width: {width}px</p>
      <p>height: {height}px</p>
    </>
  );
}

export default UseEffect;
