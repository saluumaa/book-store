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
          <p className="par category">{book.category}</p>
          <p className="title">{book.title}</p>
          <p className="par author">{book.author}</p>
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
        </div>
      ))}

    </div>
  );
};

export default BookList;
