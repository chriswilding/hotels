import React from "react";

import FacilityFilter from "./FacilityFilter";
import HotelList from "./HotelList";
import hotels from "../../data/example.json";

const App = () => (
  <FacilityFilter hotels={hotels} requiredFacilities={["car park"]}>
    {props => <HotelList {...props} />}
  </FacilityFilter>
);

export default App;
