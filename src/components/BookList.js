import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook, getBooks } from '../redux/books/booksSlice';
import 'react-circular-progressbar/dist/styles.css';

const BookList = () => {
  const randomChapter = Math.floor(Math.random() * 20) + 1;
  const progress = randomChapter === 4 ? 20 : Math.floor(Math.random() * 81) + 20;
  const percentage = `${progress}%`;
  const categoryStyle = {
    fontSize: '0.875rem',
    margin: '0 2.438rem 0 0',
    opacity: '.5',
  };
  const titleStyle = {
    margin: '0.188rem 2.188rem 0 0',
    fontSize: '1.375rem',
    fontWeight: 'bold',
    letterSpacing: '-0.2px',
  };
  const authorStyle = {
    margin: '0.25rem 0 0',
    fontSize: '0.875rem',
    fontWeight: '300',
    color: '#4386bf',
    opacity: '0.5',
  };
  const chapterNo = {
    margin: '0.438rem 2.813rem 0.25rem 3.688rem',
    fontSize: '1rem',
    fontWeight: '300',
    fontStretch: 'normal',
    letterSpacing: '-0.4px',
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
        <div className="book-wrapper flex" key={uuidv4()}>
          <div className="books">
            <p className="black category" style={categoryStyle}>{book.category}</p>
            <p className="black Roboto title" style={titleStyle}>{book.title}</p>
            <p
              className="Roboto author"
              style={authorStyle}
            >
              {book.author}
            </p>
            <button className="pointer Roboto btn comments-btn" type="button">Comments</button>
            <span className="left-line border" />
            <button
              type="button"
              id="button"
              className="pointer Roboto btn remove-btn"
              onClick={() => {
                dispatch(removeBook(book.item_id));
              }}
            >
              remove
            </button>
            <span className="left-line border" />
            <button type="button" className="pointer Roboto btn edit-btn">Edit</button>
          </div>

          <div className="wrapper flex">
            <div className="progress">
              <CircularProgressbar className="progress-bar" value={progress} />
            </div>
            <div className="percentage">
              <h3 style={{ margin: '0.063rem 0 0 0.688rem', fontSize: '2rem' }}>{percentage}</h3>
              <p
                className="black"
                style={{
                  margin: '0.438rem 0 0.75rem 0.75rem', opacity: '0.5', fontSize: '0.875rem',
                }}
              >
                Completed
              </p>
            </div>
            <span className="left-line2 border" />
            <div className="chapter-info">
              <h3 className="Roboto current-chap">CURRENT CHAPTER</h3>
              <h3 className="black Roboto" style={chapterNo}>{`chapter ${randomChapter}`}</h3>
              <button type="button" className="pointer update-btn">UPDATE PROGRESS</button>
            </div>
          </div>
        </div>
      ))}
      <span className="line border" />
    </div>
  );
};

export default BookList;
