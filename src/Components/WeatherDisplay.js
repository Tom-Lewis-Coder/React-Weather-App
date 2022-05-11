import React from 'react'

const WeatherDisplay = ({temp, weather, src}) => {

    return(
        <div>
            <div className="weather-box">
                <div className="temp">{temp}°c</div>
                <div className="weather">{weather}</div>
            </div>
            <div className="weather-icon">
                <img className="icon" alt="" src={src} />
            </div>
       </div>
    )

}

export default WeatherDisplay