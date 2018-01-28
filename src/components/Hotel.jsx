import React from "react";

import StarRating from "./StarRating";
import Facilities from "./Facilities";

const Hotel = ({ Facilities: facilities, Name: name, StarRating: starRating }) => {
  return (
    <div>
      <h2>{name}</h2>
      <StarRating starRating={starRating} />
      <Facilities facilities={facilities} />
    </div>
  );
};

export default Hotel;
