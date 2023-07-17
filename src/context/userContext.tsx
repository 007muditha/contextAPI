import React, { ReactNode, createContext, useContext, useState } from "react";

// define the context shape in the interface
interface userContextProps {
  userInout: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
}

// create context
const myAwesomeContext = createContext<userContextProps | null>(null);

// with out directly exportinf the context
// let's do a null check as we need to check if the
// users are trying to use the context outside the context provider
export const useUserContext = () => {
  const context = useContext(myAwesomeContext);
  if (!context) {
    throw new Error("component must be inside the context provider");
  }
  return context;
};

// Create the context provider ( This works like a layout that accepts child react nodes)
export const UserContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // define the variables that we described in the userContextProps
  const [userInout, setUserInput] = useState("");

  // return the context with the variables that are intened to be passed to context
  return (
    <myAwesomeContext.Provider value={{ userInout, setUserInput }}>
      {children}
    </myAwesomeContext.Provider>
  );
};
