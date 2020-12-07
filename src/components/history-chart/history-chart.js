import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = () => {

    const data = {
        labels: ['January', 'February', 'March',
            'April', 'May'],
        datasets: [
            {
                label: 'Rainfall',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [65, 59, 80, 81, 56]
            }
        ]
    }

    const options = {
        legend: {
            display: true,
            position: 'bottom'
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 100,
                        stepSize: 10,
                    }
                }
            ]
        }
    }
    return (
        <div className='chart-wrapper'>
            <div className='header-chart'>
                <h1>Revenue</h1>
                <select id="category" className="" >
                    <option defaultValue>Month</option>
                    <option>Year</option>
                </select>
            </div>
            <Line data={data}
                options={options} />
        </div>
    );
};

export default Chart