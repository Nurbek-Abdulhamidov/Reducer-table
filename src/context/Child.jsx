import React, { useContext } from "react";
import { ContextInfo } from "./Context";

const Child = () => {
  const [state, dispatch] = useContext(ContextInfo);
  return (
    <div>
      <button onClick={() => dispatch({ type: "AddOne" })}>AddNum</button>
      <br />
      <input
        type="text"
        onChange={(e) =>
          dispatch({ type: "addAmount", payload: { name: e.target.value } })
        }
      />
      <button onClick={() => dispatch({ type: "AddNumber" })}>Add</button>
    </div>
  );
};

export default Child;
