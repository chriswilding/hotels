import React from "react";

const Facilities = ({ facilities }) => {
  return (
    <div>
      <p>Facilities available at this hotel:</p>
      <ul>{facilities.map(text => <li key={text}>{text}</li>)}</ul>
    </div>
  );
};

export default Facilities;
