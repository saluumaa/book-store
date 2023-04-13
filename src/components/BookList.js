import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook, getBooks } from '../redux/books/booksSlice';
import 'react-circular-progressbar/dist/styles.css';

const BookList = () => {
  const categoryStyle = {
    fontSize: '0.875rem',
    fontFamily: 'Montserrat, sans-serif',
    color: '#121212',
    margin: '0 2.438rem 0 0',
    fontWeight: 'bold',
  };
  const titleStyle = {
    margin: '0.188rem 2.188rem 0 0',
    fontFamily: 'Roboto Slab, serif',
    fontSize: '1.375rem',
    color: '#121212',
    letterSpacing: '-0.2px',
  };
  const authorStyle = {
    margin: '0.25rem 0 0',
    fontFamily: 'Roboto Slab, serif',
    fontSize: '0.875rem',
    fontWeight: '300',
    color: '#4386bf',
  };
  const chapterNo = {
    margin: '0.438rem 2.813rem 0.25rem 3.688rem',
    fontFamily: 'Roboto Slab, serif',
    fontSize: '1rem',
    fontWeight: '300',
    fontStretch: 'normal',
    letterSpacing: '-0.4px',
    color: '121212',
  };
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
    <div className="main-wrapper">
      {books.map((book) => (
        <div className="book-wrapper" key={uuidv4()}>
          <div className="books">
            <p className="par category" style={categoryStyle}>{book.category}</p>
            <p className="title" style={titleStyle}>{book.title}</p>
            <p
              className="par author"
              style={authorStyle}
            >
              {book.author}
            </p>
            <button className="btn comments-btn" type="button">Comments</button>
            <span className="left-line" />
            <button
              type="button"
              id="button"
              className="btn remove-btn"
              onClick={() => {
                dispatch(removeBook(book.item_id));
              }}
            >
              remove
            </button>
            <span className="left-line" />
            <button type="button" className="btn edit-btn">Edit</button>
          </div>

          <div className="wrapper">
            <div className="progress">
              <CircularProgressbar className="progress-bar" value={70} />
            </div>
            <div className="percentage">
              <h3 style={{ margin: '0.063rem 0 0 0.688rem', fontSize: '2rem' }}>64%</h3>
              <p style={{
                margin: '0.438rem 0 0.75rem 0.75rem', opacity: '0.5', fontSize: '0.875rem', color: '121212',
              }}
              >
                Completed
              </p>
            </div>
            <span className="left-line2" />
            <div className="chapter-info">
              <h3 className="current-chap">Current Chapter</h3>
              <h3 style={chapterNo}>Chapter 17</h3>
              <button type="button" className="update-btn">UPDATE PROGRESS</button>
            </div>
          </div>
        </div>
      ))}
      <span className="line" />
    </div>
  );
};

export default BookList;
