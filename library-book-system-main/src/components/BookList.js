import React from 'react';
import BookCard from './BookCard';

export default function BookList({ books, onToggleBorrow }) {
  if (!books || books.length === 0) return <div className="empty">No books found.</div>;

  return (
    <div className="book-list">
      {books.map(b => (
        <BookCard key={b.id} book={b} onToggle={() => onToggleBorrow(b.id)} />
      ))}
    </div>
  );
}
