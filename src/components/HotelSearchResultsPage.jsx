import React from "react";

import FacilityFilter from "../functionAsChildComponents/FacilityFilter";
import HotelList from "./HotelList";
import hotels from "../../data/example.json";
import StarRatingSort from "../functionAsChildComponents/StarRatingSort";

const HotelSearchResultsPage = () => (
  <StarRatingSort order="descending" hotels={hotels}>
    {props => (
      <FacilityFilter {...props} requiredFacilities={["car park"]}>
        {props => <HotelList {...props} />}
      </FacilityFilter>
    )}
  </StarRatingSort>
);

export default HotelSearchResultsPage;
