import React from 'react'

const Location = ({city, country}) => {
    return(
        <div className="location-box">
        <div className="location">{city}, {country}</div>
        </div>
    )
} 

export default Location