export const defaultTheme = {
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
      margin: {
        top: 20,
        right: 30,
        bottom: 40,
        left: 50
      },
      padding: {
        chart: 16,
        legend: 8
      }
    }
  } as const;
  