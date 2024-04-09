import ArrowRight from '@/Icons/ArrowRight'
import { AiOutlineArrowRight } from "react-icons/ai";
import React from 'react'
import Background from './Background';

export default function Signup() {
    return (
        <div className='flex justify-center  w-full h-screen'>
            <Background></Background>
            <div className='text-white bg-black relative z-[2] px-8 py-10  w-1/3 max-h-[75%] mt-16 rounded-xl shadow-xl'>
            <h1 className='text-xl font-semibold'>Welcome to SpendWize</h1>
            <h1>Login to spendwize if you can because we don't have a login flow yet</h1>
            <div className='flex gap-2 my-2 '>
                <div>
                    <label>First Name</label>
                    <br />
                    <input type='text' placeholder='John' className='p-2 border rounded-lg text-black bg-grey-700' style={{ backgroundColor: '#4B5563' }}></input>
                </div>
                <div>
                    <label>Last Name</label>
                    <br />
                    <input type='text' placeholder='Doe' className='p-2 border rounded-lg '></input>
                </div>
            </div>
            <div className='my-2 '>
                <label>Email Address</label>
                <br/>
                <input type='text' placeholder='example@gmail.com' className='p-2 border rounded-lg w-full'></input>
            </div>
            <div className='my-2'>
                <label>Password</label>
                <br/>
                <input type='password' placeholder='........' className='p-2 border rounded-lg w-full'></input>
            </div>
            <div className='my-2'>
                <label>Re-Enter Password</label>
                <br/>
                <input type='password' placeholder='........' className='p-2 border rounded-lg w-full'></input>
            </div>
            <button className='border rounded-lg my-5 p-2 flex justify-center gap-1 w-full'>Sign up <AiOutlineArrowRight className='pt-2 w-[2px]' /></button>
            <hr />
            <button className='border rounded-lg my-5 p-2 w-full'>Google</button>
        </div>
        </div>
        
    )
}
