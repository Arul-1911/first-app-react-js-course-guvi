import React from "react";
import "../assests/navbar.css";
import logo from "../assests/react-logo.png";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/')
  };

  const handleClickAbout = () => {
    navigate('/about')
  };

  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <img src={logo} alt="logo" className="img-logo" />
        </div>
        <ul>
          <li>
            <button className="home-btn" onClick={handleClick}>Home</button>
          </li>
          <li>
            <button className="about-btn" onClick={handleClickAbout}>About</button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
