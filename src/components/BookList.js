import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, getBooks } from '../redux/books/booksSlice';

const BookList = () => {
  const { books, isLoading, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (isLoading) {
    return <p>please wait it is loading...</p>;
  }

  if (error) {
    return <p>Error occurred while fetching books</p>;
  }

  return (
    <div className="book-wrapper">
      {books.map((book) => (
        <div className="books" key={uuidv4()}>
          <h2>{book.category}</h2>
          <strong>{book.title}</strong>
          <span style={{ fontWeight: '900', fontSize: '23px' }}> by </span>
          <h3>{book.author}</h3>
          <a href="#button">
            <button
              type="button"
              id="button"
              className="remove-btn"
              onClick={() => {
                dispatch(removeBook(book.item_id));
              }}
            >
              remove
            </button>
          </a>
        </div>
      ))}

    </div>
  );
};

export default BookList;
