// import { useContext } from "react";
// import BooksContext from "../context/books";
import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";

function BookList() {
  const { books } = useBooksContext();
  // const { count, incrementCount } = useContext(BooksContext);
  // {count}
  // <button onClick={incrementCount}>Click</button>

  const renderBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className="book-list">{renderBooks}</div>;
}

export default BookList;
