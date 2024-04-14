import React from 'react'
import { CiSearch } from 'react-icons/ci'

export default function SearchMenu() {
    return (
        <div className=' rounded-lg cursor-pointer'>
            <div className='border border-gray-400 shadow-lg  rounded-lg m-2 flex py-2 pl-4 pr-2 gap-2 bg-gray-200'>
                <CiSearch className='text-xl font-bold' />
                <input placeholder='Search' className='bg-gray-200 text-black focus:outline-none'></input>
            </div>
        </div>
    )
}
