import React from "react";
import { shallow } from "enzyme";

import SelectSortOrder from "../../src/components/SelectSortOrder";

describe("SelectSortOrder", () => {
  let component;

  beforeEach(() => {
    component = shallow(<SelectSortOrder />);
  });

  it("renders a SelectSortOrder componet", () => {
    expect(component.exists()).toBeTruthy();
  });

  it("renders 3 options", () => {
    expect(component.find("option").length).toEqual(3);
  });
});
