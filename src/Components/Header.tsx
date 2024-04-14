import React from 'react'
import HomeButton from './HomeButton';
import TransactionsButton from './TransactionsButton';
import AddButton from './AddButton';
import PersonIconButton from './PersonIconButton';
import SearchMenu from './SearchMenu';




export default function Header() {


    return (
        <div className='h-full w-full bg-gray-200 py-8'>
            <div className=' mx-8 flex justify-between '>
            <SearchMenu/>
            <div className='flex'>
                <div className=' rounded-lg flex  font-semibold'>
                    <HomeButton/>
                    <TransactionsButton/>
                    <AddButton/>
                </div>
                <PersonIconButton/>
            </div>

        </div>
        </div>
        
    )
}
