import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { CiMoneyCheck1 } from "react-icons/ci";



export default function Header() {
    return (
        <div className='relative z-[10] mx-8 inset-y-8 flex justify-between'>
            <div className=' rounded-lg cursor-pointer'>
                <div className='border border-gray-400 shadow-lg  rounded-lg m-2 flex py-2 pl-4 pr-2 gap-2 bg-gray-200'>
                    <CiSearch className='text-xl font-bold' />
                    <input placeholder='Search' className='bg-gray-200 text-black focus:outline-none'></input>
                </div>
            </div>
            <div className='flex'>
                <div className=' rounded-lg flex  font-semibold'>
                    <button className='flex border rounded-lg bg-white mt-2 mb-1 mx-1 h-[42px] w-[100px] justify-center items-center gap-2 shadow-lg hover:bg-slate-700 hover:text-white'>
                    <IoHomeOutline className='text-[20px] font-bold'/>
                        Home
                    </button>
                    <button className='flex border rounded-lg bg-white mt-2 mb-1 mx-1 h-[42px] w-[150px] justify-center items-center gap-2 shadow-lg hover:bg-slate-700 hover:text-white'>
                    <CiMoneyCheck1 className='text-[20px] font-bold'/>
                        Transactions
                    </button>
                </div>
                <button className='border rounded-full  m-2 w-[44px] h-[44px] flex justify-center items-center hover:bg-slate-700 '>
                    <IoPersonCircleOutline className='text-[40px]  hover:text-white rounded-full shadow-lg'/>
                </button>
            </div>

        </div>
    )
}
