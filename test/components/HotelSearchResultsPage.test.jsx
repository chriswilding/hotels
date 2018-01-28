import React from "react";
import { mount } from "enzyme";

import HotelSearchResultsPage from "../../src/components/HotelSearchResultsPage";

describe("HotelSearchResultsPage", () => {
  it("renders a HotelList", () => {
    const component = mount(<HotelSearchResultsPage />);
    expect(component.find("HotelList").exists()).toBeTruthy();
  });
});
