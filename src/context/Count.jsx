import React, { useContext } from "react";
import { ContextInfo } from "./Context";

const Count = () => {
  const [state] = useContext(ContextInfo);
  return (
    <div>
      {state.count}
      {/* {state.name} */}
    </div>
  );
};

export default Count;
