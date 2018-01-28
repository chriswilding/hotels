import React from "react";

import FacilityFilter from "./FacilityFilter";
import HotelList from "./HotelList";
import hotels from "../../data/example.json";
import StarRatingSort from "./StarRatingSort";

const App = () => (
  <StarRatingSort order="descending" hotels={hotels}>
    {props => (
      <FacilityFilter {...props} requiredFacilities={["car park"]}>
        {props => <HotelList {...props} />}
      </FacilityFilter>
    )}
  </StarRatingSort>
);

export default App;
