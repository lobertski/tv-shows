import React from "react";
import ListProvider from "./ListProvider";
import ListView from "./ListView";

const ListIndex = (props: any) => {
  return (
    <div>
      <ListProvider {...props}>
        <ListView {...props} />
      </ListProvider>
    </div>
  );
};

export default ListIndex;
