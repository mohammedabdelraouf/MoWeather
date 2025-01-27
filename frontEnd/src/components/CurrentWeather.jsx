import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/appContext'
import { assets } from '../assets/assets';


const CurrentWeather = () => {

    // const { weather, error,getWeather, lat ,lon} = useContext(AppContext)
    // useEffect(()=>{
    //     getWeather();
    // },[]);
   
    const weather ={
        name: 'Khankah'
        ,weather: [{
            description: 'cloudy'
        }]
        ,main : {
            temp: 25,
            humidity:40
        }
    }
    return (
        <div className=' rounded-3xl px-10 py-3 text-center w-full bg-[rgba(76,157,255,0.33)]'>
            {/* <div className="flex gap-2 justify-center rounded-2xl py-1">
                {error && <p >{error}</p>}
                
            </div> */}
            {weather && (
                <div  className='flex flex-col sm:flex-row justify-between items-center'>
                    <div className=''>
                        <p className='text-2xl mb-10'> <i className='fas fa-location-dot' ></i> {weather.name} <i className='fas fa-angle-right'> </i></p>
                        <p className='text-6xl font-semibold mb-20 '> {weather.weather[0].description}</p>

                        <div className='flex-col gap-2'> 
                            <p className='text-3xl font-bold'>{weather.main.temp}°C</p> 
                            <p className='font-semibold my-4' >Humidity: {weather.main.humidity}%</p>
                        </div>
                        <div>
                            <p>{Date.now}</p>
                        </div>
                        <button  className='bg-green-200  px-3 py-1 text-lg rounded-2xl cursor-pointer self-center' >      
                        <i className='fas fa-arrow-rotate-right'></i>
                        </button>
                    </div>
                    <div className='text-9xl self center' >
                       <img src={assets.logo_img} className='mt-10  w-32 sm:w-52' alt="" />
                    </div>
                    
                </div>
            )}
        </div>
    )
}

export default CurrentWeather
