import React from "react";

import FacilityFilter from "../functionAsChildComponents/FacilityFilter";
import HotelList from "./HotelList";
import StarRatingSort from "../functionAsChildComponents/StarRatingSort";

const HotelSearchResultsPage = ({ hotels, order, requiredFacilities }) => (
  <StarRatingSort order={order} hotels={hotels}>
    {props => (
      <FacilityFilter {...props} requiredFacilities={requiredFacilities}>
        {props => <HotelList {...props} />}
      </FacilityFilter>
    )}
  </StarRatingSort>
);

export default HotelSearchResultsPage;
