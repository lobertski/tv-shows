import React from "react";
import HeaderIndex from "../../components/Header";
import NavbarIndex from "../../components/Navbar";
import HomeSection from "../../components/HomeSection";
import HomeAsideIndex from "../../components/HomeAside";

const Home: React.FC = () => {
  return (
    <div>
      <HeaderIndex />
      <NavbarIndex />
      <HomeSection />
      <HomeAsideIndex />
    </div>
  );
};

export default Home;
