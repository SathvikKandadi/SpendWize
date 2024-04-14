"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { CiMoneyCheck1 } from 'react-icons/ci'

export default function TransactionsButton() {

    const router = useRouter();
    return (
        <button className='flex border rounded-lg bg-white mt-2 mb-1 mx-1 h-[42px] w-[150px] justify-center items-center gap-2 shadow-lg hover:bg-slate-700 hover:text-white' onClick={() => router.push('/transactions')}>
            <CiMoneyCheck1 className='text-[20px] font-bold' />
            Transactions
        </button>
    )
}
