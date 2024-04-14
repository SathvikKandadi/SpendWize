"use client"
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS ,  Tooltip , Legend, ArcElement } from 'chart.js';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

export default function BudgetCard() {
    const pieData = {
        labels: ["Amount Spent" , "Amount Remaining" ],
        datasets:[
            {
                data: [3000 , 1500 ],
                backgroundColor: [
                    "red",
                    // "rgb(77,197,91)",
                    "gray",
                   
                ],
                borderWidth: 2,
            },
        ],
       
        
        hoverOffset : 4,
    }
    const options = {
        plugins: {
            title: {
                display: true,
                text: `Amount Spent`, 
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
        <Doughnut options={options} data={pieData}></Doughnut> 
    </>
  )
}



