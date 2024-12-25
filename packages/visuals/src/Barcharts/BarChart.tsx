import { defaultTheme } from '@advisell/viz-assets';
import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';
import styles from './BarChart.module.css';

export interface BarChartProps {
    data: Array<{ label: string; value: number }>;
    width?: number;
    height?: number;
    margin?: typeof defaultTheme.spacing.margin;
}

export const BarChart: React.FC<BarChartProps> = ({
    data,
    width = 600,
    height = 400,
    margin = defaultTheme.spacing.margin
}) => {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (!svgRef.current) return;

        const svg = d3.select(svgRef.current);
        svg.selectAll('*').remove();

        const chartWidth = width - margin.left - margin.right;
        const chartHeight = height - margin.top - margin.bottom;

        const x = d3.scaleBand()
            .range([0, chartWidth])
            .padding(0.1);

        const y = d3.scaleLinear()
            .range([chartHeight, 0]);

        const g = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        x.domain(data.map(d => d.label));
        y.domain([0, d3.max(data, d => d.value) || 0]);

        g.append('g')
            .attr('class', styles.axis)
            .attr('transform', `translate(0,${chartHeight})`)
            .call(d3.axisBottom(x));

        g.append('g')
            .attr('class', styles.axis)
            .call(d3.axisLeft(y));

        g.selectAll('.bar')
            .data(data)
            .enter().append('rect')
            .attr('class', styles.bar)
            .attr('x', d => x(d.label) || 0)
            .attr('width', x.bandwidth())
            .attr('y', d => y(d.value))
            .attr('height', d => chartHeight - y(d.value))
            .attr('fill', defaultTheme.colors.primary[0]);

    }, [data, width, height, margin]);

    return (
        <div className={styles.container}>
            <svg ref={svgRef} width={width} height={height} />
        </div>
    );
};