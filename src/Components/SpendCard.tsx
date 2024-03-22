import React from 'react'
import ExpenseBar from './ExpenseBar'

type expense = {
    category: string,
    amount: string,
    percentage: string,
}
type month = {
    month:string,
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
export default function SpendCard({month} : month) {
    return (
        <div className='border rounded-2xl p-2 shadow-lg'>
            <div className='text-xl text-gray-500 '>{month}</div>
            {
                expenses.map((expense) => (
                    <ExpenseBar category={expense.category} amount={expense.amount} percentage={expense.percentage} />
                ))
            }
        </div>
    )
}
