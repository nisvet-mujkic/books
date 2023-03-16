import BookShow from "./BookShow";

export default function BookList({ books, onDelete, onEdit }) {
  const renderedBooks = books.map((book) => (
    <BookShow onDelete={onDelete} onEdit={onEdit} key={book.id} book={book} />
  ));

  return <div className="book-list">{renderedBooks}</div>;
}
