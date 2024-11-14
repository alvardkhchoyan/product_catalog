import React, { useState, useEffect } from "react";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import BrandFilter from "../BrandFilter/BrandFilter";
import PriceFilter from "../PriceFilter/PriceFilter";
import RatingFilter from "../RatingFilter/RatingFilter";
import "./filterPanel.css";

const FilterPanel = ({ onFilterChange }) => {
  const savedFilters = JSON.parse(localStorage.getItem("filters")) || {
    category: "",
    brand: "",
    price: 500,
    rating: 0,
  };

  const [filters, setFilters] = useState(savedFilters);

  useEffect(() => {
    localStorage.setItem("filters", JSON.stringify(filters));
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  const handleFilterChange = (filterName, value) => {
    const updatedFilters = { ...filters, [filterName]: value };
    setFilters(updatedFilters);
  };

  return (
    <div className="filter-panel">
      <h3>Product Filtering</h3>
      <CategoryFilter
        value={filters.category}
        onChange={(value) => handleFilterChange("category", value)}
      />
      <BrandFilter
        value={filters.brand}
        onChange={(value) => handleFilterChange("brand", value)}
      />
      <PriceFilter
        value={filters.price}
        onChange={(value) => handleFilterChange("price", value)}
      />
      <RatingFilter
        value={filters.rating}
        onChange={(value) => handleFilterChange("rating", value)}
      />
    </div>
  );
};

export default FilterPanel;
