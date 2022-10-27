import React from "react";
import "./Ahri.css";
import ahri from "../../images/ahri-picture.png";
import crystalOrb from "../../images/crystal-orb.png";
import tail from "../../images/fox-tail.png";

function Ahri() {
  const [isStarted, setIsStarted] = React.useState(false);
  const [tailAndBlobActive, setIsTailAndBlobActive] = React.useState(false);
  const [isSecondActionStarted, setIsSecondActionStarted] =
    React.useState(false);
  function handleOrbClick() {
    !isStarted ? setIsStarted(true) : setIsSecondActionStarted(true);
    if (isSecondActionStarted) {
      setIsStarted(false);
      setIsSecondActionStarted(false);
      setIsTailAndBlobActive(false);
    }
  }
  React.useEffect(() => {
    if (isStarted) {
      setTimeout(() => setIsTailAndBlobActive(true), 1300);
    } else {
      setIsTailAndBlobActive(false);
    }
  }, [isStarted]);
  React.useEffect(() => {
    isSecondActionStarted  && console.log("biba");
  }, [isSecondActionStarted]);
  return (
    <div className="ahri__container">
      <h1
        className={`ahri__title ${isStarted && "ahri__title_active"} ${
          isSecondActionStarted && "ahri__title_moved"
        }`}
      >
        Ahri, the Nine-tailed fox
      </h1>
      <h2 className={`ahri__subtitle ${isStarted && "ahri__subtitle_active"}`}>
        Click an Orb to start
      </h2>
      <div className="ahri__char-box">
        <span className={`ahri__mouth ${tailAndBlobActive && "ahri__mouth_active"} ${isSecondActionStarted && "ahri__mouth_not-animated"}`}></span>
        <div className={`ahri__intro-text-container ${tailAndBlobActive && "ahri__intro-text-container_active"} ${isSecondActionStarted && "ahri__intro-text-container_moved"}`}>
        <p className={`ahri__intro-text ${tailAndBlobActive && "ahri__intro-text_active"}`}>
          Hello and thanks for viewing this project. I made it with
          love for the game and development. I really hope you enjoy my work.
          Click on the orb in my hands to continue
        </p>
        </div>
        <img
          className={`ahri__image ${isStarted && "ahri__image_active"}`}
          src={ahri}
          alt="ahri"
        />
        <div
          className={`ahri__orb-container ${
            isStarted && "ahri__orb-container_active"
          }`}
        >
          <img
            onClick={handleOrbClick}
            className="ahri__crystal-orb"
            src={crystalOrb}
            alt="crystal orb"
          />
        </div>
        <div
          className={`ahri__tail-box ${isStarted && "ahri__tail-box_active"}`}
        >
          <img
            src={tail}
            className={`ahri__tail ${tailAndBlobActive && "ahri__tail-1"}`}
            alt="tail"
          />
          <img
            src={tail}
            className={`ahri__tail ${tailAndBlobActive && "ahri__tail-2"}`}
            alt="tail"
          />
          <img
            src={tail}
            className={`ahri__tail ${tailAndBlobActive && "ahri__tail-3"}`}
            alt="tail"
          />
          <img
            src={tail}
            className={`ahri__tail ${tailAndBlobActive && "ahri__tail-4"}`}
            alt="tail"
          />
          <img
            src={tail}
            className={`ahri__tail ${tailAndBlobActive && "ahri__tail-5"}`}
            alt="tail"
          />
          <img
            src={tail}
            className={`ahri__tail ${tailAndBlobActive && "ahri__tail-6"}`}
            alt="tail"
          />
          <img
            src={tail}
            className={`ahri__tail ${tailAndBlobActive && "ahri__tail-7"}`}
            alt="tail"
          />
          <img
            src={tail}
            className={`ahri__tail ${tailAndBlobActive && "ahri__tail-8"}`}
            alt="tail"
          />
          <img
            src={tail}
            className={`ahri__tail ${tailAndBlobActive && "ahri__tail-9"}`}
            alt="tail"
          />
        </div>
      </div>
    </div>
  );
}

export default Ahri;
