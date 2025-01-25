import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'


const CurrentWeather = () => {

    const { weather, error,getWeather} = useContext(AppContext)
   
    return (
        <div>
            <h1>Weather App</h1>
            {error && <p >{error}</p>}
            <button onClick={()=>getWeather()} className='bg-green-600' >refresh</button>
            {weather && (
                <div >
                    <h3>Weather in {weather.name}</h3>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Humidity: {weather.main.humidity}%</p>
                    <p>Description: {weather.weather[0].description}</p>
                </div>
            )}
        </div>
    )
}

export default CurrentWeather
