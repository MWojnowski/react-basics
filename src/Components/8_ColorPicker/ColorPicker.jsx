import styles from './ColorPicker.module.css';
import { useState } from 'react';

function ColorPicker() {
  const [color, SetColor] = useState('#FFFFFF');

  const handleColor = (e) => {
    SetColor(e.target.value);
  };

  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.color_display}
          style={{ backgroundColor: color }}
        >
          <p>Selected color: {color.toUpperCase()}</p>
        </div>
        <label>Select a Color:&nbsp;</label>
        <input type="color" value={color} onChange={handleColor} />
      </div>
    </>
  );
}

export default ColorPicker;
