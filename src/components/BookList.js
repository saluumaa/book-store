import React from 'react';
import PropTypes from 'prop-types';

const BookList = ({ books }) => (
  <div className="book-wrapper">
    {books.map((book) => (
      <div className="books" key={book.id}>
        <ul>
          <li>{book.title}</li>
          <li style={{ paddingLeft: '2rem' }}>
            <span style={{ fontWeight: '700', fontSize: '20px' }}> by </span>
            {book.author}
          </li>
        </ul>
      </div>
    ))}
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BookList;
