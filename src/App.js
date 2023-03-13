import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

export default function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [...books, { id: 1, title }];
    setBooks(updatedBooks);
  };

  const editBook = () => {};

  const deleteBook = () => {};

  return (
    <div>
      <BookCreate onCreate={createBook} />
      <BookList books={books} />
    </div>
  );
}
