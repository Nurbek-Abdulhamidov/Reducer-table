import React, { createContext, useState } from "react";

export const ContextInfo = createContext();

const Context = ({ children }) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // Funksiyalar
  const AddOne = () => {
    setCount(count + 1);
  };

  const AddFive = () => {
    setCount(count + 5);
  };

  const ChangeTitle = (e) => {
    setName(e);
  };

  const AddNum = () => {
    setCount(+name + count);
  };
  return (
    <ContextInfo.Provider
      value={{ count, setCount, AddFive, AddOne, ChangeTitle, name, AddNum }}
    >
      {children}
    </ContextInfo.Provider>
  );
};

export default Context;
