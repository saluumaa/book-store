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
          <ul>
            <li>{book.category}</li>
            <li>{book.title}</li>
            <li style={{ paddingLeft: '6rem' }}>
              <span style={{ fontWeight: '700', fontSize: '20px' }}> by </span>
              {book.author}
            </li>
          </ul>
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
