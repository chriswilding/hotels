import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { render } from "react-dom";

import HotelSearchResultsPageContainer from "./containers/HotelSearchResultsPageContainer";
import reducer from "./reducers";

const store = createStore(reducer);

render(
  <Provider store={store}>
    <HotelSearchResultsPageContainer />
  </Provider>,
  document.getElementById("root")
);
