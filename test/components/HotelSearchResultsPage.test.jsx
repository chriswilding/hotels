import React from "react";
import { mount } from "enzyme";

import HotelSearchResultsPage from "../../src/components/HotelSearchResultsPage";
import hotels from "../../data/example.json";

describe("HotelSearchResultsPage", () => {
  it("renders a HotelList", () => {
    const props = {
      availableFacilities: {},
      order: "default",
      hotels,
      requiredFacilities: [],
      setOrder: jest.fn(),
      setRequiredFacility: jest.fn()
    };
    const component = mount(<HotelSearchResultsPage {...props} />);
    expect(component.find("HotelList").exists()).toBeTruthy();
  });

  it("renders a SelectSortOrder component", () => {
    const props = {
      availableFacilities: {},
      order: "ascending",
      hotels,
      requiredFacilities: [],
      setOrder: jest.fn(),
      setRequiredFacility: jest.fn()
    };
    const component = mount(<HotelSearchResultsPage {...props} />);
    const selectSortOrder = component.find("SelectSortOrder");
    expect(selectSortOrder.exists()).toBeTruthy();
    expect(selectSortOrder.prop("order")).toEqual(props.order);
    expect(selectSortOrder.prop("setOrder")).toBe(props.setOrder);
  });

  it("renders a SelectRequiredFacilities component", () => {
    const props = {
      availableFacilities: {
        "car park": false,
        gym: false,
        pool: false
      },
      order: "ascending",
      hotels,
      requiredFacilities: [],
      setOrder: jest.fn(),
      setRequiredFacility: jest.fn()
    };
    const component = mount(<HotelSearchResultsPage {...props} />);
    const selectRequiredFacilities = component.find("SelectRequiredFacilities");
    expect(selectRequiredFacilities.exists()).toBeTruthy();
    expect(selectRequiredFacilities.prop("availableFacilities")).toEqual(props.availableFacilities);
    expect(selectRequiredFacilities.prop("setRequiredFacility")).toBe(props.setRequiredFacility);
  });
});
