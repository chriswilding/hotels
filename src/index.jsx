import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { render } from "react-dom";

import App from "./components/App";
import reducer from "./reducers";

const store = createStore(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
