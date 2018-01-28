import React from "react";

const orders = {
  ascending: (hotelA, hotelB) => hotelA.StarRating - hotelB.StarRating,
  descending: (hotelA, hotelB) => hotelB.StarRating - hotelA.StarRating
};

const StarRatingSort = ({ order, hotels, ...props }) => {
  const copyOfHotels = [...hotels];

  const sort = orders[order];

  if (sort) {
    copyOfHotels.sort(orders[order]);
  }

  const newProps = {
    ...props,
    hotels: copyOfHotels
  };
  return props.children(newProps);
};

export default StarRatingSort;
