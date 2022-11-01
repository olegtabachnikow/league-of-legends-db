import React from "react";
import "./Header.css";
import logo from "../../images/lol-logo.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <img
        onClick={() => navigate("/")}
        className="header__logo"
        src={logo}
        alt="logo"
      />
    </header>
  );
}

export default Header;
