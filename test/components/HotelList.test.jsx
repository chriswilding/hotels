import React from "react";
import { shallow } from "enzyme";

import HotelList from "../../src/components/HotelList";

describe("HotelList", () => {
  let component;

  beforeEach(() => {
    component = shallow(<HotelList />);
  });

  it("renders a hotel list", () => {
    const component = shallow(<HotelList />);
    expect(component.exists()).toBeTruthy();
  });
});
