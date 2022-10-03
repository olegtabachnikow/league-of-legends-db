import React from "react";
import "./ErrorPage.css";
import errorChar from "../../images/error-man.png";

function ErrorPage() {
  return (
    <div className="error-page">
      <img className="error-page__image" src={errorChar} alt="error page character" />
    </div>
  );
}

export default ErrorPage;
