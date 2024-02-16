 import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryFilter }) {
  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? "selected" : ""}
          onClick={() => onCategoryFilter(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;