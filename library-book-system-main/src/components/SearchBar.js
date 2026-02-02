import React from 'react';

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="search"
        placeholder="Search by title or author..."
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}
