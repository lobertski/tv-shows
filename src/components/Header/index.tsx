import React from "react";
import ListProvider from "./HeaderProvider";
import ListView from "./HeaderView";

const HeaderIndex = (props: any) => {
  return (
    <>
      <ListProvider {...props}>
        <ListView {...props} />
      </ListProvider>
    </>
  );
};

export default HeaderIndex;
