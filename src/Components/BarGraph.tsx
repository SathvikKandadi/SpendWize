"use client"
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS , CategoryScale , LinearScale , BarElement , Title , Tooltip , Legend } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function BarGraph() {
    const barData = {
        labels: ["Food & Drinks" , "Shopping" , "Transport" , "Entertainment" , "Bills" , "Groceries" , "Others"],
        datasets:[
            {
                label: "Expenses",
                data: [3000 , 1500 , 500 , 890 , 2000 , 750 , 350],
                backgroundColor: "red",
                borderWidth: 2,
            },
        ],
    }
    const options = {}
  return (
    <div className='w-[1000px] h-[250px]  bg-white shadow-lg rounded-lg p-2 mx-8 my-4 cursor-pointer'>
        <Bar options={options} data={barData}></Bar> 
    </div>
  )
}
