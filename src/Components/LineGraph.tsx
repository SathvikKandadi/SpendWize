"use client"
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS , CategoryScale , LinearScale , PointElement , Title , Tooltip , Legend, LineElement, Filler } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)

export default function LineGraph() {
    const lineData = {
        labels: ["Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" , "Sunday"],
        datasets:[
            {
                fill:true,
                label: "Expenses",
                data: [3000 , 1500 , 500 , 890 , 2000 , 750 , 350],
                backgroundColor: "rgb(77,197,91)",
                borderWidth: 2,
            },
        ],
    }
    const options = {}
  return (
    <>
        <Line options={options} data={lineData}></Line> 
    </>
  )
}
