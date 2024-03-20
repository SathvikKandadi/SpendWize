import React from 'react'
import SpendCard from './SpendCard'

export default function Summary() {
    return (
        <div className='w-screen h-screen flex flex-row justify-center items-center'>
            <div className=''>
                <div>Spending Summary</div>
                <div>See where your money is going exactly </div>
                <SpendCard></SpendCard>
            </div>
        </div>

    )
}
