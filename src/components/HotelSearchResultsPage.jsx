import React, { Fragment } from "react";

import FacilityFilter from "../functionAsChildComponents/FacilityFilter";
import HotelList from "./HotelList";
import SelectSortOrder from "../components/SelectSortOrder";
import SelectRequiredFacilities from "../components/SelectRequiredFacilities";
import StarRatingSort from "../functionAsChildComponents/StarRatingSort";

const HotelSearchResultsPage = ({
  availableFacilities,
  hotels,
  order,
  requiredFacilities,
  setOrder,
  setRequiredFacility
}) => (
  <Fragment>
    <SelectSortOrder order={order} setOrder={setOrder} />
    <SelectRequiredFacilities
      availableFacilities={availableFacilities}
      setRequiredFacility={setRequiredFacility}
    />
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
