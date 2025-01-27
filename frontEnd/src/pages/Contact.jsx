import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
       <h1 className="text-3xl font-semibold mt-4"> Contact Us </h1>
      <main className='flex flex-col gap-20  sm:my-24'>
        <section className="flex flex-col-reverse gap-4 sm:flex-row">
         
          <div className='w-full sm:w-1/2' >
            <img className='m-auto w-52 sm:w-72' src={assets.logo_img} alt="" />
          </div>
          <div className=' w-full sm:w-1/2   text-gray-500 font-normal self-center'>
            <div className='pt-6'>
              <p >
                Tel : +20102150911
              </p>
              <p className=''>
                Email: m.abelraouf1010@gmail.com
              </p>
            </div>
            <p className='pt-6 font-semibold text-black'>
              CAREERS AT MOSHOP
            </p>
            <p className='pt-4'>
              Learn more about our teams and job openings
            </p>
          </div>

        </section>

      </main>
    </div>
  )
}

export default Contact
