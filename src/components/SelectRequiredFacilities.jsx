import React from "react";

const onChange = setRequiredFacility => event => setRequiredFacility(event.target.value);

const Checkbox = ({ checked, label, setRequiredFacility }) => (
  <div>
    <input
      type="checkbox"
      value={label}
      onChange={onChange(setRequiredFacility)}
      checked={checked}
    />
    <label>{label}</label>
  </div>
);

const SelectRequiredFacilities = ({ availableFacilities, setRequiredFacility }) => {
  return (
    <fieldset>
      <legend>Pick the facilities you want</legend>
      {Object.keys(availableFacilities).map(facility => (
        <Checkbox
          key={facility}
          checked={availableFacilities[facility]}
          label={facility}
          setRequiredFacility={setRequiredFacility}
        />
      ))}
    </fieldset>
  );
};

export default SelectRequiredFacilities;
