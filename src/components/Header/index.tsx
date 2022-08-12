import React from "react";
import ListProvider from "./HeaderProvider";
import ListView from "./HeaderView";

const HeaderIndex = (props: any) => {
  return (
    <div>
      <ListProvider {...props}>
        <ListView {...props} />
      </ListProvider>
    </div>
  );
};

export default HeaderIndex;
