import { themes } from '@advisell/viz-assets';
import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';
import { a11yUtils } from '../utils/accessibility';
import styles from './LineChart.module.css';

export interface LineChartProps {
    data: Array<{ x: number | Date; y: number }>;
    width?: number;
    height?: number;
    theme?: keyof typeof themes;
}

export const LineChart: React.FC<LineChartProps> = ({
    data,
    width = 600,
    height = 400,
    theme = 'default'
}) => {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (!svgRef.current) return;

        const svg = d3.select(svgRef.current);
        svg.selectAll('*').remove();

        const margin = themes[theme].spacing.margin;
        const chartWidth = width - margin.left - margin.right;
        const chartHeight = height - margin.top - margin.bottom;

        const x = d3.scaleTime()
            .domain(d3.extent(data, d => new Date(d.x)) as [Date, Date])
            .range([0, chartWidth]);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.y) || 0])
            .range([chartHeight, 0]);

        const line = d3.line<typeof data[0]>()
            .x(d => x(new Date(d.x)))
            .y(d => y(d.y));

        const g = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // Add axes
        g.append('g')
            .attr('transform', `translate(0,${chartHeight})`)
            .call(d3.axisBottom(x));

        g.append('g')
            .call(d3.axisLeft(y));

        // Add line
        g.append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', themes[theme].colors.primary[0])
            .attr('stroke-width', 2)
            .attr('d', line);

        // Add points
        g.selectAll('.dot')
            .data(data)
            .enter().append('circle')
            .attr('class', styles.dot)
            .attr('cx', d => x(new Date(d.x)))
            .attr('cy', d => y(d.y))
            .attr('r', 4)
            .attr('fill', themes[theme].colors.primary[0]);

        // Enhance accessibility
        a11yUtils.enhanceKeyboardNavigation(svgRef.current);
        svg.attr('aria-label', a11yUtils.generateAriaLabel('Line', data));
    }, [data, width, height, theme]);

    return (
        <div className={styles.container}>
            <svg
                ref={svgRef}
                width={width}
                height={height}
                role="img"
            />
        </div>
    );
};