import React from "react";
import "./MainPage.css";
import leagueLogo from "../../images/league-of-legends-logo.png";
import ahri from "../../images/ahri-picture.png";
import crystalOrb from "../../images/crystal-orb.png";

function MainPage() {
  const [isStarted, setIsStarted] = React.useState(false);
  const [isSecondActionStarted, setIsSecondActionStarted] = React.useState(false);
  function handleOrbClick() {
    !isStarted ? setIsStarted(true) : setIsSecondActionStarted(true);
    if(isSecondActionStarted) { 
    setIsStarted(false);
    setIsSecondActionStarted(false);
    }
  }
  return (
    <div className="main-page">
      <div className="main-page__logo-box">
        <img className="main-page__logo" src={leagueLogo} alt="lol logo" />
      </div>
      <div className="main-page__container">
        <h1 className={`main-page__title ${isStarted && "main-page__title_active"} ${isSecondActionStarted && "main-page__title_moved"}`}>database</h1>
        <h2
          className={`main-page__subtitle ${
            isStarted && "main-page__subtitle_active"
          }`}
        >
          Click an Orb to start
        </h2>
        <div className="main-page__char-box">
          <img
            className={`main-page__ahri ${
              isStarted && "main-page__ahri_active"
            }`}
            src={ahri}
            alt="ahri"
          />
          <img
            onClick={handleOrbClick}
            className={`main-page__crystal-orb ${isStarted && "main-page__crystal-orb_active"}`}
            src={crystalOrb}
            alt="crystal orb"
          />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
