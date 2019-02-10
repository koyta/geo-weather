import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import "sanitize.css";
import { GlobalStyle } from "./globalStyles";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import WeatherStore from "./stores/WeatherStore";

const stores = {
  weatherStore: new WeatherStore(),
};

ReactDOM.render(
  <Provider {...stores}>
    <>
      <GlobalStyle />
      <App />
    </>
  </Provider>,
  document.getElementById("root"),
);

serviceWorker.unregister();
