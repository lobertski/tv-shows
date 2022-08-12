import { AppBar } from "@mui/material";
import React, { useContext } from "react";
import { Context } from "./NavbarProvider";
import "./style.css";

const NavbarView = () => {
  const { onClick = () => {} } = useContext(Context);
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <a href="#home">Shows</a>
          </li>
          <li>
            <a href="#news">People</a>
          </li>
          <li>
            <a href="#contact">Networks</a>
          </li>
          <li>
            <a href="#about">Web Channels</a>
          </li>
          <li>
            <a href="#about">Articles</a>
          </li>
          <li>
            <a href="#about">Schedule</a>
          </li>
          <li>
            <a href="#about">Calendar</a>
          </li>
          <li>
            <a href="#about">Countdown</a>
          </li>
          <li>
            <a href="#about">Forums</a>
          </li>
        </ul>
      </nav>
      {/* <nav className="secondary-navbar">
        <h1>TRE</h1>
      </nav> */}
    </>
  );
};

export default NavbarView;
