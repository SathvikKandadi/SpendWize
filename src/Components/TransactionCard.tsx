import React from 'react'
import { RiNetflixFill } from "react-icons/ri";

export default function TransactionCard() {
    return (
        <div className='w-[350px] h-[150px] shadow-md rounded-lg m-2 cursor-pointer hover:shadow-xl bg-white'>
            <div className='flex border-b-2 p-2 justify-between text-slate-500 text-lg'>
                <div className='font-semibold'>Netflix</div>
                <div>11 April , 12:04 PM</div>
            </div>
            <div className='flex justify-between items-center h-[100px] p-2'>
                <div><span className='text-2xl text-slate-400 font-bold mr-1'>-</span><span className='font-semibold text-2xl'>₹1500</span></div>
                <div className='flex bg-gray-200 p-2 rounded-lg text-slate-700 font-semibold'>
                    <RiNetflixFill className='text-xl'/>
                    SUBSCRIPTION
                </div>
            </div>
        </div>
    )
}
