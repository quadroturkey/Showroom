import React from 'react'

const Search = (props) => {
    return (
        <div className="search">
            <input onChange={props.onSearch} />
        </div>
    )
}

export default Search;