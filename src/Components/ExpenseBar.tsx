import React from 'react'

type expense = {
    category : string,
    amount : string,
    percentage : string,
}

export default function ExpenseBar({category , amount , percentage} : expense) {
    const barStyle = {
        width: `calc(${percentage} * 100%)` // Calculate width based on percentage
    };
    return (
        <div className='relative m-2'>
            <div style={barStyle} className={`bg-gray-200  h-8 border-2 relative z-0 rounded p-1`}></div>
            <div className='flex justify-between absolute inset-0 z-10 text-lg text-blue-900 pl-1 pr-1'>
                <div>{category}</div>
                <div>{amount}</div>
            </div>
        </div>
    )
}
