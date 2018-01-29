import PropTypes from "prop-types";
import React from "react";

const blackStar = "\u2605";
const whiteStar = "\u2606";

function buildStarRatingString(starRating) {
  const output = [];
  for (let i = 0; i < starRating; i += 1) {
    output.push(blackStar);
  }
  for (let i = 0; i < 5 - starRating; i += 1) {
    output.push(whiteStar);
  }
  return output.join("");
}

const StarRating = ({ starRating }) => (
  <div className="star-rating">{buildStarRatingString(starRating)}</div>
);

StarRating.propTypes = {
  starRating: PropTypes.number.isRequired
};

export default StarRating;
