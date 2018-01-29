import PropTypes from "prop-types";
import React from "react";

import Hotel from "./Hotel";

const HotelList = ({ hotels }) => (
  <div className="hotel-list">
    {hotels.map(({ Name, ...props }) => <Hotel key={Name} Name={Name} {...props} />)}
  </div>
);

HotelList.propTypes = {
  hotels: PropTypes.arrayOf(
    PropTypes.shape({
      Facilities: PropTypes.arrayOf(PropTypes.string).isRequired,
      Name: PropTypes.string.isRequired,
      StarRating: PropTypes.number.isRequired
    })
  ).isRequired
};

export default HotelList;
