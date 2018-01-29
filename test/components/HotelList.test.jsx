import React from "react";
import { shallow } from "enzyme";

import HotelList from "../../src/components/HotelList";
import hotels from "../../data/example.json";

describe("HotelList", () => {
  let component;

  beforeEach(() => {
    component = shallow(<HotelList hotels={hotels} />);
  });

  it("renders a hotel list", () => {
    expect(component.exists()).toBeTruthy();
  });

  it("renders 3 hotel child components", () => {
    const hotelComponents = component.find("Hotel");
    expect(hotelComponents).toHaveLength(3);
  });
});
