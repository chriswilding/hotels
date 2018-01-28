import React, { Fragment } from "react";

import FacilityFilter from "../functionAsChildComponents/FacilityFilter";
import HotelList from "./HotelList";
import SelectSortOrder from "../components/SelectSortOrder";
import StarRatingSort from "../functionAsChildComponents/StarRatingSort";

const HotelSearchResultsPage = ({ hotels, order, requiredFacilities, setOrder }) => (
  <Fragment>
    <SelectSortOrder order={order} setOrder={setOrder} />
    <StarRatingSort order={order} hotels={hotels}>
      {props => (
        <FacilityFilter {...props} requiredFacilities={requiredFacilities}>
          {props => <HotelList {...props} />}
        </FacilityFilter>
      )}
    </StarRatingSort>
  </Fragment>
);

export default HotelSearchResultsPage;
