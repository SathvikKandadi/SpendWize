import ArrowRight from '@/Icons/ArrowRight'
import React from 'react'

export default function Signup() {
    return (
        <div className='text-black relative z-[2] px-8 py-10 border '>
            <h1 className='text-xl font-semibold'>Welcome to SpendWize</h1>
            <h1>Login to spendwize if you can because we don't have a login flow yet</h1>
            <div className='flex gap-2'>
                <div>
                    <label>First Name</label>
                    <br />
                    <input type='text' placeholder='John' className='p-2 border rounded-lg'></input>
                </div>
                <div>
                    <label>Last Name</label>
                    <br />
                    <input type='text' placeholder='Doe' className='p-2 border rounded-lg'></input>
                </div>
            </div>
            <div>
                <label>Email Address</label>
                <br/>
                <input type='text' placeholder='example@gmail.com' className='p-2 border rounded-lg'></input>
            </div>
            <div>
                <label>Password</label>
                <br/>
                <input type='password' placeholder='........' className='p-2 border rounded-lg'></input>
            </div>
            <div>
                <label>Re-Enter Password</label>
                <br/>
                <input type='password' placeholder='........' className='p-2 border rounded-lg'></input>
            </div>
            <button className='border rounded-lg my-5 p-2'>Sign up <ArrowRight/></button>
            <hr />
            <button className='border rounded-lg my-5 p-2'>Google</button>
        </div>
    )
}
