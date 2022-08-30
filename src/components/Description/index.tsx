import React from "react";
import DescriptionProvider from "./DescriptionProvider";
import ListView from "./DescriptionView";

const DescriptionIndex = (props: any) => {
  return (
    <div>
      <DescriptionProvider {...props}>
        <ListView {...props} />
      </DescriptionProvider>
    </div>
  );
};

export default DescriptionIndex;
