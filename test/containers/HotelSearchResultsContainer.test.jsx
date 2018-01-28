import React from "react";
import { mount } from "enzyme";

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
    const page = component.find("HotelSearchResultsPage");
    expect(page.prop("requiredFacilityTypes")).toEqual({
      "car park": false,
      gym: false,
      pool: false
    });
  });
});
