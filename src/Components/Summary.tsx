import React from 'react'
import SpendCard from './SpendCard'

export default function Summary() {
    return (
        <div className='w-full h-full'>
            <div className='m-2'>
                <div className='text-blue-900 text-2xl font-bold'>Spending Summary</div>
                <div className='flex justify-between'>
                    <div>See where your money is going exactly</div>
                    <div className='border-2 rounded p-2'><input placeholder='Select Year'></input></div>
                </div>
                <div className='grid grid-cols-4 gap-2 w-full'>
                    <div className='col-span-1'><SpendCard></SpendCard></div>
                    <div className='col-span-1'><SpendCard></SpendCard></div>
                    <div className='col-span-1'><SpendCard></SpendCard></div>
                    <div className='col-span-1'><SpendCard></SpendCard></div>
                    <div className='col-span-1'><SpendCard></SpendCard></div>
                    <div className='col-span-1'><SpendCard></SpendCard></div>
                    <div className='col-span-1'><SpendCard></SpendCard></div>
                    <div className='col-span-1'><SpendCard></SpendCard></div>
                    <div className='col-span-1'><SpendCard></SpendCard></div>
                    <div className='col-span-1'><SpendCard></SpendCard></div>
                    <div className='col-span-1'><SpendCard></SpendCard></div>
                    <div className='col-span-1'><SpendCard></SpendCard></div>
                    
                </div>
            </div>
        </div>

    )
}
