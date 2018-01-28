import React from "react";
import { mount } from "enzyme";

import HotelSearchResultsPage from "../../src/components/HotelSearchResultsPage";
import hotels from "../../data/example.json";

describe("HotelSearchResultsPage", () => {
  it("renders a HotelList", () => {
    const component = mount(<HotelSearchResultsPage hotels={hotels} requiredFacilities={[]} />);
    expect(component.find("HotelList").exists()).toBeTruthy();
  });

  it("renders a SelectSortOrder component", () => {
    const props = {
      order: "ascending",
      hotels,
      requiredFacilities: [],
      setOrder: jest.fn()
    };
    const component = mount(<HotelSearchResultsPage {...props} />);
    const selectSortOrder = component.find("SelectSortOrder");
    expect(selectSortOrder.exists()).toBeTruthy();
    expect(selectSortOrder.prop("order")).toEqual(props.order);
    expect(selectSortOrder.prop("setOrder")).toBe(props.setOrder);
  });
});
