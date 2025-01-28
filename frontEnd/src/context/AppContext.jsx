import React, { createContext, useState, useEffect } from "react";


export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [showSearch , setShowSearch] = useState(false);

  const API_key = import.meta.env.VITE_API_KEY; // Use an environment variable for security

  const doSearch = async (zip_code)=>{

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zip_code},us&appid=${API_key}`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      setWeather(data);
      console.log(data);
      
    } catch (err) {
      setError("Failed to fetch weather data.");
      console.error(err);
    }

  }

  const getWeather = async () => {
    if ("geolocation" in navigator) {
      setError(null); // Clear previous errors
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          try {
            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_key}`
            );
            if (!response.ok) {
              throw new Error(`Error: ${response.statusText}`);
            }
            const data = await response.json();
            setWeather(data);
          } catch (err) {
            setError("Failed to fetch weather data.");
            console.error(err);
          }
        },
        (error) => {
          setError("Unable to get your location.");
          console.error(error);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  };

  useEffect(() => {
    getWeather();
  }, []); // Fetch weather on component mount

  const value = { weather, error, getWeather,showSearch , setShowSearch , doSearch};

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
