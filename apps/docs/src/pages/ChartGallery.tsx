import { BarChart, LineChart, PieChart } from '@data-viz/visual';
import React from 'react';

const sampleData = {
    bar: [
        { label: 'A', value: 10 },
        { label: 'B', value: 20 },
        { label: 'C', value: 15 }
    ],
    line: [
        { x: new Date('2024-01'), y: 10 },
        { x: new Date('2024-02'), y: 15 },
        { x: new Date('2024-03'), y: 12 }
    ]
};

export function ChartGallery() {
    return (
        <div className="gallery">
            <h1>Interactive Chart Gallery</h1>
            <section>
                <h2>Bar Chart</h2>
                <BarChart data={sampleData.bar} />
                <pre>{`<BarChart data={data} />`}</pre>
            </section>

            <section>
                <h2>Line Chart</h2>
                <LineChart data={sampleData.line} />
            </section>
        </div>
    );
}

