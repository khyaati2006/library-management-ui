import React from "react";

function BookList({ books, removeBook }) {

  return (
    <div>
      <h2>Book List</h2>

      {books.length === 0 && <p>No books found</p>}

      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title}
            <button onClick={() => removeBook(book.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
