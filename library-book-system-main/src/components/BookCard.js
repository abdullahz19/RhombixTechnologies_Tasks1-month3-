import React from 'react';

export default function BookCard({ book, onToggle }) {
  return (
    <div className={`book-card ${book.isBorrowed ? 'borrowed' : ''}`}>
      <div className="book-info">
        <h3>{book.title}</h3>
        <p className="muted">{book.author}</p>
        <p className="category">{book.category}</p>
      </div>
      <div className="book-actions">
        <button onClick={onToggle}>{book.isBorrowed ? 'Return' : 'Borrow'}</button>
      </div>
    </div>
  );
}
