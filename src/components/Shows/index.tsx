import React from "react";
import ShowsProvider from "./ShowsProvider";
import ShowsView from "./ShowsView";

const ShowsIndex = (props: any) => {
  return (
    <>
      <ShowsProvider {...props}>
        <ShowsView {...props} />
      </ShowsProvider>
    </>
  );
};

export default ShowsIndex;
