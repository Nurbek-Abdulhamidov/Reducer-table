import React from "react";
import Child from "./Child";
import Context from "./Context";
import Count from "./Count";

const AppTwo = () => {
  return (
    <div>
      <Context>
        <Count />
        <Child />
      </Context>
    </div>
  );
};

export default AppTwo;
