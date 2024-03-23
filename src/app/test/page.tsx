import Background from '@/Components/Background'
import TestCard from '@/Components/TestCard'
import React from 'react'

const months: string[] = ["January 2023", "February 2023", "March 2023", "April 2023", "May 2023", "June 2023", "July 2023", "August 2023", "September 2023", "October 2023", "November 2023", "December 2023"]

export default function page() {
    return (
        <div className='w-full h-full'>
            <Background></Background>
            <div className='grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-3 gap-2 w-full absolute mt-10 mx-2'>
                {
                    months.map((month, index) => (
                        <div className='col-span-1'><TestCard month={month} /></div>
                    ))
                }
            </div>
        </div>

    )
}
