import React from "react";

const onChange = setRequiredFacility => event => setRequiredFacility(event.target.value);

const Checkbox = ({ checked, label, setRequiredFacility }) => (
  <div>
    <input
      id={label.replace(" ", "_")}
      type="checkbox"
      value={label}
      onChange={onChange(setRequiredFacility)}
      checked={checked}
    />
    <label htmlFor={label.replace(" ", "_")}>{label}</label>
  </div>
);

const SelectRequiredFacilities = ({ availableFacilities, setRequiredFacility }) => {
  return (
    <div className="select-required-facilities">
      <fieldset>
        <legend>Select the hotel facilities you want:</legend>
        {Object.keys(availableFacilities).map(facility => (
          <Checkbox
            key={facility}
            checked={availableFacilities[facility]}
            label={facility}
            setRequiredFacility={setRequiredFacility}
          />
        ))}
      </fieldset>
    </div>
  );
};

export default SelectRequiredFacilities;
