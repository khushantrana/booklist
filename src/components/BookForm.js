import React,{useContext,useState} from 'react'

import { BookContext } from '../contexts/BookContexts';

const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const { dispatch } = useContext(BookContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_BOOK', book: {
                title,author
            }
        });
        setAuthor('');
        setTitle('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="book title" required value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="book author" required value={author} onChange={(e) => setAuthor(e.target.value)} />
            <input type="submit" value="add book"/>
        </form>
    );
};

export default BookForm;