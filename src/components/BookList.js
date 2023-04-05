import React from "react";

const BookList = ({books}) => {
    return (
       <div className="book-wrapper">
        {books.map((book) =>(
            <div className="books" key={book.id}>
                <ul>
                <li>{book.title}</li>
                <li style={{paddingLeft: '2rem'}}><span style={{fontWeight: '700', fontSize: '20px'}}> by </span>{book.author}</li>
                </ul>
            </div>
        ))}
      </div>
    )
}

export default BookList;