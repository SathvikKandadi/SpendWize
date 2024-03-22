import React from 'react'
import SpendCard from './SpendCard'

export default function Summary() {

    const months:string[] = ["JANUARY 2023" , "February 2023", "March 2023", "April 2023", "May 2023", "June 2023", "July 2023", "August 2023", "September 2023", "October 2023", "November 2023", "December 2023" ]
    return (
        <div className='w-full h-full'>
            <div className='m-2'>
                <div className='text-blue-900 text-2xl font-bold'>Spending Summary</div>
                <div className='flex justify-between'>
                    <div>See where your money is going exactly</div>
                    <div className='border-2 rounded p-2'><input placeholder='Select Year'></input></div>
                </div>
                <div className='grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-3 gap-2 w-full'>
                    {
                        months.map((month) => (
                            <div className='col-span-1'><SpendCard month={month}/></div>
                        ))
                    }
                    {/* <div className='col-span-1'><SpendCard></SpendCard></div>
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
                    <div className='col-span-1'><SpendCard></SpendCard></div> */}
                    
                </div>
            </div>
        </div>

    )
}
