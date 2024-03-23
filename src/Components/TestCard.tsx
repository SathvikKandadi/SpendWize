import React from 'react'
import TestBar from './TestBar';


type expense = {
    category: string,
    amount: string,
    percentage: string,
}
type month = {
    month: string,
};

const expenses: expense[] = [
    {
        category: "Housing",
        amount: "-₹7,400",
        percentage: "1/2"
    },
    {
        category: "Food & drinks",
        amount: "-₹3,400",
        percentage: "1/3"
    },
    {
        category: "Transport",
        amount: "-₹900",
        percentage: "2/5"
    },
    {
        category: "Bills",
        amount: "-₹913",
        percentage: "2/3"
    },
    {
        category: "Entertainment",
        amount: "-₹1,330",
        percentage: "1/3"
    },
    {
        category: "Education",
        amount: "-₹875",
        percentage: "1/4"
    },
    {
        category: "Shopping ",
        amount: "-₹5,400",
        percentage: "1/2"
    },
    {
        category: "Others ",
        amount: "-₹1,210",
        percentage: "2/3"
    },
]
export default function TestCard({ month }: month) {
    return (
        <div className=' rounded-2xl p-2 shadow-lg bg-zinc-950 overflow-hidden relative z-[2] w-[350px] h-[370px]'>

            <div className='text-xl text-zinc-500 '>{month}</div>
            {
                expenses.map((expense) => (
                    <TestBar category={expense.category} amount={expense.amount} percentage={expense.percentage} />
                ))
            }
        </div>

    )
}
