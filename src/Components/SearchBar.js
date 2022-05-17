import React from 'react'

const SearchBar = ({ loadWeather, handleChange, value }) => {

    return(
        <div className="search-box" >
                <input
                    className="search-bar"
                    name="search-bar"
                    type="text"
                    placeholder="Search..."
                    value={value}
                    onKeyPress={loadWeather}
                    onChange={handleChange}
                />
        </div>
    )
}

export default SearchBar