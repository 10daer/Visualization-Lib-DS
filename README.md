# Data Visualization Library

A modern, accessible React visualization library built with D3.js

## Features

- Built with React + D3.js
- Typescript support
- Modular component architecture
- Theme customization
- Accessibility-first design
- CSS Modules styling

## Installation

```bash
npm install @viz/ui @viz/assets
# or
pnpm add @viz/ui @viz/assets
```

## Quick Start

```tsx
import { BarChart, LineChart, PieChart } from '@viz/ui';
import { themes } from '@viz/assets';

// Bar Chart
<BarChart
  data={[
    { label: 'A', value: 10 },
    { label: 'B', value: 20 }
  ]}
  theme="default"
/>

// Line Chart
<LineChart
  data={[
    { x: new Date('2024-01-01'), y: 10 },
    { x: new Date('2024-01-02'), y: 15 }
  ]}
/>

// Pie Chart
<PieChart
  data={[
    { label: 'A', value: 30 },
    { label: 'B', value: 70 }
  ]}
  minSegmentPercentage={0.05}
/>
```

## Development

```bash
# Install
pnpm install

# Development
pnpm dev

# Build
pnpm build

# Test
pnpm test
```

## Project Structure

```
.
├── apps/
│   └── docs/          # Documentation
├── packages/
│   ├── assets/        # Design tokens and themes
│   └── visual/        # Visualization components
```

## Contributing

1. Fork repository
2. Create feature branch
3. Submit pull request

## License

MIT