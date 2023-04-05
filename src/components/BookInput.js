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
       <div className="form-wrapper">
       <form onSubmit={handleSubmit} className="form-container" >
            <input className="title" type="text" 
            placeholder="Title" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}/>
            <input className="author" type="text" 
            placeholder="Author" 
            value={author}
            onChange={(e) => setAuthor(e.target.value)}/>
            <button type="submit" className="submit">Submit</button>
       </form>
       </div>
    )
}

export default BookInput;