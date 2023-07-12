import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const LineGraph = ({title, youtubeData}) => {
    return(
        <section>
            <h1>Line Graph</h1>
            <Line data={youtubeData} title ={title} />
        </section>
    )
};

export default LineGraph;