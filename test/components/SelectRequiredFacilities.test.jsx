import React from "react";
import { mount } from "enzyme";

import SelectRequiredFacilities from "../../src/components/SelectRequiredFacilities";

describe("SelectRequiredFacilities", () => {
  let component;
  const setRequiredFacility = jest.fn();
  const availableFacilities = {
    "car park": false,
    gym: false,
    pool: true
  };

  beforeEach(() => {
    component = mount(
      <SelectRequiredFacilities
        availableFacilities={availableFacilities}
        setRequiredFacility={setRequiredFacility}
      />
    );
  });

  it("renders a SelectRequiredFacilities component", () => {
    expect(component.exists()).toBeTruthy();
  });

  it("renders 3 checkboxes", () => {
    expect(component.find("input").length).toEqual(3);
  });

  it("calls the setRequiredFacility callback on change", () => {
    component
      .find("input")
      .first()
      .simulate("change", { target: { value: "car park" } });
    expect(setRequiredFacility).toBeCalledWith("car park");
  });
});
