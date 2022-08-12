import React, { useContext } from "react";
import { Context } from "./ListProvider";

const ListView = () => {
  const { onClick = () => {} } = useContext(Context);
  return (
    <div>
      <h1>Example</h1>
      <button onClick={() => onClick()}>Click Me!</button>
    </div>
  );
};

export default ListView;
