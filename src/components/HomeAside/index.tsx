import React from "react";
import HomeAsideProvider from "./HomeAsideProvider";
import HomeAsideView from "./HomeAsideView";

const HomeAsideIndex = (props: any) => {
  return (
    <>
      <HomeAsideProvider {...props}>
        <HomeAsideView {...props} />
      </HomeAsideProvider>
    </>
  );
};

export default HomeAsideIndex;
