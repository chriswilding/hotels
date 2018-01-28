import React from "react";
import { shallow } from "enzyme";

import StarRating from "../../src/components/StarRating";

describe("StarRating", () => {
  it("renders a 1 star rating", () => {
    const component = shallow(<StarRating starRating={1} />);
    expect(component.text()).toEqual("\u2605\u2606\u2606\u2606\u2606");
  });

  it("renders a 3 star rating", () => {
    const component = shallow(<StarRating starRating={3} />);
    expect(component.text()).toEqual("\u2605\u2605\u2605\u2606\u2606");
  });

  it("renders a 5 star rating", () => {
    const component = shallow(<StarRating starRating={5} />);
    expect(component.text()).toEqual("\u2605\u2605\u2605\u2605\u2605");
  });
});
