import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import { store } from "./store/store";
import App from "./components/app/App";
//Using hashrouter for deploying on Gh-pages
import { HashRouter } from "react-router-dom";
import ErrorBoundry from "./components/error-boundry/ErrorBoundry";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HashRouter>
      <ErrorBoundry>
        <Provider store={store}>
          <App />
        </Provider>
      </ErrorBoundry>
    </HashRouter>
  </React.StrictMode>
);
