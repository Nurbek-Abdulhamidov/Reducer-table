import React, { useContext } from "react";
import { ContextInfo } from "./Context.jsx";

const Count = () => {
  const { count } = useContext(ContextInfo);

  return <div>{count}</div>;
};

export default Count;
