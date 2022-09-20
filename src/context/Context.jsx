import React, { createContext, useReducer } from "react";
import { nurbekReducer } from "./reducer";

export const ContextInfo = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(nurbekReducer, {
    count: 0,
    name: "",
  });

  return (
    <ContextInfo.Provider value={[state, dispatch]}>
      {children}
    </ContextInfo.Provider>
  );
};

export default Context;
