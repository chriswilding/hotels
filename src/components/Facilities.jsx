import PropTypes from "prop-types";
import React from "react";

const Facilities = ({ facilities }) => (
  <div>
    <p>Facilities available at this hotel:</p>
    <ul>{facilities.map(text => <li key={text}>{text}</li>)}</ul>
  </div>
);

Facilities.propTypes = {
  facilities: PropTypes.arrayOf(PropTypes.string)
};

Facilities.defaultProps = {
  facilities: []
};

export default Facilities;
