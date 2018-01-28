import React from "react";

import FacilityFilter from "../functionAsChildComponents/FacilityFilter";
import HotelList from "./HotelList";
import StarRatingSort from "../functionAsChildComponents/StarRatingSort";

const HotelSearchResultsPage = ({ hotels }) => (
  <StarRatingSort order="descending" hotels={hotels}>
    {props => (
      <FacilityFilter {...props} requiredFacilities={["car park"]}>
        {props => <HotelList {...props} />}
      </FacilityFilter>
    )}
  </StarRatingSort>
);

export default HotelSearchResultsPage;
