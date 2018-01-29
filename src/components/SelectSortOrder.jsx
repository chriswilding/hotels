import PropTypes from "prop-types";
import React from "react";

const onChange = setOrder => event => setOrder(event.target.value);

const SelectSortOrder = ({ order, setOrder }) => (
  <div className="select-sort-order">
    <label htmlFor="select-sort-order">
      Select sort order:
      <select id="select-sort-order" value={order} onChange={onChange(setOrder)}>
        <option value="default">Default</option>
        <option value="descending">Highest to lowest</option>
        <option value="ascending">Lowest to highest</option>
      </select>
    </label>
  </div>
);

SelectSortOrder.propTypes = {
  order: PropTypes.oneOf(["default", "ascending", "descending"]).isRequired,
  setOrder: PropTypes.func.isRequired
};

export default SelectSortOrder;
