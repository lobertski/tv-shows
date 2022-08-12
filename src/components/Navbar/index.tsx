import React from "react";
import NavbarProvider from "./NavbarProvider";
import NavbarView from "./NavbarView";

const NavbarIndex = (props: any) => {
  return (
    <div>
      <NavbarProvider {...props}>
        <NavbarView {...props} />
      </NavbarProvider>
    </div>
  );
};

export default NavbarIndex;
