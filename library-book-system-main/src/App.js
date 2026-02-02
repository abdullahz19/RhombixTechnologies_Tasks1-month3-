import React, { useEffect, useState, useMemo } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import BookList from './components/BookList';
import BorrowHistory from './components/BorrowHistory';
import initialBooks from './data/books';
import { loadState, saveState } from './utils/storage';

function App() {
  const [books, setBooks] = useState(() => loadState('books', initialBooks));
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [history, setHistory] = useState(() => loadState('history', []));

  useEffect(() => saveState('books', books), [books]);
  useEffect(() => saveState('history', history), [history]);

  const categories = useMemo(() => {
    const cats = new Set(books.map(b => b.category));
    return ['All', ...Array.from(cats)];
  }, [books]);

  function handleSearch(value) {
    setSearch(value);
  }

  function handleCategory(cat) {
    setCategory(cat);
  }

  function toggleBorrow(bookId) {
    setBooks(prev => prev.map(b => b.id === bookId ? { ...b, isBorrowed: !b.isBorrowed } : b));
    const book = books.find(b => b.id === bookId);
    if (book) {
      const action = book.isBorrowed ? 'returned' : 'borrowed';
      const entry = { id: Date.now(), bookId, title: book.title, action, date: new Date().toISOString() };
      setHistory(prev => [entry, ...prev]);
    }
  }

  const filtered = books.filter(b => {
    const matchSearch = (b.title + ' ' + b.author).toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === 'All' || b.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <div className="app-root">
      <Header total={books.length} borrowed={books.filter(b => b.isBorrowed).length} />
      <main className="app-main">
        <section className="sidebar">
          <SearchBar value={search} onChange={handleSearch} />
          <CategoryFilter categories={categories} selected={category} onSelect={handleCategory} />
          <BorrowHistory history={history} />
        </section>
        <section className="content">
          <BookList books={filtered} onToggleBorrow={toggleBorrow} />
        </section>
      </main>
    </div>
  );
}

export default App;
