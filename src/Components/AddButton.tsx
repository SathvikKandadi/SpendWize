"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaPlus } from 'react-icons/fa6'

export default function AddButton() {
    const router = useRouter();
    return (
        <button className='flex border rounded-lg bg-white mt-2 mb-1 mx-1 h-[42px] w-[100px] justify-center items-center gap-2 shadow-lg hover:bg-slate-700 hover:text-white' onClick={() => router.push('/add')}>
            <FaPlus className='text-[20px] font-bold' />
            Add
        </button>
    )
}
