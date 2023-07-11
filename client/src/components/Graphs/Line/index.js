import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const Line = ({title, youtubeData}) => {
    return(
        <section>
            <Line data={youtubeData} title ={title} />
        </section>
    )
};

export default LineGraph;