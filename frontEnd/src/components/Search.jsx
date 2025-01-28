import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';

const Search = () => {
  const {showSearch , setShowSearch , doSearch} = useContext(AppContext)
  const [search, setSearch] = useState('');
  const [error , setError ]  = useState(null);

  const handleSearch =  ()=>{

      console.log(search)
      if(search !== '' )
        {
          doSearch(search);
        }
      else
      {
        setError('please fill this field !')
      }
  }

  return showSearch ?(
    <div>
      <div className=' flex  my-5 items-center justify-between w-full sm:w-8/12 mx-auto' >
        <div className="flex rounded-4xl border items-center justify-between w-full  py-3 px-6 ">
          <input onChange={(e)=>{setSearch(e.target.value)}} className='w-full outline-none ' type="text" placeholder='Search by zip Code'   />
          <i onClick={()=>{ handleSearch(search) }} className='fas fa-magnifying-glass cursor-pointer' ></i>
        </div>
        <i onClick={()=>{setShowSearch(false)}} className='fas fa-xmark w-10 cursor-pointer'></i>
      </div>
      <div className={`${error !== '' ? '' : 'hidden'}   text-lg text-red-800  font-bold`}> {error} </div>
    </div>
  ): null
}

export default Search
