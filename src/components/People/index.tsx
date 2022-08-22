import React from "react";
import PeopleProvider from "./PeopleProvider";
import PeopleView from "./PeopleView";

const PeopleIndex = (props: any) => {
  return (
    <>
      <PeopleProvider {...props}>
        <PeopleView {...props} />
      </PeopleProvider>
    </>
  );
};

export default PeopleIndex;
