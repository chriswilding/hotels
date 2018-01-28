import React from "react";

const SelectSortOrder = ({ order }) => {
  return (
    <select value={order}>
      <option value="default">Default</option>
      <option value="descending">Highest to lowest</option>
      <option value="ascending">Lowest to highest</option>
    </select>
  );
};

export default SelectSortOrder;
