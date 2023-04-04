import React, {useState} from "react";
import { v4 as uuidv4 } from "uuid";
import BookInput from './BookInput'
import BookList from './BookList'

const Books = () =>{
    const [books, setBooks] = useState ([
        {
            id: uuidv4(),
            title: 'Book 1',
            author: 'Salma'
        },
        {
            id: uuidv4(),
            title: 'Book 2',
            author: 'Hafsa'
        },
        {
            id: uuidv4(),
            title: 'Book 3',
            author: 'Zainab'
        },      
    ])

    function addNewBook(title, author) {
        const newBook = {
            id:uuidv4(),
            title,
            author,
        };
    setBooks([...books, newBook])
    }
 
    return (
      <div>
        <BookList books={books} />
        <BookInput addNewBook={addNewBook} />
      </div>
    )
}

export default Books;