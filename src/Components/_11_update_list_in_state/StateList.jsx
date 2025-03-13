import { useState } from 'react';

function StateList() {
  const [food, setFood] = useState(['Kebab', 'McDonald', 'KFC']);

  const addElem = () => {
    const toAdd = document.getElementById('food_input').value;
    document.getElementById('food_input').value = '';
    setFood((f) => [...f, toAdd]);
  };

  const delElem = (index) => {
    setFood((f) => f.filter((_, i) => i !== index));
  };
  return (
    <>
      <div>
        {food.length > 0 ? (
          <>
            <h2>List:</h2>
            <ul>
              {food.map((food, index) => (
                <li key={index} onClick={() => delElem(index)}>
                  {food}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <h3>brak elementow</h3>
        )}
        <input type="text" id="food_input" placeholder="add smt" />
        <button onClick={addElem}>add!</button>
      </div>
    </>
  );
}

export default StateList;
