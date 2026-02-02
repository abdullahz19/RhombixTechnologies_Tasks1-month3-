import React from 'react';

export default function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <div className="category-filter">
      <h4>Categories</h4>
      <ul>
        {categories.map(c => (
          <li key={c}>
            <button className={c === selected ? 'active' : ''} onClick={() => onSelect(c)}>{c}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
