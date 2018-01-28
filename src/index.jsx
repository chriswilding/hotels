import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { render } from "react-dom";

import HotelSearchResultsPage from "./components/HotelSearchResultsPage";
import reducer from "./reducers";

const store = createStore(reducer);

render(
  <Provider store={store}>
    <HotelSearchResultsPage />
  </Provider>,
  document.getElementById("root")
);
