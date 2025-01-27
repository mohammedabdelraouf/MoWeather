import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='text-start w-full flex flex-col md:flex-row gap-16 bg-slate-800 py-5 sm:py-10 px-5 mt-5 items-start'>
        {/* about me section */}
        <section className=' w-full md:w-1/3'>
            <div className='flex gap-2'>
                <h1 className='text-xl font-extrabold text-white' > MoWeather </h1>
                <img src={assets.logo_img} className='w-5' alt="" />
            </div>
            <p className=' text-gray-400 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis culpa, repellat voluptatum fuga 
                ea, repellendus, omnis in consequuntur natus adipisci quas aperiam tempora 
                illo ipsum. Modi sunt deserunt reiciendis ipsa.</p>
        </section>
        <div className=' gap-16 flex flex-col sm:flex-row md:w-2/3  md:justify-evenly'>
        <section>
                <h6 className='text-xl font-extrabold text-white'> Other Works</h6>
                <ul className=' text-gray-400 font-semibold'>
                    <li className='cursor-pointer'>E-commerce</li>
                    <li className='cursor-pointer'>Portofolio</li>
                </ul>
        </section>

        <section>
                <h6 className=' text-xl font-extrabold text-white'> Reach Me Out</h6>
                <ul className=' text-gray-400 font-semibold'>
                    <li className='cursor-pointer'>m.abdelraouf1010@gmail.com</li>
                    <li className='cursor-pointer'>+201021550911</li>
                </ul>
        </section>
        </div>
        
      
    </div>
  )
}

export default Footer
