import React, {useState} from "react";

const BookInput = ({addNewBook}) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewBook(title, author);
        setTitle ('')
        setAuthor('')
    }

    return (
       <>
       <form onSubmit={handleSubmit} className="form-container" >
            <input className="title" type="text" 
            placeholder="title" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}/>
            <input className="author" type="text" 
            placeholder="author" 
            value={author}
            onChange={(e) => setAuthor(e.target.value)}/>
            <button type="submit">Submit</button>
       </form>
       </>
    )
}

export default BookInput;