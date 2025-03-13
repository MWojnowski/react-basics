import CompB from './CompB';
import { useState, createContext } from 'react';
export const UserContext = createContext();

function CompA() {
  const [user, setUser] = useState('Liczii');
  return (
    <>
      <div className="box">
        <h1>Component A</h1>
        <h2>Hello {user}!</h2>
        <UserContext.Provider value={user}>
          <CompB />
        </UserContext.Provider>
      </div>
    </>
  );
}
export default CompA;
