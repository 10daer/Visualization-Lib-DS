export interface DataPoint {
    label: string;
    value: number;
    [key: string]: any;
  }
  
  export const dataUtils = {
    normalize: (data: DataPoint[]): DataPoint[] => {
      const total = data.reduce((sum, item) => sum + item.value, 0);
      return data.map(item => ({
        ...item,
        normalizedValue: item.value / total
      }));
    },
  
    sort: (data: DataPoint[], order: 'asc' | 'desc' = 'desc'): DataPoint[] => {
      return [...data].sort((a, b) => 
        order === 'desc' ? b.value - a.value : a.value - b.value
      );
    },
  
    aggregate: (data: DataPoint[], threshold: number): DataPoint[] => {
      const sortedData = dataUtils.sort(data, 'desc');
      const totalValue = data.reduce((sum, item) => sum + item.value, 0);
      
      const mainData:DataPoint[] = [];
      let otherValue = 0;
      
      for (const item of sortedData) {
        if (item.value / totalValue > threshold) {
          mainData.push(item);
        } else {
          otherValue += item.value;
        }
      }
      
      if (otherValue > 0) {
        mainData.push({ label: 'Other', value: otherValue });
      }
      
      return mainData;
    }
  };