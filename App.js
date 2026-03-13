import React, { useState } from "react";
import BookForm from "./BookForm";
import BookList from "./BookList";
import SearchBar from "./SearchBar";

function App() {

  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  const addBook = (title) => {
    setBooks([...books, { id: Date.now(), title }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Library Management System</h1>
      <SearchBar setSearch={setSearch} />
      <BookForm addBook={addBook} />
      <BookList books={filteredBooks} removeBook={removeBook} />
    </div>
  );
}

export default App;