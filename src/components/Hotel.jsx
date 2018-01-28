import React from "react";

import StarRating from "./StarRating";
import Facilities from "./Facilities";

const Hotel = ({ Facilities: facilities, Name: name, StarRating: starRating }) => {
  return (
    <div className="hotel">
      <div className="hotel__content">
        <h2 className="hotel__name">{name}</h2>
        <StarRating starRating={starRating} />
        <Facilities facilities={facilities} />
      </div>
    </div>
  );
};

export default Hotel;
