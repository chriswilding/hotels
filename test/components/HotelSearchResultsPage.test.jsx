import React from "react";
import { mount } from "enzyme";

import HotelSearchResultsPage from "../../src/components/HotelSearchResultsPage";
import hotels from "../../data/example.json";

describe("HotelSearchResultsPage", () => {
  it("renders a HotelList", () => {
    const component = mount(<HotelSearchResultsPage hotels={hotels} />);
    expect(component.find("HotelList").exists()).toBeTruthy();
  });
});
