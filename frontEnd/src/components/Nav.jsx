import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {assets} from '../assets/assets.js'
import { AppContext } from '../context/AppContext'
const Nav = () => {
  const {showSearch , setShowSearch} = useContext(AppContext);
  const [side , setSide] = useState(false);
  const location = useLocation();
  useEffect(()=>{
    setSide(false);
  },[location])
  return (
    <div className='bg-slate-800 w-full sm:rounded-b-md flex py-3  sm:px-5 justify-center gap-10 sm:gap-20 lg:gap-40'>
        <section className='flex gap-2 logo'>
          <h1 className='text-xl font-extrabold text-white' > MoWeather </h1>
          <img src={assets.logo_img} className='w-5' alt="" />
        </section>
        <section id="menue" className='sm:flex gap-5 text-white hidden '>
          <NavLink className={`font-semibold border-b`} to={'/'}>Home</NavLink>
          <NavLink className={`font-semibold border-b`} to={'/contact'}>Contact</NavLink>
        </section>
        <section className=' flex gap-3 text-white  items-center self-center'>
          {/* <i className='fas fa-cloud'></i> */}
          <i className='cursor-pointer fab fa-github'></i>
          <i className='cursor-pointer fab fa-linkedin'></i>
          <i onClick={() => { setShowSearch(!showSearch) }} className="cursor-pointer fas fa-magnifying-glass"></i>
          <p className='sm:hidden'>
            <i onClick={()=>{setSide(true)}} className='fas fa-bars cursor-pointer'></i>
          </p>
        </section>

        <aside className={`${side? 'displayed' : 'non-displayed'} `}>
          
          <p onClick={()=>{setSide(false)}} className='text-xl font-bold px-2'> <i className='fas fa-angle-left'></i> Back </p>
          <section id="menue" className=' side-menue mt-10 flex flex-col '>
          <NavLink className={`font-semibold border-b hover:text-blue-400 p-3`} to={'/'}>Home</NavLink>
          <NavLink className={`font-semibold border-b hover:text-blue-400 p-3`} to={'/contact'}>Contact</NavLink>
          </section>
        </aside>
    </div>
  )
}

export default Nav
