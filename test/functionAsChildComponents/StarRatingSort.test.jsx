import React from "react";
import { mount } from "enzyme";

import StarRatingSort from "../../src/functionAsChildComponents/StarRatingSort";

const hotels = [
  {
    StarRating: 1
  },
  {
    StarRating: 3
  },
  {
    StarRating: 2
  }
];

describe("StarRatingSort", () => {
  let component;

  it("does not change the order if a sort order is not provided", () => {
    const props = {
      hotels
    };

    const functionChildComponent = jest.fn(() => <div />);

    component = mount(<StarRatingSort {...props}>{functionChildComponent}</StarRatingSort>);

    expect(functionChildComponent).toBeCalledWith(
      expect.objectContaining({
        hotels
      })
    );
  });

  it("sorts in ascending order", () => {
    const props = {
      hotels,
      order: "ascending"
    };

    const functionChildComponent = jest.fn(() => <div />);

    component = mount(<StarRatingSort {...props}>{functionChildComponent}</StarRatingSort>);

    expect(functionChildComponent).toBeCalledWith(
      expect.objectContaining({
        hotels: [
          {
            StarRating: 1
          },
          {
            StarRating: 2
          },
          {
            StarRating: 3
          }
        ]
      })
    );
  });

  it("sorts in descending order", () => {
    const props = {
      hotels,
      order: "descending"
    };

    const functionChildComponent = jest.fn(() => <div />);

    component = mount(<StarRatingSort {...props}>{functionChildComponent}</StarRatingSort>);

    expect(functionChildComponent).toBeCalledWith(
      expect.objectContaining({
        hotels: [
          {
            StarRating: 3
          },
          {
            StarRating: 2
          },
          {
            StarRating: 1
          }
        ]
      })
    );
  });

  it("other props are passed through to children", () => {
    const props = {
      hotels,
      otherProp: "example"
    };

    const functionChildComponent = jest.fn(() => <div />);

    component = mount(<StarRatingSort {...props}>{functionChildComponent}</StarRatingSort>);

    expect(functionChildComponent).toBeCalledWith(
      expect.objectContaining({
        hotels,
        otherProp: "example"
      })
    );
  });
});
