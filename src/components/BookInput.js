import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook, addNewBook } from '../redux/books/booksSlice';

const BookInput = () => {
  const titleStyele = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: '-0.18px',
    color: '#888',
    margin: '0.188rem 2.125rem 0 6.18rem',
    padding: '0.813rem 35.688rem 0.813rem 1.063rem',
  };
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({
      item_id: uuidv4(),
      category,
      title,
      author,
    }))
      .then(() => dispatch(addNewBook({
        item_id: uuidv4(),
        category,
        title,
        author,
      })));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div className="form-wrapper">
      <h2 style={titleStyele}>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          className="title"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="author"
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <select
          id="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ paddingRight: '5px' }}
        >
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-Fiction</option>
          <option value="mystery">Mystery</option>
          <option value="sci-fi">Science Fiction</option>
        </select>
        <button type="submit" className="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookInput;
