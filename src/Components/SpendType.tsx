"use client"
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS ,  Tooltip , Legend, ArcElement } from 'chart.js';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

export default function SpendType() {
    const pieData = {
        labels: ["Wants" , "Needs" ],
        datasets:[
            {
                data: [3000 , 1500 ],
                backgroundColor: [
                    "red",
                    "blue",
                   
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
                text: `Spend Type`, 
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
    <div className='rounded-lg w-[250px] h-[250px] mx-8 my-4 cursor-pointer bg-white shadow-lg  p-2'>
        <Pie options={options} data={pieData}></Pie> 
    </div>
  )
}



