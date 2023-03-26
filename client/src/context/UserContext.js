import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
        const user = JSON.parse(localStorage.getItem('userInfo'))
        if( user ) {
          setUser(user)
        }
    }, [])

  console.log('UserContext State : ' , user)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
