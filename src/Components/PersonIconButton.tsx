import React from 'react'
import { IoPersonCircleOutline } from 'react-icons/io5'

export default function PersonIconButton() {
    return (
        <button className='border rounded-full  m-2 w-[44px] h-[44px] flex justify-center items-center hover:bg-slate-700 hover:text-white'>
            <IoPersonCircleOutline className='text-[40px]   rounded-full shadow-lg' />
        </button>
    )
}
