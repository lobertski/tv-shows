import React from "react";
import NavbarProvider from "./NavbarProvider";
import NavbarView from "./NavbarView";

const NavbarIndex = (props: any) => {
  return (
    <>
      <NavbarProvider {...props}>
        <NavbarView {...props} />
      </NavbarProvider>
    </>
  );
};

export default NavbarIndex;
