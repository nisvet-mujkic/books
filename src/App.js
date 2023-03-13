import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

export default function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log("Add book: " + title);
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
