import React from "react";
import "./Navigation.css";
import { useNavigate, useLocation } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  return (
    <nav className="navigation">
      <button
        onClick={() => navigate("/")}
        className={`navigation__button ${
          location.pathname === "/" && "navigation__button_active"
        }`}
      >
        home
      </button>
      <button
        onClick={() => navigate("/champions/")}
        className={`navigation__button ${
          location.pathname === "/champions/" && "navigation__button_active"
        }`}
      >
        champion list
      </button>
      <button
        onClick={() => navigate("/items")}
        className={`navigation__button ${
          location.pathname === "/items" && "navigation__button_active"
        }`}
      >
        item list
      </button>
    </nav>
  );
}

export default Navigation;
