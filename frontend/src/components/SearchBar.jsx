import React from 'react'
import { FcSearch } from "react-icons/fc";

const SearchBar = () => {
  return (
    <div className='flex'>
        <input
            type="text"
            placeholder="Search for a company"
            className="border-2 border-gray-300 p-2 rounded-lg"
        />
        <div className=" text-white p-2 rounded-lg ml-2">
            <FcSearch size={20} />

        </div>
    </div>
  )
}

export default SearchBar