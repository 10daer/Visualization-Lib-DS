import { BarChart, LineChart, PieChart } from '@data-viz/visual';
import React from 'react';

export function Home() {
    return (
        <div className="home">
            <h1>Data Visualization Library</h1>
            <p>Modern, accessible React visualization components built with D3.js</p>

            <div className="example-chart">
                <BarChart
                    data={[
                        { label: 'A', value: 30 },
                        { label: 'B', value: 45 },
                        { label: 'C', value: 60 }
                    ]}
                />
            </div>
        </div>
    );
}