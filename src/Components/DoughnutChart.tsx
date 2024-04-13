"use client"
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS ,  Tooltip , Legend, ArcElement } from 'chart.js';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

export default function DoughnutChart() {
    const doughnutData = {
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

    const total = doughnutData.datasets[0].data.reduce((acc, curr) => acc + curr, 0);

    const options = {
        plugins: {
            title: {
                display: true,
                text: `Total Expenses: ${total}`, 
                font: {
                    size: 18
                },
                
            },
            legend: {
                display: false,

            }
        }, 
    }
  return (
    <>
        <Doughnut options={options} data={doughnutData}></Doughnut> 
    </>
  )
}
