import React from "react";
import "./buttons.css";
import { categories } from "../../data";

const Buttons = ({ filteredCategory, setFilteredCategory }) => {
  return (
    <div className="filter-buttons">
      {categories.length > 0 &&
        categories.map((category) => (
          <button
            className={
              filteredCategory === category.code
                ? "filter-btn active"
                : "filter-btn"
            }
            key={category.id}
            onClick={() => setFilteredCategory(category.code)}
          >
            {category.name}
          </button>
        ))}
    </div>
  );
};

export default Buttons;
