import React from "react";
import HomeAsideProvider from "./HomeAsideProvider";
import HomeAsideView from "./HomeAsideView";

const HomeAsideIndex = (props: any) => {
  return (
    <div>
      <HomeAsideProvider {...props}>
        <HomeAsideView {...props} />
      </HomeAsideProvider>
    </div>
  );
};

export default HomeAsideIndex;
