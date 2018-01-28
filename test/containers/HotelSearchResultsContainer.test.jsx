import React from "react";
import { mount } from "enzyme";

import hotels from "../../data/example.json";
import HotelSearchResultsPageContainer from "../../src/containers/HotelSearchResultsPageContainer";

// There are calls to update() an the enzyme wrapper due to an issue with the child component not
// receiving updated props.
// Maybe due to https://github.com/airbnb/enzyme/issues/1229

describe("HotelSearchResultsPageContainer", () => {
  let component;

  beforeEach(() => {
    component = mount(<HotelSearchResultsPageContainer />);
  });

  it("loads the facility types list", () => {
    component.update();
    expect(component.state("requiredFacilities")).toEqual({
      "car park": false,
      gym: false,
      pool: false
    });
  });

  it("loads the hotels list", () => {
    component.update();
    const page = component.find("HotelSearchResultsPage");
    expect(page.prop("hotels")).toEqual(hotels);
  });

  it("passes a setOrder callback to theHotelSearchResultsPage", () => {
    component.update();
    const page = component.find("HotelSearchResultsPage");
    expect(page.prop("setOrder")).toBeInstanceOf(Function);
  });
});
