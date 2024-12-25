export const themes = {
    default: {
      colors: {
        primary: ['#4361ee', '#3f37c9', '#3a0ca3', '#480ca8', '#560bad', '#7209b7', '#b5179e'],
        sequential: ['#caf0f8', '#90e0ef', '#48cae4', '#00b4d8', '#0096c7', '#0077b6', '#023e8a'],
        divergent: ['#d00000', '#dc2f02', '#e85d04', '#f48c06', '#faa307', '#ffba08', '#4361ee']
      },
      fonts: {
        title: '"Inter", sans-serif',
        label: '"Inter", sans-serif',
        tooltip: '"Inter", sans-serif'
      },
      spacing: {
        margin: { top: 20, right: 30, bottom: 40, left: 50 },
        padding: { chart: 16, legend: 8 }
      }
    },
    dark: {
      colors: {
        primary: ['#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8', '#1e40af', '#1e3a8a', '#172554'],
        sequential: ['#93c5fd', '#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8', '#1e40af', '#1e3a8a'],
        divergent: ['#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16', '#22c55e', '#60a5fa']
      },
      fonts: {
        title: '"Inter", sans-serif',
        label: '"Inter", sans-serif',
        tooltip: '"Inter", sans-serif'
      },
      spacing: {
        margin: { top: 20, right: 30, bottom: 40, left: 50 },
        padding: { chart: 16, legend: 8 }
      },
      background: '#1f2937',
      text: '#f9fafb'
    }
  } as const;