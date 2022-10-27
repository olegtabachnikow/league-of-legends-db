import React from "react";
import "./MainPageButton.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function MainPageButton({ text, destination }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(`/${destination}`)}
      className="main-page-button"
    >
      {text}
    </button>
  );
}

MainPageButton.propTypes = {
  text: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MainPageButton;
