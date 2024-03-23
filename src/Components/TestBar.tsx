import React from 'react'

type expense = {
    category : string,
    amount : string,
    percentage : string,
}

export default function TestBar({category , amount , percentage} : expense) {
    const barStyle = {
        width: `calc(${percentage} * 100%)` // Calculate width based on percentage
    };
    return (
        <div className='relative m-2'>
            <div style={barStyle} className={`bg-zinc-900  h-8  relative z-0 rounded-md p-1`}></div>
            <div className='flex justify-between absolute inset-0 z-10 text-lg text-white pl-1 pr-1'>
                <div>{category}</div>
                <div>{amount}</div>
            </div>
        </div>
    )
}
