import React from "react";
import { mount } from "enzyme";

import HotelSearchResultsPage from "../../src/components/HotelSearchResultsPage";
import hotels from "../../data/example.json";

describe("HotelSearchResultsPage", () => {
  it("renders a HotelList", () => {
    const component = mount(<HotelSearchResultsPage hotels={hotels} requiredFacilities={[]} />);
    expect(component.find("HotelList").exists()).toBeTruthy();
  });
});
