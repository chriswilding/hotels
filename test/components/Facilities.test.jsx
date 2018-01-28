import React from "react";
import { shallow } from "enzyme";

import Facilities from "../../src/components/Facilities";

describe("Facilities", () => {
  let component;

  beforeEach(() => {
    const facilities = ["car park", "gym"];
    component = shallow(<Facilities facilities={facilities} />);
  });

  it("renders a facilities list", () => {
    expect(component.exists()).toBeTruthy();
  });

  it("displays a list item for each facility", () => {
    const count = component.find("li").length;
    expect(count).toEqual(2);
  });

  it("displays the first facilities name", () => {
    const facility = component.find("li").first();
    expect(facility.text()).toBe("car park");
  });

  it("displays the last facilities name", () => {
    const facility = component.find("li").last();
    expect(facility.text()).toBe("gym");
  });
});
