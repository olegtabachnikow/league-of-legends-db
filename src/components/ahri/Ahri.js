import React from "react";
import "./Ahri.css";
import ahri from "../../images/ahri-picture.png";
import crystalOrb from "../../images/crystal-orb.png";
import tail from "../../images/fox-tail.png";

function Ahri() {
  const [isStarted, setIsStarted] = React.useState(false);
  const [tailActive, setIsTailActive] = React.useState(false);
  const [isSecondActionStarted, setIsSecondActionStarted] =
    React.useState(false);
  function handleOrbClick() {
    !isStarted ? setIsStarted(true) : setIsSecondActionStarted(true);
    if (isSecondActionStarted) {
      setIsStarted(false);
      setIsSecondActionStarted(false);
    }
  }
  React.useEffect(() => {
    if (isStarted) {
      setTimeout( () => setIsTailActive(true), 1300);
    } else {
      setIsTailActive(false);
    }
  }, [isStarted]);
  return (
    <div className="ahri__container">
      <h1
        className={`ahri__title ${isStarted && "ahri__title_active"} ${
          isSecondActionStarted && "ahri__title_moved"
        }`}
      >
        database
      </h1>
      <h2 className={`ahri__subtitle ${isStarted && "ahri__subtitle_active"}`}>
        Click an Orb to start
      </h2>
      <div className="ahri__char-box">
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
        <div className={`ahri__tail-box ${isStarted && "ahri__tail-box_active"}`}>
        <img
          src={tail}
          className={`ahri__tail ${tailActive && "ahri__tail-1"}`}
          alt="tail"
        />
        <img
          src={tail}
          className={`ahri__tail ${tailActive && "ahri__tail-2"}`}
          alt="tail"
        />
        <img
          src={tail}
          className={`ahri__tail ${tailActive && "ahri__tail-3"}`}
          alt="tail"
        />
        <img
          src={tail}
          className={`ahri__tail ${tailActive && "ahri__tail-4"}`}
          alt="tail"
        />
        <img
          src={tail}
          className={`ahri__tail ${tailActive && "ahri__tail-5"}`}
          alt="tail"
        />
        <img
          src={tail}
          className={`ahri__tail ${tailActive && "ahri__tail-6"}`}
          alt="tail"
        />
        <img
          src={tail}
          className={`ahri__tail ${tailActive && "ahri__tail-7"}`}
          alt="tail"
        />
        <img
          src={tail}
          className={`ahri__tail ${tailActive && "ahri__tail-8"}`}
          alt="tail"
        />
        <img
          src={tail}
          className={`ahri__tail ${tailActive && "ahri__tail-9"}`}
          alt="tail"
        />
      </div>
      </div>
    </div>
  );
}

export default Ahri;
