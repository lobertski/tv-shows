import React from "react";
import SectionHomeProvider from "./SectionHomeProvider";
import SectionHomeView from "./SectionHomeView";

const SectionHomeIndex = (props: any) => {
  return (
    <div>
      <SectionHomeProvider {...props}>
        <SectionHomeView {...props} />
      </SectionHomeProvider>
    </div>
  );
};

export default SectionHomeIndex;
