import React from 'react'
import LineGraph from './LineGraph'
import PieChart from './PieChart'
import DoughnutChart from './DoughnutChart'

export default function Expenditure() {
    return (
        <div className='w-[1000px] h-[335px]  bg-white shadow-lg rounded-lg p-2'>
            <div className='flex'>
                <div className='w-[600px] h-[300px] cursor-pointer'>
                    <LineGraph />
                </div>
                <div className='cursor-pointer ml-[50px]'>
                    <DoughnutChart/>
                </div>
                {/* <div className='cursor-pointer'>
                    <PieChart/>
                </div> */}
            </div>

            {/* <div className='w-[200px] h-[200px] rounded-full bg-red-500 flex justify-center items-center'>
            <div className='w-[150px] h-[150px] rounded-full bg-white '>

            </div>
        </div> */}
        </div>
    )
}
