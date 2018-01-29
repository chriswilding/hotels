import PropTypes from "prop-types";
import React from "react";

const onChange = setRequiredFacility => event => setRequiredFacility(event.target.value);

const Checkbox = ({ checked, label, setRequiredFacility }) => (
  <div>
    <label htmlFor={label.replace(" ", "_")}>
      {label}
      <input
        id={label.replace(" ", "_")}
        type="checkbox"
        value={label}
        onChange={onChange(setRequiredFacility)}
        checked={checked}
      />
    </label>
  </div>
);

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  setRequiredFacility: PropTypes.func.isRequired
};

const SelectRequiredFacilities = ({ availableFacilities, setRequiredFacility }) => (
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

SelectRequiredFacilities.propTypes = {
  // availableFacilities could change in future so defined in prop types as object with the lint rule disabled
  availableFacilities: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  setRequiredFacility: PropTypes.func.isRequired
};

export default SelectRequiredFacilities;
