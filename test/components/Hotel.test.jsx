import React from "react";
import { shallow } from "enzyme";

import Hotel from "../../src/components/Hotel";

describe("Hotel", () => {
  let component;

  const props = {
    Name: "An Awesome Hotel Name",
    StarRating: 3,
    Facilities: ["gym", "pool"]
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

  it("renders a Facilities component", () => {
    const facilities = component.find("Facilities");
    expect(facilities.exists()).toBeTruthy();
    expect(facilities.prop("facilities")).toBe(props.Facilities);
  });
});
