import React from "react";
import { shallow } from "enzyme";

import Hotel from "../../src/components/Hotel";

describe("Hotel", () => {
  it("renders a hotel", () => {
    const component = shallow(<Hotel />);
    expect(component.exists()).toBeTruthy();
  });
});
