import React from "react";
import { mount } from "enzyme";

import App from "../../src/components/App";

describe("App", () => {
  it("renders a HotelList", () => {
    const component = mount(<App />);
    expect(component.find("HotelList").exists()).toBeTruthy();
  });
});
