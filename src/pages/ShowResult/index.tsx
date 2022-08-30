import React from "react";
import DescriptionIndex from "../../components/Description";
import HeaderIndex from "../../components/Header";
import NavbarIndex from "../../components/Navbar";

const ShowResult: React.FC<any> = () => {
  return (
    <>
      <HeaderIndex />
      <NavbarIndex />
      <DescriptionIndex />
    </>
  );
};

export default ShowResult;
