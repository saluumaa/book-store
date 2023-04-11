import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
/* eslint-disable react/prop-types */
const BookList = () => {
  // const {
  //   id, title, author, category,
  // } = useSelector((state) => state.allBooks.books);
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

// BookList.propTypes = {
//   books: PropTypes.arrayOf(
//     PropTypes.shape({
//       item_id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       author: PropTypes.string.isRequired,
//       category: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
// };

export default BookList;
