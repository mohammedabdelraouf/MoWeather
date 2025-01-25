import React, { createContext, useState } from 'react'
export const AppContext = createContext();

const AppContextProvider = (props) => {
    const API_key = 'e41d6667c5a7465f072563c6408855c0';
    const [weather, setWeather] =useState(null);
    const [error, setError] = useState(null);
    const[lat, setLat] = useState(null)
    const[lon, setLon] = useState(null)

    const getWeather = () => {
        // Check if Geolocation is supported
        if ("geolocation" in navigator) {
          setError(null);
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const lat = position.coords.latitude;
              const lon = position.coords.longitude;
    
              try 
              {
                const response = await fetch(
                  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_key}`
                );
                const data = await response.json();
                console.log(data);
                setWeather(data);
              } 
              catch (err) 
              {
                setError("Failed to fetch weather data.");
                console.error(err);
              }
              
            },
            (error) => {
              setLoading(false);
              setError("Unable to get your location.");
              console.error(error);
            }
          );
        } else {
          setError("Geolocation is not supported by your browser.");
        }
      };
    

    const value = {
        weather, setWeather
        ,error, setError, lat , lon ,getWeather
    }
  return (
    <AppContext.Provider value={value}>
             {props.children}
    </AppContext.Provider>
    
  )
}

export default AppContextProvider

