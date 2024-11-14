import React from "react";

const BrandFilter = ({ value, onChange }) => (
  <div>
    <label>Brand</label>
    <select onChange={(e) => onChange(e.target.value)} value={value}>
      <option value="">All</option>
      <option value="Brand A">Brand A</option>
      <option value="Brand B">Brand B</option>
      <option value="Brand C">Brand C</option>
      <option value="Brand D">Brand D</option>
      <option value="Brand E">Brand E</option>
    </select>
  </div>
);

export default BrandFilter;
