import React from 'react'

export default function page() {
    return (
        <div className='w-full h-screen bg-gray-200'>
            <div className='w-full h-full flex justify-center'>
                <div className='bg-white shadow-xl w-[500px] h-[300px] rounded-lg p-4 mt-[100px]'>
                    <div className='flex justify-center my-2 text-3xl font-semibold'>Enter New Expense</div>
                    <input placeholder='Enter a title' type='text' required className='w-full p-2 bg-gray-900 rounded-lg text-black my-2'></input>
                    <input placeholder='Enter Amount' type='number' required className='w-full p-2 bg-gray-900 rounded-lg text-black my-2'></input>
                    <div className='my-2 w-full '>
                        <select className='w-full p-2 cursor-pointer bg-red-500 text-white rounded-lg'>
                            <option>Food & Drinks</option>
                            <option>Transport</option>
                            <option>Bills</option>
                            <option>Entertainment</option>
                            <option>Shopping</option>
                        </select>
                    </div>
                    <div className='flex justify-center my-2 '>
                        <button className='p-2 rounded border w-full bg-blue-500 text-white hover:bg-blue-700'>Submit</button>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}
