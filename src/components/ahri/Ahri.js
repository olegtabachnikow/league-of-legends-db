import React from "react";
import "./Ahri.css";
import ahri from "../../images/ahri-picture.png";
import crystalOrb from "../../images/crystal-orb.png";
import tail from "../../images/fox-tail.png";
import { tailsCount } from "../../constants/constants";
import PageButton from "../page-button/PageButton";

function Ahri() {
  const [isStarted, setIsStarted] = React.useState(false);
  const [tailAndBlobActive, setIsTailAndBlobActive] = React.useState(false);
  const [isSecondActionStarted, setIsSecondActionStarted] =
    React.useState(false);
  const [isThirdActionStarted, setIsThirdActionStarted] = React.useState(false);
  const [isFourthActionStarted, setIsFourthActionStarted] =
    React.useState(false);
  function handleOrbClick() {
    !isStarted ? setIsStarted(true) : setIsSecondActionStarted(true);
  }
  function handleAhriHide() {
    setIsThirdActionStarted(true);
    setIsStarted(false);
    setIsSecondActionStarted(false);
    setIsTailAndBlobActive(false);
    setTimeout(() => setIsFourthActionStarted(true), 500);
  }
  React.useEffect(() => {
    if (isStarted) {
      setTimeout(() => setIsTailAndBlobActive(true), 1300);
    } else {
      setIsTailAndBlobActive(false);
    }
  }, [isStarted]);
  React.useEffect(() => {
    isSecondActionStarted && setTimeout(() => handleAhriHide(), 3000);
  }, [isSecondActionStarted]);
  return (
    <div className="ahri__container">
      <h1
        className={`ahri__title ${isStarted && "ahri__title_active"} ${
          isSecondActionStarted && "ahri__title_moved"
        }`}
      >
        intro
      </h1>
      <h2 className={`ahri__subtitle ${isStarted && "ahri__subtitle_active"}`}>
        {!isThirdActionStarted ? "Click an Orb to start" : "Select option"}
      </h2>
      {isFourthActionStarted ? (
        <>
          <PageButton
            text="Champion list"
            destination="champions/"
            currentClass="ahri__nav-button"
          />
          <PageButton
            text="Item list"
            destination="items/"
            currentClass="ahri__nav-button"
          />
        </>
      ) : (
        <div className="ahri__char-box">
          <span
            className={`ahri__mouth ${
              tailAndBlobActive && "ahri__mouth_active"
            } ${isSecondActionStarted && "ahri__mouth_not-animated"}`}
          ></span>
          <div
            className={`ahri__intro-text-container ${
              tailAndBlobActive && "ahri__intro-text-container_active"
            } ${isSecondActionStarted && "ahri__intro-text-container_moved"}`}
          >
            <p
              className={`ahri__intro-text ${
                tailAndBlobActive && "ahri__intro-text_active"
              }`}
            >
              Hello and thanks for viewing this project. I made it with love for
              the game and development. I really hope you enjoy my work. Click
              on the orb in my hands to continue
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
            } ${isSecondActionStarted && "ahri__orb-container_moved"} ${
              isThirdActionStarted && "ahri__orb-container_hidden"
            }`}
          >
            <img
              onClick={handleOrbClick}
              className={`ahri__crystal-orb ${
                isSecondActionStarted && "ahri__crystal-orb_moved"
              }`}
              src={crystalOrb}
              alt="crystal orb"
            />
          </div>
          <div
            className={`ahri__tail-box ${isStarted && "ahri__tail-box_active"}`}
          >
            {tailsCount.map((el, i) => {
              return (
                <img
                  key={i}
                  src={tail}
                  className={`ahri__tail ${
                    tailAndBlobActive && `ahri__tail-${el}`
                  }`}
                  alt="tail"
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Ahri;
