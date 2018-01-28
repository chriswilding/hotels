import React from "react";

const blackStar = "\u2605";
const whiteStar = "\u2606";

function buildStarRatingString(starRating) {
  let output = [];
  for (let i = 0; i < starRating; i++) {
    output.push(blackStar);
  }
  for (let i = 0; i < 5 - starRating; i++) {
    output.push(whiteStar);
  }
  return output.join("");
}

const StarRating = ({ starRating }) => {
  return (
    <div>
      <span>{buildStarRatingString(starRating)}</span>
    </div>
  );
};

export default StarRating;
