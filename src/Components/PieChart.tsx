"use client"
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS ,  Tooltip , Legend, ArcElement } from 'chart.js';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

export default function PieChart() {
    const pieData = {
        labels: ["Food & Drinks" , "Shopping" , "Transport" , "Entertainment" , "Bills" , "Groceries" , "Others"],
        datasets:[
            {
                label: "Expenses",
                data: [3000 , 1500 , 500 , 890 , 2000 , 750 , 350],
                backgroundColor: [
                    "red",
                    "blue",
                    "yellow",
                    "purple",
                    "green",
                    "orange",
                    "brown"
                ],
                borderWidth: 2,
            },
        ],
        data: [3000 , 1500 , 500 , 890 , 2000 , 750 , 350],
        
        hoverOffset : 4,
    }
    const options = {}
  return (
    <div className='w-[1000px] h-[250px]  bg-white shadow-lg rounded-lg p-2 mx-8 my-4 cursor-pointer'>
        <Pie options={options} data={pieData}></Pie> 
    </div>
  )
}
