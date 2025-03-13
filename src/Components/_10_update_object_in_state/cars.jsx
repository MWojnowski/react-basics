import { useState } from 'react';

function Cars() {
  const [car, setCar] = useState({
    year: 2025,
    brand: 'toyota',
    model: 'gr86',
  });

  const HandleYearChange = (e) => {
    setCar((c) => ({ ...c, year: e.target.value }));
  };

  const HandleBrandChange = (e) => {
    setCar((c) => ({ ...c, brand: e.target.value }));
  };

  const HandleModelChange = (e) => {
    setCar((c) => ({ ...c, model: e.target.value }));
  };

  return (
    <>
      <div>
        <p>
          car: {car.year} {car.brand} {car.model}
          <br />
          <input type="number" onChange={HandleYearChange} value={car.year} />
          <br />
          <input type="text" onChange={HandleBrandChange} value={car.brand} />
          <br />
          <input type="text" onChange={HandleModelChange} value={car.model} />
        </p>
      </div>
    </>
  );
}

export default Cars;
