import { themes } from '@advisell/viz-assets';
import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';
import { a11yUtils } from '../utils/accessibility';
import { dataUtils } from '../utils/dataProcessing';
import styles from './PieChart.module.css';

export interface PieChartProps {
    data: Array<{ label: string; value: number }>;
    width?: number;
    height?: number;
    theme?: keyof typeof themes;
    minSegmentPercentage?: number;
}

export const PieChart: React.FC<PieChartProps> = ({
    data,
    width = 400,
    height = 400,
    theme = 'default',
    minSegmentPercentage = 0.05
}) => {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (!svgRef.current) return;

        const svg = d3.select(svgRef.current);
        svg.selectAll('*').remove();

        const margin = themes[theme].spacing.margin;
        const radius = Math.min(width - margin.left - margin.right,
            height - margin.top - margin.bottom) / 2;

        // Aggregate small segments
        const processedData = dataUtils.aggregate(data, minSegmentPercentage);

        const pie = d3.pie<typeof data[0]>()
            .value(d => d.value);

        const arc = d3.arc<d3.PieArcDatum<typeof data[0]>>()
            .innerRadius(0)
            .outerRadius(radius);

        const g = svg.append('g')
            .attr('transform', `translate(${width / 2},${height / 2})`);

        // Create pie segments
        const segments = g.selectAll('path')
            .data(pie(processedData))
            .enter()
            .append('g');

        segments.append('path')
            .attr('d', arc)
            .attr('fill', (d, i) => themes[theme].colors.primary[i % themes[theme].colors.primary.length])
            .attr('class', styles.segment)
            .attr('role', 'graphics-symbol')
            .attr('aria-label', d => `${d.data.label}: ${d.data.value}`);

        // Add labels
        segments.append('text')
            .attr('transform', d => `translate(${arc.centroid(d)})`)
            .attr('dy', '.35em')
            .style('text-anchor', 'middle')
            .style('fill', d => {
                const backgroundColor = themes[theme].colors.primary[
                    processedData.indexOf(d.data) % themes[theme].colors.primary.length
                ];
                return a11yUtils.getContrastColor(backgroundColor);
            })
            .text(d => `${d.data.label}`);

        // Enhance accessibility
        a11yUtils.enhanceKeyboardNavigation(svgRef.current);
        svg.attr('aria-label', a11yUtils.generateAriaLabel('Pie', data));
    }, [data, width, height, theme, minSegmentPercentage]);

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