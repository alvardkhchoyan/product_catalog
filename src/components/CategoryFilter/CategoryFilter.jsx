import React from "react";

const CategoryFilter = ({ value, onChange }) => (
  <div>
    <label>Category</label>
    <select onChange={(e) => onChange(e.target.value)} value={value}>
      <option value="">All</option>
      <option value="Electronics">Electronics</option>
      <option value="Footwear">Footwear</option>
      <option value="Clothing">Clothing</option>
    </select>
  </div>
);

export default CategoryFilter;
