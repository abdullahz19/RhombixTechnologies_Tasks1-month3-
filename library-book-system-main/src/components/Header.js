import React from 'react';

export default function Header({ total, borrowed }) {
  return (
    <header className="app-header">
      <h1>My Book Library</h1>
      <div className="header-stats">
        <span>Total: {total}</span>
        <span>Borrowed: {borrowed}</span>
      </div>
    </header>
  );
}
