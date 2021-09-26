import React from "react";
import { Line } from 'react-chartjs-2';
const Graph = () => {
    return (
        <>
            <Line
                data={
                    {
                        labels: ['1st Sem', '2nd Sem', '3rd Sem', '4th Sem', '5th Sem', '6th Sem'],
                        datasets: [{
                            label: 'Graph for result',
                            data: [6.06, 7.02,7.45 , 9.76, 9.54, 9.86],
                            backgroundColor: [
                                'red',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]
                    }

                }
                width={100}
                height={50}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [
                            {
                            tricks:{
                            beginAtZero: true,
                            }
                            }
                        ]
                    }
                }}
            />
        </>
    )

}
export default Graph;