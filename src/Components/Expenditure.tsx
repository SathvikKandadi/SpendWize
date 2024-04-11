import React from 'react'
import LineGraph from './LineGraph'

export default function Expenditure() {
  return (
    <div className='w-[1000px] h-[250px]  bg-white shadow-lg rounded-lg p-2'>
        <div>Total Expenditure</div>
        <div className='w-[800px] h-[200px]'>
            <LineGraph/>
        </div>
        {/* <div className='w-[200px] h-[200px] rounded-full bg-red-500 flex justify-center items-center'>
            <div className='w-[150px] h-[150px] rounded-full bg-white '>

            </div>
        </div> */}
    </div>
  )
}
