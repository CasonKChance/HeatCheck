import React, {createContext, useContext, useState} from 'react';

const UserDataContext = createContext();

export const useUserData = () => {
  return useContext(UserDataContext);
};

export const UserDataProvider = ({children}) => {
  const [userData, setUserData] = useState({
    firstName: undefined,
    lastName: undefined,
    emailAddress: undefined,
    password: undefined,
    confirmPassword: undefined,
    position: undefined,
    hometown: undefined,
    skillLevel: undefined,
    height: undefined,
    weight: undefined,
    ageGroup: undefined,
    playType: undefined,
  });

  return (
    <UserDataContext.Provider value={{userData, setUserData}}>
      {children}
    </UserDataContext.Provider>
  );
};
