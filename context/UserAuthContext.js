import React, {createContext, useContext, useState} from 'react';

const UserAuthContext = createContext();

export const useUserAuth = () => {
  return useContext(UserAuthContext);
};

export const UserAuthProvider = ({children}) => {
  const [isUserAuth, setIsUserAuth] = useState(false);

  return (
    <UserAuthContext.Provider value={{isUserAuth, setIsUserAuth}}>
      {children}
    </UserAuthContext.Provider>
  );
};
