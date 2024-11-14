import React from "react";

const PriceFilter = ({ value, onChange }) => (
  <div>
    <label>Price Range: ${value}</label>
    <input
      type="range"
      min="1"
      max="500"
      value={value}
      onChange={(e) => onChange(parseInt(e.target.value, 10))}
    />
  </div>
);

export default PriceFilter;
