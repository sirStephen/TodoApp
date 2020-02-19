import React from 'react';

export const Search = ({ search, onHandleSearch }) => {
    return(
        <div className='p2 search'>
            <input
                className='search-input'
                type="text"
                value={search}
                placeholder='Search Tasks'
                onChange={onHandleSearch}
            />
        </div>
    )
}