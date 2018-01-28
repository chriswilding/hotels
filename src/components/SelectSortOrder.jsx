import React from "react";

const SelectSortOrder = () => {
  return (
    <select>
      <option value="default">Default</option>
      <option value="descending">Highest to lowest</option>
      <option value="ascending">Lowest to highest</option>
    </select>
  );
};

export default SelectSortOrder;
