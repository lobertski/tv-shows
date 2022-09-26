import { Link } from "react-router-dom";
import "./style.css";

const NavbarView = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/shows">Shows</Link>
          </li>
          <li>
            <Link to="/people">People</Link>
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
    </>
  );
};

export default NavbarView;
