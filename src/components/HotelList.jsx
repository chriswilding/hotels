import React from "react";

import Hotel from "./Hotel";

const HotelList = ({ hotels }) => {
  return (
    <div>{hotels.map(({ Name, ...props }) => <Hotel key={Name} Name={Name} {...props} />)}</div>
  );
};

export default HotelList;
