import React from "react";
import "./MainPage.css";
import leagueLogo from "../../images/league-of-legends-logo.png";

function MainPage({children}) {
  return (
    <div className="main-page">
      <div className="main-page__logo-box">
        <img className="main-page__logo" src={leagueLogo} alt="lol logo" />
      </div>
      {children}
    </div>
  );
}

export default MainPage;
