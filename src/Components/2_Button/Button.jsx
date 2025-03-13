import { useState } from 'react';
import styles from './Button.module.css';

function Button({ props = 'Click Me!' }) {
  const [click, isClicked] = useState(false);
  const priv = {
    backgroundColor: 'hsl(400, 100%, 50%)',
    color: 'black',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  };
  return (
    <>
      <button
        className={styles.btn /*module styles - unique class name*/}
        style={click ? priv : null /*inline */}
        onClick={() => isClicked((click) => !click)}
      >
        {props}
      </button>
    </>
  );
}
export default Button;
