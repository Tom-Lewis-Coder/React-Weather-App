import React from 'react'

const SearchBar = props => {

    return(
        <div className="search-box" >
                <input
                    className="search-bar"
                    name="search-bar"
                    type="text"
                    placeholder="Search..."
                    value={props.value}
                    onKeyPress={props.loadWeather}
                    onChange={props.handleChange}
                />
        </div>
    )
}

export default SearchBar