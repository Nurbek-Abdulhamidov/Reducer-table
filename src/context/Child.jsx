import React, { useContext } from "react";
import { ContextInfo } from "./Context";

const Child = () => {
  const { AddFive, AddOne, ChangeTitle, AddNum } = useContext(ContextInfo);

  return (
    <div>
      <button onClick={AddOne}>AddOne</button>
      <button onClick={AddFive}>AddFive</button>
      <br />
      <hr />
      <input
        onChange={(e) => ChangeTitle(e.target.value)}
        type="number"
        placeholder="write number"
      />
      <button onClick={AddNum}>AddNum</button>
    </div>
  );
};

export default Child;
