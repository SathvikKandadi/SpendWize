import React from 'react'

export default function SpendCard() {
    return (
        <div>
            <div className='border rounded-2xl p-2 shadow-lg'>
                <div className='text-xl text-gray-500 '>JANUARY 2023</div>
                <div className='w-full overflow-hidden'>
                    <div className='text-lg text-blue-900 bg-gray-200 rounded p-1 w-1/2'>Housing -₹7,400</div>
                </div>

                <div className='text-lg text-blue-900 flex justify-between bg-gray-200 rounded p-1 m-2'>
                    <div>Food & drinks</div>
                    <div>-₹3,400</div>
                    </div>
                <div className='text-lg text-blue-900'>Transport -₹900</div>
                <div className='text-lg text-blue-900'>Bills -₹913</div>
                <div className='text-lg text-blue-900'>Entertainment -₹1,330</div>
                <div className='text-lg text-blue-900'>Education -₹875</div>
                <div className='text-lg text-blue-900'>Shopping -₹5,400</div>
                <div className='text-lg text-blue-900'>Others -₹1,210</div>

                <div className="h-4 w-full bg-gray-200 rounded overflow-hidden">
                    <div className="h-full bg-green-500 w-1/2"></div>
                </div>

            </div>
        </div>

    )
}
