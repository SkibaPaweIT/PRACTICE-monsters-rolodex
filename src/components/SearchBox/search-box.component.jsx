import React from 'react';
import './search-box.styles.css';


export const SearchBox = ({placeholder ,handleChange}) => (
    <input type='search' 
    className='search'
    placeholder={placeholder} 
    //it's still jsx btw
    //setState is asynchronous. React gives us what should be done after the state change. as a second parameter for example console.log etc
    onChange={handleChange}/> 
);