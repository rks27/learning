import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider, themes } from "@fluentui/react";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider theme={themes.teamsDark}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
