import React, { useState } from 'react';

function Arr() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState('');
  const [carModel, setCarModel] = useState('');

  function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };
    setCars((c) => [...c, newCar]);

    setCarYear('');
    setCarMake('');
    setCarModel('');
  }
  function handleRemoveCar(index) {
    setCars((c) => c.filter((_, i) => i != index));
  }
  function handleYearChange(e) {
    setCarYear(e.target.value);
  }
  function handleMakeChange(e) {
    setCarMake(e.target.value);
  }
  function HandleModelChange(e) {
    setCarModel(e.target.value);
  }

  return (
    <>
      <div>
        <h2>{cars.length > 0 ? 'list of objects' : 'list is empty'}</h2>
        {cars.length > 0 && (
          <ul>
            {cars.map((item, index) => (
              <li key={index} onClick={() => handleRemoveCar(index)}>
                {item.year} {item.make} {item.model}
              </li>
            ))}
          </ul>
        )}
        <input
          type="number"
          value={carYear}
          onChange={handleYearChange}
          placeholder="select year"
        />
        <br />
        <input
          type="text"
          value={carMake}
          onChange={handleMakeChange}
          placeholder="enter smt"
        />
        <br />
        <input
          type="text"
          value={carModel}
          onChange={HandleModelChange}
          placeholder="enter smt"
        />
        <br />
        <button onClick={handleAddCar}>add</button>
      </div>
    </>
  );
}

export default Arr;
