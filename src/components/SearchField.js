import React from 'react';

const SearchField = (props) => {
    return (
        <div className='col col-sm-4'>
            <input
                className='form-control'
                placeholder='Search...'
                value={props.value}
                onChange={(event) => props.setSearchTitle(event.target.value)}></input>
        </div>
    )
}

export default SearchField;