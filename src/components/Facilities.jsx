import React from "react";

const Facilities = ({ facilities }) => {
  return <ul>{facilities.map(text => <li key={text}>{text}</li>)}</ul>;
};

export default Facilities;
