import React from 'react';
import { v4 } from 'uuid';
export const BookReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return [...state, {
                author: action.book.author,
                title: action.book.title,
                id: v4()
            }];
        case 'REMOVE_BOOK':
            return (state.filter(book => book.id !== action.id));
        default:
            return state;
    }
};