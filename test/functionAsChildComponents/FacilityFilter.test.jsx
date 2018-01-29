import React from "react";
import { mount } from "enzyme";

import FacilityFilter from "../../src/functionAsChildComponents/FacilityFilter";
import hotels from "../../data/example.json";

describe("FacilityFilter", () => {
  it("renders all hotels when no facilities are required", () => {
    const props = {
      hotels,
      requiredFacilities: []
    };

    const functionChildComponent = jest.fn(() => <div />);

    mount(<FacilityFilter {...props}>{functionChildComponent}</FacilityFilter>);

    expect(functionChildComponent).toBeCalledWith(
      expect.objectContaining({
        hotels
      })
    );
  });

  it("renders all hotels with the required facility", () => {
    const props = {
      hotels,
      requiredFacilities: ["car park"]
    };

    const functionChildComponent = jest.fn(() => <div />);

    mount(<FacilityFilter {...props}>{functionChildComponent}</FacilityFilter>);

    expect(functionChildComponent).toBeCalledWith(
      expect.objectContaining({
        hotels: [
          {
            Name: "hotelone",
            StarRating: 5,
            Facilities: ["car park", "pool"]
          },
          {
            Name: "hoteltwo",
            StarRating: 3,
            Facilities: ["car park", "gym"]
          }
        ]
      })
    );
  });

  it("renders hotels with 2 required facilities", () => {
    const props = {
      hotels,
      requiredFacilities: ["car park", "gym"]
    };

    const functionChildComponent = jest.fn(() => <div />);

    mount(<FacilityFilter {...props}>{functionChildComponent}</FacilityFilter>);

    expect(functionChildComponent).toBeCalledWith(
      expect.objectContaining({
        hotels: [
          {
            Name: "hoteltwo",
            StarRating: 3,
            Facilities: ["car park", "gym"]
          }
        ]
      })
    );
  });

  it("other props are passed through to children", () => {
    const props = {
      hotels,
      requiredFacilities: [],
      otherProp: "example"
    };

    const functionChildComponent = jest.fn(() => <div />);

    mount(<FacilityFilter {...props}>{functionChildComponent}</FacilityFilter>);

    expect(functionChildComponent).toBeCalledWith(
      expect.objectContaining({
        hotels,
        otherProp: "example"
      })
    );
  });
});
