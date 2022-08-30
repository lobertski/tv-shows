import React, { useContext } from "react";
import { Context } from "./DescriptionProvider";

const DescriptionView = () => {
  const { onClick = () => {} } = useContext(Context);
  return (
    <div>
      <h1>Description</h1>
      <button onClick={() => onClick()}>Click Me!</button>
    </div>
  );
};

export default DescriptionView;
