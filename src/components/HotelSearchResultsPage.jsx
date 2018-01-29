import PropTypes from "prop-types";
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
      {starRatingSortProps => (
        <FacilityFilter {...starRatingSortProps} requiredFacilities={requiredFacilities}>
          {faciltyFilterProps => <HotelList {...faciltyFilterProps} />}
        </FacilityFilter>
      )}
    </StarRatingSort>
  </Fragment>
);

HotelSearchResultsPage.propTypes = {
  // availableFacilities could change in future so defined in prop types as object with the lint rule disabled
  availableFacilities: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types,
  hotels: PropTypes.arrayOf(
    PropTypes.shape({
      Facilities: PropTypes.arrayOf(PropTypes.string).isRequired,
      Name: PropTypes.string.isRequired,
      StarRating: PropTypes.number.isRequired
    })
  ).isRequired,
  order: PropTypes.oneOf(["default", "ascending", "descending"]).isRequired,
  requiredFacilities: PropTypes.arrayOf(PropTypes.string).isRequired,
  setOrder: PropTypes.func.isRequired,
  setRequiredFacility: PropTypes.func.isRequired
};

export default HotelSearchResultsPage;
