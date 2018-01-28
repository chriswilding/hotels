import React from "react";
import { shallow } from "enzyme";

import Hotel from "../../src/components/Hotel";

describe("Hotel", () => {
  let component = shallow(<Hotel />);
  const props = {
    Name: "An Awesome Hotel Name",
    StarRating: 3
  };

  beforeEach(() => {
    component = shallow(<Hotel {...props} />);
  });

  it("renders a hotel", () => {
    expect(component.exists()).toBeTruthy();
  });

  it("renders its name", () => {
    const name = component.find("h2").text();
    expect(name).toEqual(props.Name);
  });

  it("renders a StarRating component", () => {
    const starRating = component.find("StarRating");
    expect(starRating.exists()).toBeTruthy();
    expect(starRating.prop("starRating")).toBe(props.StarRating);
  });
});
