import React from "react";

const BookList = ({books}) => {
    return (
       <>
        {books.map((book) =>(
            <div className="books" key={book.id}>
                <ul>
                <li>{book.title}
                <span> By </span>
                {book.author}</li>
                </ul>
            </div>
        ))}
      </>
    )
}

export default BookList;