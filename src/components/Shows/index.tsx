import React from "react";
import PopularShowsProvider from "./PopularShowsProvider";
import PopularShowsView from "./PopularShowsView";

const SectionHomeIndex = (props: any) => {
  return (
    <div>
      <PopularShowsProvider {...props}>
        <PopularShowsView {...props} />
      </PopularShowsProvider>
    </div>
  );
};

export default SectionHomeIndex;
