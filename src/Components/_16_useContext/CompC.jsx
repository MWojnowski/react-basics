import CompD from './CompD';
import { useContext } from 'react';
import { UserContext } from './CompA';

function CompC() {
  const user = useContext(UserContext);
  return (
    <>
      <div className="box">
        <h1>Component C</h1>
        <h2>Middle of {user}</h2>
        <CompD />
      </div>
    </>
  );
}
export default CompC;
