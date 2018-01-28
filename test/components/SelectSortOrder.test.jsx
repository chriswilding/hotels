import React from "react";
import { shallow } from "enzyme";

import SelectSortOrder from "../../src/components/SelectSortOrder";

describe("SelectSortOrder", () => {
  let component;

  beforeEach(() => {
    component = shallow(<SelectSortOrder order="ascending" />);
  });

  it("renders a SelectSortOrder component", () => {
    expect(component.exists()).toBeTruthy();
  });

  it("renders 3 options", () => {
    expect(component.find("option").length).toEqual(3);
  });

  it("sets the value to the order", () => {
    expect(component.find("select").prop("value")).toEqual("ascending");
  });
});
