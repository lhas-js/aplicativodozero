import "semantic-ui-css/semantic.min.css";

import React from "react";
import { render } from "react-snapshot";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

const rootEl = document.getElementById("root");

render(<App />, rootEl);

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    render(<NextApp />, rootEl);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
