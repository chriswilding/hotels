import React from "react";

const onChange = setOrder => event => setOrder(event.target.value);

const SelectSortOrder = ({ order, setOrder }) => {
  return (
    <div className="select-sort-order">
      <label htmlFor="select-sort-order">Select sort order: </label>
      <select id="select-sort-order" value={order} onChange={onChange(setOrder)}>
        <option value="default">Default</option>
        <option value="descending">Highest to lowest</option>
        <option value="ascending">Lowest to highest</option>
      </select>
    </div>
  );
};

export default SelectSortOrder;
