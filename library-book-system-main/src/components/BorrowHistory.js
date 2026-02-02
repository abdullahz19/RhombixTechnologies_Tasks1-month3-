import React from 'react';

export default function BorrowHistory({ history = [] }) {
  return (
    <div className="borrow-history">
      <h4>Borrowing History</h4>
      {history.length === 0 ? (
        <div className="muted">No history yet.</div>
      ) : (
        <ul>
          {history.map(h => (
            <li key={h.id}>
              <strong>{h.title}</strong> {h.action} <span className="muted">{new Date(h.date).toLocaleString()}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
