import React from "react";

const Text = ({ style, className, value }) => (
  <p style={style} className={className}>
    {value}
  </p>
);


export default Text