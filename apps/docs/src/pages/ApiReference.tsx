// apps/docs/src/pages/ApiReference.tsx
import React from 'react';
import { CodeBlock } from '../components/CodeBlock';

export function ApiReference() {
    return (
        <div className="api-reference">
            <h1>API Reference</h1>
            <section>
                <h2>BarChart</h2>
                <CodeBlock>
                    {`interface BarChartProps {
  data: Array<{ label: string; value: number }>;
  width?: number;
  height?: number;
  theme?: 'default' | 'dark';
}`}
                </CodeBlock>
            </section>
        </div>
    );
}

