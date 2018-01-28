import React from "react";

const onChange = setOrder => event => setOrder(event.target.value);

const SelectSortOrder = ({ order, setOrder }) => {
  return (
    <select value={order} onChange={onChange(setOrder)}>
      <option value="default">Default</option>
      <option value="descending">Highest to lowest</option>
      <option value="ascending">Lowest to highest</option>
    </select>
  );
};

export default SelectSortOrder;
