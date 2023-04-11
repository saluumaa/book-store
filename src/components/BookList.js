import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const BookList = () => {
  const books = useSelector((state) => state.allBooks.books);
  const dispatch = useDispatch();
  return (
    <div className="book-wrapper">
      {books.map((book) => (
        <div className="books" key={book.id}>
          <h4>{book.category}</h4>
          <strong>{book.title}</strong>
          <span style={{ fontWeight: '900', fontSize: '23px' }}> by </span>
          <p>{book.author}</p>
          <button
            type="button"
            className="remove-btn"
            onClick={() => {
              dispatch(removeBook(book.id));
            }}
          >
            remove
          </button>
        </div>
      ))}

    </div>
  );
};

export default BookList;
