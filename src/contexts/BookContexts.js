import React, { createContext, useState,useReducer,useEffect } from 'react';
import {v4} from 'uuid';
import {BookReducer} from '../reducers/bookReducer';
export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, dispatch] = useReducer(BookReducer, [], () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('books',JSON.stringify(books));
  },[books]);
  return (
    <BookContext.Provider value={{books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};
export default BookContextProvider;