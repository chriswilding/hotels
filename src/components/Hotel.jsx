import React from "react";

import StarRating from "./StarRating";

const Hotel = ({ Name: name, StarRating: starRating }) => {
  return (
    <div>
      <h2>{name}</h2>
      <StarRating starRating={starRating} />
    </div>
  );
};

export default Hotel;
